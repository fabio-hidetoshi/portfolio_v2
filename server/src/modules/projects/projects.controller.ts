import type { Request, Response, NextFunction } from "express";
import { ApiError } from "../../middlewares/errorHandler.js";
import { findAllProjects, findProjectBySlug } from "./projects.repository.js";

export async function listProjects(req: Request, res: Response, next: NextFunction) {
  try {
    const featuredOnly = req.query.featured === "true";
    const data = await findAllProjects(featuredOnly);
    res.json({ data });
  } catch (err) {
    next(err);
  }
}

export async function getProjectBySlug(req: Request, res: Response, next: NextFunction) {
  try {
    const project = await findProjectBySlug(req.params.slug);
    if (!project) {
      throw new ApiError(404, "project_not_found", "Projeto não encontrado");
    }
    res.json({ data: project });
  } catch (err) {
    next(err);
  }
}
