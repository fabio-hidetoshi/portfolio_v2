import type { NextFunction, Request, Response } from "express";

export class ApiError extends Error {
  status: number;
  code: string;

  constructor(status: number, code: string, message: string) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ error: { message: err.message, code: err.code } });
  }

  console.error(err);
  return res.status(500).json({ error: { message: "Erro interno do servidor", code: "internal_error" } });
}
