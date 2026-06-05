import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { AuthContext } from "@/context/auth-context-value";
import { AUTH_TOKEN_STORAGE_KEY } from "@/lib/api";
import type {
  AuthContextValue,
  AuthProviderProps,
  AuthUser,
} from "@/types/auth-fields";

const AUTH_USER_STORAGE_KEY = "gamehull-auth-user";

function getStoredUser() {
  try {
    const storedUser = localStorage.getItem(AUTH_USER_STORAGE_KEY);

    return storedUser ? (JSON.parse(storedUser) as AuthUser) : null;
  } catch {
    return null;
  }
}

function getStoredToken() {
  return localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(() => getStoredUser());
  const [token, setToken] = useState<string | null>(() => getStoredToken());

  useEffect(() => {
    if (user && token) {
      localStorage.setItem(AUTH_USER_STORAGE_KEY, JSON.stringify(user));
      localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token);
      return;
    }

    localStorage.removeItem(AUTH_USER_STORAGE_KEY);
    localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
  }, [user, token]);

  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated: Boolean(user && token),
      token,
      signIn: ({ token, user }) => {
        setToken(token);
        setUser(user);
      },
      signOut: () => {
        setToken(null);
        setUser(null);
      },
      user,
    }),
    [user, token],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
