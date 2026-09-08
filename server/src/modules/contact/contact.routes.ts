import { Router } from "express";
import { contactRateLimiter } from "../../middlewares/rateLimiter.js";
import { submitContact } from "./contact.controller.js";

export const contactRouter = Router();

contactRouter.post("/", contactRateLimiter, submitContact);
