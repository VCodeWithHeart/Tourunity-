import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(1, "Name is required").min(2, "Name is too short").regex(/^[a-zA-Z\s]+$/, "Name must only contain letters and spaces"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters"),
});

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});
