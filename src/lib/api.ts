import axios from "axios";

export const AUTH_TOKEN_STORAGE_KEY = "gamehull-auth-token";
const MOCK_USERS_DB_KEY = "gamehull-mock-users-db";

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

  // Helper to get users from simulated DB (auto-seeds admin)
  const getMockUsers = () => {
    try {
      const data = localStorage.getItem(MOCK_USERS_DB_KEY);
      const users = data ? JSON.parse(data) : {};
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
  const saveMockUsers = (users: any) => {
    localStorage.setItem(MOCK_USERS_DB_KEY, JSON.stringify(users));
  };

  // Intercept api.post calls and return simulated JWT response payloads
  api.post = async function (url: string, data?: any): Promise<any> {
    // Simulate network delay (200 milliseconds) for realistic UI loading states
    await new Promise((resolve) => setTimeout(resolve, 200));

    const users = getMockUsers();

    // 1. REGISTRATION SIMULATION
    if (url === "/auth/register") {
      const { email, fullName, password, username } = data || {};

      if (!email || !password || !fullName || !username) {
        const err = new Error("Bad Request") as any;
        err.response = {
          status: 400,
          data: { message: "All fields are required." },
        };
        throw err;
      }

      if (users[email.toLowerCase()]) {
        const err = new Error("Conflict") as any;
        err.response = {
          status: 409,
          data: { message: "This email address is already registered." },
        };
        throw err;
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

      return {
        status: 200,
        statusText: "OK",
        headers: {},
        config: {},
        data: {
          token,
          user: {
            email: newUser.email,
            name: newUser.name,
            username: newUser.username,
            balance: newUser.balance,
            role: newUser.role,
          },
        },
      };
    }

    // 2. LOGIN SIMULATION
    if (url === "/auth/login") {
      const { email, password } = data || {};
      const user = users[email?.toLowerCase()];

      if (!user || user.password !== password) {
        const err = new Error("Unauthorized") as any;
        err.response = {
          status: 401,
          data: { message: "Invalid email or password." },
        };
        throw err;
      }

      const token = btoa(
        JSON.stringify({ email: user.email, exp: Date.now() + 3600000 }),
      );

      return {
        status: 200,
        statusText: "OK",
        headers: {},
        config: {},
        data: {
          token,
          user: {
            email: user.email,
            name: user.name,
            username: user.username,
            balance: user.balance === 5000 ? 4.0 : user.balance,
            role: user.role || "user",
          },
        },
      };
    }

    // 3. FORGOT PASSWORD SIMULATION
    if (url === "/auth/forgot-password") {
      const { email } = data || {};
      if (!users[email?.toLowerCase()]) {
        const err = new Error("Not Found") as any;
        err.response = {
          status: 404,
          data: { message: "No account found with this email." },
        };
        throw err;
      }

      return {
        status: 200,
        statusText: "OK",
        headers: {},
        config: {},
        data: { message: "OTP sent to your email." },
      };
    }

    // 4. OTP VERIFICATION SIMULATION
    if (url === "/auth/verify-otp") {
      const { otp } = data || {};
      // Accept '1234' as correct OTP for this simulation
      if (otp !== "1234") {
        const err = new Error("Bad Request") as any;
        err.response = {
          status: 400,
          data: { message: "Invalid verification code. Please enter '1234'." },
        };
        throw err;
      }

      return {
        status: 200,
        statusText: "OK",
        headers: {},
        config: {},
        data: { message: "OTP verified successfully." },
      };
    }

    // 5. RESET PASSWORD SIMULATION
    if (url === "/auth/reset-password") {
      const { email, password } = data || {};
      const key = email?.toLowerCase();
      const user = users[key];

      if (!user) {
        const err = new Error("Not Found") as any;
        err.response = {
          status: 404,
          data: { message: "No account found with this email." },
        };
        throw err;
      }

      if (!password || password.length < 8) {
        const err = new Error("Bad Request") as any;
        err.response = {
          status: 400,
          data: { message: "Password must be at least 8 characters." },
        };
        throw err;
      }

      users[key] = { ...user, password };
      saveMockUsers(users);

      return {
        status: 200,
        statusText: "OK",
        headers: {},
        config: {},
        data: { message: "Password updated successfully." },
      };
    }

    const err = new Error("Not Found") as any;
    err.response = {
      status: 404,
      data: { message: `Route ${url} not found.` },
    };
    throw err;
  };
}
