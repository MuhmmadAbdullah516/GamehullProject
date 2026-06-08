import type { z } from "zod";

import type {
  forgetPasswordSchema,
  loginSchema,
  registerSchema,
  resetPasswordSchema,
  verifyOtpSchema,
} from "@/schemas/auth-schema";
import type { passwordUpdateSchema } from "@/schemas/profile-schema";

export type LoginErrors = Partial<Record<keyof z.infer<typeof loginSchema>, string>>;
export type RegisterErrors = Partial<Record<keyof z.infer<typeof registerSchema>, string>>;
export type ForgetPasswordErrors = Partial<Record<keyof z.infer<typeof forgetPasswordSchema>, string>>;
export type VerifyOtpErrors = Partial<Record<keyof z.infer<typeof verifyOtpSchema>, string>>;
export type ResetPasswordErrors = Partial<Record<keyof z.infer<typeof resetPasswordSchema>, string>>;

export type PasswordUpdateFields = z.infer<typeof passwordUpdateSchema>;
export type PasswordUpdateErrors = Partial<Record<keyof PasswordUpdateFields, string>>;
