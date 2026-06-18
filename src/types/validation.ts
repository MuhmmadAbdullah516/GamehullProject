import type { z } from "zod";

import type {
  forgetPasswordSchema,
  loginSchema,
  registerSchema,
  resetPasswordSchema,
  verifyOtpSchema,
} from "@/schemas/auth-schema";
import type { passwordUpdateSchema } from "@/schemas/profile-schema";
import type { createUserSchema } from "@/schemas/user-schema";
import type { gameSchema } from "@/schemas/game-schema";
import type { transactionSchema } from "@/schemas/transaction-schema";
import { faqSchema } from "@/schemas/faq-schema";
import { reviewSchema } from "@/schemas/review-schema";


export type LoginErrors = Partial<
  Record<keyof z.infer<typeof loginSchema>, string>
>;
export type RegisterErrors = Partial<
  Record<keyof z.infer<typeof registerSchema>, string>
>;
export type ForgetPasswordErrors = Partial<
  Record<keyof z.infer<typeof forgetPasswordSchema>, string>
>;
export type VerifyOtpErrors = Partial<
  Record<keyof z.infer<typeof verifyOtpSchema>, string>
>;
export type ResetPasswordErrors = Partial<
  Record<keyof z.infer<typeof resetPasswordSchema>, string>
>;

export type PasswordUpdateFields = z.infer<typeof passwordUpdateSchema>;
export type PasswordUpdateErrors = Partial<
  Record<keyof PasswordUpdateFields, string>
>;

export type CreateUserFields = z.infer<typeof createUserSchema>;
export type CreateUserErrors = Partial<Record<keyof CreateUserFields, string>>;

export type GameFields = z.infer<typeof gameSchema>;
export type GameErrors = Partial<Record<keyof GameFields, string>>;

export type TransactionFields = z.infer<typeof transactionSchema>;
export type TransactionErrors = Partial<Record<keyof TransactionFields, string>>;

export type FaqFields = z.infer<typeof faqSchema>;
export type FaqErrors = Partial<Record<keyof FaqFields, string>>;

export type ReviewFields = z.infer<typeof reviewSchema>;
export type ReviewErrors = Partial<Record<keyof ReviewFields, string>>;
