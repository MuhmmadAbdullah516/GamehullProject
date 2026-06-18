import { z } from "zod";

export const transactionSchema = z.object({
  userName: z.string().trim().min(1, "User name is required"),
  userEmail: z.string().trim().email("Enter a valid email address").or(z.literal("")),
  type: z.enum(["Deposit", "Withdraw", "Bonus", "Refund"] as const, {
    message: "Invalid transaction type selected",
  }),
  amount: z
    .string()
    .trim()
    .min(1, "Amount is required")
    .refine((val) => {
      const parsed = parseFloat(val.replace(/[$,]/g, ""));
      return !isNaN(parsed) && parsed > 0;
    }, "Enter a valid amount greater than 0"),
  gamePlatform: z.string().trim().min(1, "Game platform is required"),
  status: z.enum(["Completed", "Pending", "Failed", "Cancelled"] as const, {
    message: "Invalid status selected",
  }),
});
