import type { Request, Response, NextFunction } from "express";
import { findAllExperiences } from "./experiences.repository.js";

export async function listExperiences(_req: Request, res: Response, next: NextFunction) {
  try {
    const data = await findAllExperiences();
    res.json({ data });
  } catch (err) {
    next(err);
  }
}
