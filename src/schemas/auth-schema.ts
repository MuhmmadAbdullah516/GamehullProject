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
    captcha: z.string().trim().min(1, "Captcha is required"),
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

export const resetPasswordSchema = z
  .object({
    confirmPassword: z.string().min(1, "Confirm your new password"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
