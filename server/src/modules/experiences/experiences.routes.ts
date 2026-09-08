import { Router } from "express";
import { listExperiences } from "./experiences.controller.js";

export const experiencesRouter = Router();

experiencesRouter.get("/", listExperiences);
