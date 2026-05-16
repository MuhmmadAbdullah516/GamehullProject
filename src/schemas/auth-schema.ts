import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

export const registerSchema = z
  .object({
    fullName: z.string().trim().min(2, "Full name must be at least 2 characters"),
    username: z.string().trim().min(3, "Username must be at least 3 characters"),
    email: z.email("Enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Confirm your password"),
    terms: z.literal("on", {
      error: "You must accept the terms",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const forgetPasswordSchema = z.object({
  email: z.email("Enter a valid email address"),
});

export const verifyOtpSchema = z.object({
  otp: z.string().regex(/^\d{4}$/, "Enter the 4-digit code"),
});

export type LoginErrors = Partial<Record<keyof z.infer<typeof loginSchema>, string>>;
export type RegisterErrors = Partial<Record<keyof z.infer<typeof registerSchema>, string>>;
export type ForgetPasswordErrors = Partial<
  Record<keyof z.infer<typeof forgetPasswordSchema>, string>
>;
export type VerifyOtpErrors = Partial<Record<keyof z.infer<typeof verifyOtpSchema>, string>>;
