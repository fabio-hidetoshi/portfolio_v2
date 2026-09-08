import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Nome muito curto").max(150),
  email: z.string().trim().email("E-mail inválido").max(200),
  message: z.string().trim().min(10, "Mensagem muito curta").max(2000),
  locale: z.enum(["pt", "en"]).default("pt"),
});

export type ContactInput = z.infer<typeof contactSchema>;
