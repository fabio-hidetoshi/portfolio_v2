import express from "express";
import cors from "cors";
import { env } from "./env.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { projectsRouter } from "./modules/projects/projects.routes.js";
import { experiencesRouter } from "./modules/experiences/experiences.routes.js";
import { skillsRouter } from "./modules/skills/skills.routes.js";
import { contactRouter } from "./modules/contact/contact.routes.js";

export const app = express();

app.set("trust proxy", 1);

app.use(cors({ origin: env.CORS_ORIGIN }));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.use("/api/projects", projectsRouter);
app.use("/api/experiences", experiencesRouter);
app.use("/api/skills", skillsRouter);
app.use("/api/contact", contactRouter);

app.use(errorHandler);
