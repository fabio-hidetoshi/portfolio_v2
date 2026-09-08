import { pool } from "../../db/pool.js";

export interface Skill {
  id: number;
  name: string;
  category: string;
  display_order: number;
}

export async function findAllSkillsGrouped(): Promise<Record<string, Skill[]>> {
  const result = await pool.query<Skill>(
    "SELECT * FROM skills ORDER BY category ASC, display_order ASC"
  );

  return result.rows.reduce<Record<string, Skill[]>>((groups, skill) => {
    groups[skill.category] ??= [];
    groups[skill.category].push(skill);
    return groups;
  }, {});
}
