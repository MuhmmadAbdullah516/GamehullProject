import { z } from "zod";

export const gameSchema = z.object({
  name: z.string().trim().min(1, "Game name is required"),
  slug: z
    .string()
    .trim()
    .min(1, "Slug is required")
    .regex(/^[a-z0-9-]+$/, "Slug must be lowercase alphanumeric and hyphens only"),
  tag: z.enum(["TOP", "HOT", "NEW"] as const, {
    message: "Invalid tag selected",
  }),
  description: z.string().trim().min(5, "Description must be at least 5 characters"),
  imageKey: z.enum([
    "cash-machine",
    "fire-kirin",
    "game-vault",
    "golden-dragon",
    "juwa",
    "lucky-tiger",
    "milky-way",
    "orion-stars",
    "pandamaster",
    "river-sweeps",
    "star-casino",
    "ultra-panda",
    "vegas-sweeps",
  ] as const, {
    message: "Invalid image key selected",
  }),
  status: z.enum(["available", "maintenance"] as const, {
    message: "Invalid status selected",
  }),
  buttonText: z.string().trim().min(1, "Button text is required"),
});
