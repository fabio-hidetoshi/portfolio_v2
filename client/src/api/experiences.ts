import { apiRequest } from "./client";
import type { Experience } from "../types/experience";

export function getExperiences() {
  return apiRequest<Experience[]>("/api/experiences");
}
