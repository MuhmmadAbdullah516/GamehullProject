import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { AuthContext } from "@/context/auth-context-value";
import type {
  AuthContextValue,
  AuthProviderProps,
  AuthUser,
} from "@/types/auth-fields";

const AUTH_STORAGE_KEY = "gamehull-auth-user";

function getStoredUser() {
  try {
    const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);

    return storedUser ? (JSON.parse(storedUser) as AuthUser) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(() => getStoredUser());

  useEffect(() => {
    if (user) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
      return;
    }

    localStorage.removeItem(AUTH_STORAGE_KEY);
  }, [user]);

  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated: Boolean(user),
      signIn: ({ email, name }) => {
        setUser({
          balance: 5,
          email,
          name: name?.trim() || "Muhammad Abdullah",
        });
      },
      signOut: () => {
        setUser(null);
      },
      user,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
