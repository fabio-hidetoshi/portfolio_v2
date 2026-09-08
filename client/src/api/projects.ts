import { apiRequest } from "./client";
import type { Project } from "../types/project";

export function getProjects(featuredOnly = false) {
  const query = featuredOnly ? "?featured=true" : "";
  return apiRequest<Project[]>(`/api/projects${query}`);
}

export function getProjectBySlug(slug: string) {
  return apiRequest<Project>(`/api/projects/${slug}`);
}
