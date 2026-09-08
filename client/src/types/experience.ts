export interface Experience {
  id: number;
  company: string;
  kind: "work" | "education";
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
