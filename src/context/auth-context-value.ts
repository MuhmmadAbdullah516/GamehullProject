import { createContext } from "react";

import type { AuthContextValue } from "@/types/auth-fields";

export const AuthContext = createContext<AuthContextValue | null>(null);
