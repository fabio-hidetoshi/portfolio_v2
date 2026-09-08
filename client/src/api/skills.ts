import { apiRequest } from "./client";
import type { SkillsByCategory } from "../types/skill";

export function getSkills() {
  return apiRequest<SkillsByCategory>("/api/skills");
}
