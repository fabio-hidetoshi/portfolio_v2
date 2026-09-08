import { pool } from "../../db/pool.js";

export interface Experience {
  id: number;
  company: string;
  kind: string;
  role_pt: string;
  role_en: string;
  description_pt: string | null;
  description_en: string | null;
  location: string | null;
  start_date: string;
  end_date: string | null;
  company_url: string | null;
  display_order: number;
}

export async function findAllExperiences(): Promise<Experience[]> {
  const result = await pool.query<Experience>(
    "SELECT * FROM experiences ORDER BY start_date DESC"
  );
  return result.rows;
}
