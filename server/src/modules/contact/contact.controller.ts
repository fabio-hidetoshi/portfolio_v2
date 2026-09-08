import crypto from "node:crypto";
import type { Request, Response, NextFunction } from "express";
import { ApiError } from "../../middlewares/errorHandler.js";
import { contactSchema } from "./contact.validation.js";
import { insertContactMessage, markContactStatus } from "./contact.repository.js";
import { sendContactNotification } from "./contact.mailer.js";

function hashIp(ip: string | undefined): string | null {
  if (!ip) return null;
  return crypto.createHash("sha256").update(ip).digest("hex").slice(0, 32);
}

export async function submitContact(req: Request, res: Response, next: NextFunction) {
  try {
    const parsed = contactSchema.safeParse(req.body);
    if (!parsed.success) {
      throw new ApiError(400, "validation_error", parsed.error.issues[0]?.message ?? "Dados inválidos");
    }

    const ipHash = hashIp(req.ip);
    const id = await insertContactMessage(parsed.data, ipHash);

    const sent = await sendContactNotification(parsed.data);
    await markContactStatus(id, sent ? "emailed" : "failed");

    res.status(201).json({ data: { id } });
  } catch (err) {
    next(err);
  }
}
