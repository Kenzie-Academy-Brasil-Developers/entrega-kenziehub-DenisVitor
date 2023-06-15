import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .nonempty("O E-mail é obrigatório")
    .email("Insira um E-mail válido"),
  password: z.string().nonempty("A senha é obrigatória"),
});
