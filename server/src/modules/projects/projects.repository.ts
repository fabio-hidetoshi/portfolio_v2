import { pool } from "../../db/pool.js";
import type { Project } from "./projects.types.js";

export async function findAllProjects(featuredOnly: boolean): Promise<Project[]> {
  const result = featuredOnly
    ? await pool.query<Project>("SELECT * FROM projects WHERE featured = true ORDER BY display_order ASC")
    : await pool.query<Project>("SELECT * FROM projects ORDER BY display_order ASC");
  return result.rows;
}

export async function findProjectBySlug(slug: string): Promise<Project | null> {
  const result = await pool.query<Project>("SELECT * FROM projects WHERE slug = $1", [slug]);
  return result.rows[0] ?? null;
}
