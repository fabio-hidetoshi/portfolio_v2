export interface Skill {
  id: number;
  name: string;
  category: string;
  display_order: number;
}

export type SkillsByCategory = Record<string, Skill[]>;
