import type { Request, Response, NextFunction } from "express";
import { findAllSkillsGrouped } from "./skills.repository.js";

export async function listSkills(_req: Request, res: Response, next: NextFunction) {
  try {
    const data = await findAllSkillsGrouped();
    res.json({ data });
  } catch (err) {
    next(err);
  }
}
