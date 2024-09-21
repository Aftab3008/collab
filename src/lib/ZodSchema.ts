import { z } from "zod";

export const SignUpSchema = z
  .object({
    name: z
      .string()
      .min(3, {
        message: "Username must be at least 3 characters long",
      })
      .max(20, {
        message: "Username must be at most 20 characters long",
      }),
    email: z.string().email(),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
    confirmPassword: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
  });

export const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
});
