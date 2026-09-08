import { Router } from "express";
import { getProjectBySlug, listProjects } from "./projects.controller.js";

export const projectsRouter = Router();

projectsRouter.get("/", listProjects);
projectsRouter.get("/:slug", getProjectBySlug);
