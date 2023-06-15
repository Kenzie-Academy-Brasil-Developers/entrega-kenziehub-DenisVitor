import { z } from "zod";

export const RegisterSchema = z
  .object({
    name: z
      .string()
      .nonempty("O nome é obrigatório")
      .min(2, "O nome deve conter pelo menos até dois caracteres"),
    email: z
      .string()
      .nonempty("O E-mail é obrigatório")
      .min(2, "O E-mail precisar conter até 2 caracteres")
      .email("Insira um E-mail válido"),
    bio: z
      .string()
      .nonempty("A Biografia é obrigatória")
      .min(10, "A biografia precisar conter até dez caracteres"),
    contact: z
      .string()
      .nonempty("O Contato é obrigatório")
      .min(8, "O Contato precisa ter pelo menos oito caracteres"),
    course_module: z.string().nonempty("É obrigatório escolher um campo"),
    password: z
      .string()
      .nonempty("A senha é obrigatória")
      .min(6, "A senha precisar conter pelo menos seis caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),
    confirm: z.string().nonempty("É necessário confimar a senha"),
  })
  .refine(({ password, confirm }) => confirm === password, {
    message: "As senha precisam ser iguais",
    path: ["confirm"],
  });
