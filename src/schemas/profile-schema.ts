import { z } from "zod";

export const passwordUpdateSchema = z
  .object({
    confirmPassword: z.string().min(1, "Confirm your new password"),
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z.string().min(8, "New password must be at least 8 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "New password and confirm password do not match",
    path: ["confirmPassword"],
  });

export type PasswordUpdateFields = z.infer<typeof passwordUpdateSchema>;
export type PasswordUpdateErrors = Partial<Record<keyof PasswordUpdateFields, string>>;
