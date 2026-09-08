import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().min(1, "DATABASE_URL é obrigatório"),
  PORT: z.coerce.number().default(4000),
  CORS_ORIGIN: z.string().min(1).default("http://localhost:5173"),
  RESEND_API_KEY: z.string().optional(),
  CONTACT_RECEIVER_EMAIL: z.string().email().default("fhaperes@gmail.com"),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
});

export const env = envSchema.parse(process.env);
