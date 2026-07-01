import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

export const AUTH_TOKEN_STORAGE_KEY = "gamehull-auth-token";
const MOCK_USERS_DB_KEY = "gamehull-mock-users-db";

type MockUser = {
  email: string;
  name: string;
  username: string;
  password: string;
  balance: number;
  role: "admin" | "user";
};

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// CLIENT-SIDE JWT BACKEND SIMULATION
// Runs only when VITE_API_BASE_URL is not set (frontend-only mode)
if (!import.meta.env.VITE_API_BASE_URL) {
  // Hard-coded admin account — always available, no console seeding needed
  const ADMIN_ACCOUNT = {
    email: "admin@gamehull.com",
    name: "Admin",
    username: "admin",
    password: "admin123",
    balance: 0,
    role: "admin" as const,
  };

  const createMockAxiosError = <T extends { message: string }>(
    status: number,
    data: T,
    statusText = "Error",
  ): AxiosError<T> => {
    const err = new Error(data.message) as AxiosError<T>;
    const response: AxiosResponse<T> = {
      data,
      status,
      statusText,
      headers: {},
      config: {} as InternalAxiosRequestConfig,
    };
    err.response = response;
    return err;
  };

  const makeMockResponse = <T, R extends AxiosResponse<T> = AxiosResponse<T>>(
    data: T,
  ): R =>
    ({
      status: 200,
      statusText: "OK",
      headers: {},
      config: {} as InternalAxiosRequestConfig,
      data,
    }) as unknown as R;

  // Helper to get users from simulated DB (auto-seeds admin)
  const getMockUsers = (): Record<string, MockUser> => {
    try {
      const data = localStorage.getItem(MOCK_USERS_DB_KEY);
      const users = data ? (JSON.parse(data) as Record<string, MockUser>) : {};
      // Always ensure the admin account exists
      if (!users[ADMIN_ACCOUNT.email]) {
        users[ADMIN_ACCOUNT.email] = ADMIN_ACCOUNT;
        localStorage.setItem(MOCK_USERS_DB_KEY, JSON.stringify(users));
      }
      return users;
    } catch {
      return { [ADMIN_ACCOUNT.email]: ADMIN_ACCOUNT };
    }
  };

  // Helper to save users to simulated DB
  const saveMockUsers = (users: Record<string, MockUser>) => {
    localStorage.setItem(MOCK_USERS_DB_KEY, JSON.stringify(users));
  };

  // Intercept api.post calls and return simulated JWT response payloads
  api.post = async function <
    T = any,
    R = AxiosResponse<T, unknown, {}>,
    D = any,
  >(url: string, data?: D, _config?: AxiosRequestConfig<D>): Promise<R> {
    // Simulate network delay (200 milliseconds) for realistic UI loading states
    await new Promise((resolve) => setTimeout(resolve, 200));

    const users = getMockUsers();

    // 1. REGISTRATION SIMULATION
    if (url === "/auth/register") {
      const { email, fullName, password, username } = (data as any) || {};

      if (!email || !password || !fullName || !username) {
        throw createMockAxiosError(400, {
          message: "All fields are required.",
        });
      }

      if (users[email.toLowerCase()]) {
        throw createMockAxiosError(409, {
          message: "This email address is already registered.",
        });
      }

      // Store new account credentials with the default wallet balance
      const newUser = {
        email: email.toLowerCase(),
        name: fullName,
        username,
        password,
        balance: 4.0,
        role: "user" as const,
      };

      users[email.toLowerCase()] = newUser;
      saveMockUsers(users);

      // Create a mock JWT token (base64 encoded JSON string)
      const token = btoa(
        JSON.stringify({ email: newUser.email, exp: Date.now() + 3600000 }),
      );

      return makeMockResponse({
        token,
        user: {
          email: newUser.email,
          name: newUser.name,
          username: newUser.username,
          balance: newUser.balance,
          role: newUser.role,
        },
      }) as any;
    }

    // 2. LOGIN SIMULATION
    if (url === "/auth/login") {
      const { email, password } = (data as any) || {};
      const user = users[email?.toLowerCase()];

      if (!user || user.password !== password) {
        throw createMockAxiosError(401, {
          message: "Invalid email or password.",
        });
      }

      const token = btoa(
        JSON.stringify({ email: user.email, exp: Date.now() + 3600000 }),
      );

      return makeMockResponse({
        token,
        user: {
          email: user.email,
          name: user.name,
          username: user.username,
          balance: user.balance === 5000 ? 4.0 : user.balance,
          role: user.role || "user",
        },
      }) as any;
    }

    // 3. FORGOT PASSWORD SIMULATION
    if (url === "/auth/forgot-password") {
      const { email } = (data as any) || {};
      if (!users[email?.toLowerCase()]) {
        throw createMockAxiosError(404, {
          message: "No account found with this email.",
        });
      }

      return makeMockResponse({ message: "OTP sent to your email." }) as any;
    }

    // 4. OTP VERIFICATION SIMULATION
    if (url === "/auth/verify-otp") {
      const { otp } = (data as any) || {};
      // Accept '1234' as correct OTP for this simulation
      if (otp !== "1234") {
        throw createMockAxiosError(400, {
          message: "Invalid verification code. Please enter '1234'.",
        });
      }

      return makeMockResponse({ message: "OTP verified successfully." }) as any;
    }

    // 5. RESET PASSWORD SIMULATION
    if (url === "/auth/reset-password") {
      const { email, password } = (data as any) || {};
      const key = email?.toLowerCase();
      const user = users[key];

      if (!user) {
        throw createMockAxiosError(404, {
          message: "No account found with this email.",
        });
      }

      if (!password || password.length < 8) {
        throw createMockAxiosError(400, {
          message: "Password must be at least 8 characters.",
        });
      }

      users[key] = { ...user, password };
      saveMockUsers(users);

      return makeMockResponse({ message: "Password updated successfully." }) as any;
    }

    throw createMockAxiosError(404, {
      message: `Route ${url} not found.`,
    });
  };
}
