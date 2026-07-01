import { z } from "zod";

export const reviewSchema = z.object({
  userName: z.string().trim().min(2, "Name must be at least 2 characters"),
  userEmail: z.string().trim().email("Please enter a valid email address"),
  review: z
    .string()
    .trim()
    .min(10, "Review must be at least 10 characters")
    .max(500, "Review must be at most 500 characters"),
  stars: z.preprocess(
    (val) => parseInt(val as string, 10),
    z
      .number()
      .int()
      .min(1, "Rating must be at least 1 star")
      .max(5, "Rating must be at most 5 stars")
  ),
  status: z.enum(["Published", "Pending"], {
    message: "Status must be Published or Pending",
  }),
});
