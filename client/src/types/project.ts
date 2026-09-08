export interface Project {
  id: number;
  slug: string;
  title: string;
  summary_pt: string;
  summary_en: string;
  description_pt: string | null;
  description_en: string | null;
  tech_stack: string[];
  repo_url: string;
  demo_url: string | null;
  cover_image_url: string | null;
  featured: boolean;
  display_order: number;
  created_at: string;
}
