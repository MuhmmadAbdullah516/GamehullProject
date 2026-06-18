import { z } from "zod";

export const faqSchema = z.object({
  question: z.string().trim().min(5, "Question must be at least 5 characters"),
  answer: z.string().trim().min(10, "Answer must be at least 10 characters"),
  order: z.preprocess(
    (val) => parseInt(val as string, 10),
    z.number().int().min(1, "Order must be a positive number")
  ),
});
