import * as z from "zod";

export const userNameSchema = z.object({
  name: z.string().min(3).max(32),
});
export const UserSchema = z.object({
  username: z.string().min(1, "Username is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
  role: z.string(),
});
