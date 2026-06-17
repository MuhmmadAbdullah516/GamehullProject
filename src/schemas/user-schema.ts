import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("Enter a valid email address"),
  role: z.enum(["Player", "Agent", "Admin"] as const, {
    message: "Invalid role selected",
  }),
  status: z.enum(["Active", "Banned", "Pending"] as const, {
    message: "Invalid status selected",
  }),
  balance: z.string().optional()

});
