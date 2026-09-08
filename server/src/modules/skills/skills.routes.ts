import { Router } from "express";
import { listSkills } from "./skills.controller.js";

export const skillsRouter = Router();

skillsRouter.get("/", listSkills);
