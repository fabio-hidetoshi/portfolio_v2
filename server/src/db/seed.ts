import { pool } from "./pool.js";

const skills: Array<{ name: string; category: string; display_order: number }> = [
  { name: "Node.js", category: "backend", display_order: 1 },
  { name: "TypeScript", category: "backend", display_order: 2 },
  { name: "Python", category: "backend", display_order: 3 },
  { name: "API REST", category: "backend", display_order: 4 },
  { name: "GraphQL", category: "backend", display_order: 5 },

  { name: "React", category: "frontend", display_order: 1 },
  { name: "JavaScript", category: "frontend", display_order: 2 },

  { name: "LLMs", category: "ai", display_order: 1 },
  { name: "RAG", category: "ai", display_order: 2 },
  { name: "Sistemas Multi-Agentes", category: "ai", display_order: 3 },
  { name: "n8n", category: "ai", display_order: 4 },

  { name: "Google Cloud Platform", category: "cloud", display_order: 1 },
  { name: "Docker", category: "cloud", display_order: 2 },
  { name: "Firebase", category: "cloud", display_order: 3 },

  { name: "PostgreSQL", category: "database", display_order: 1 },
  { name: "Firestore", category: "database", display_order: 2 },
  { name: "MongoDB", category: "database", display_order: 3 },
  { name: "Redis", category: "database", display_order: 4 },

  { name: "GitHub", category: "tooling", display_order: 1 },
  { name: "Git", category: "tooling", display_order: 2 },
];

const experiences = [
  {
    company: "Echo AI",
    kind: "work",
    role_pt: "Desenvolvedor de Back-End",
    role_en: "Back-End Developer",
    description_pt:
      "Atuação no desenvolvimento e arquitetura de soluções de IA aplicadas, com foco em backend, automação e integração de sistemas.",
    description_en:
      "Working on development and architecture of applied AI solutions, focused on backend, automation and systems integration.",
    location: "São Paulo, Brasil",
    start_date: "2025-10-01",
    end_date: "2026-06-30",
    company_url: null,
    display_order: 1,
  },
  {
    company: "Blue",
    kind: "work",
    role_pt: "Analista de Arquitetura de Soluções Júnior",
    role_en: "Junior Solutions Architecture Analyst",
    description_pt:
      "Atuação na construção de soluções voltadas à automação de processos e otimização operacional, com automações e integrações utilizando ferramentas Low Code e No Code.",
    description_en:
      "Worked on building solutions focused on process automation and operational optimization, with automations and integrations using Low Code and No Code tools.",
    location: "São Paulo, Brasil",
    start_date: "2025-05-01",
    end_date: "2025-10-31",
    company_url: null,
    display_order: 2,
  },
  {
    company: "Alest",
    kind: "work",
    role_pt: "Desenvolvedor de Software Júnior",
    role_en: "Junior Software Developer",
    description_pt: "Desenvolvimento full-stack com Node.js, React, TypeScript, GraphQL, REST API, Firebase e GCP.",
    description_en: "Full-stack development with Node.js, React, TypeScript, GraphQL, REST API, Firebase and GCP.",
    location: "São Paulo, Brasil",
    start_date: "2024-04-01",
    end_date: "2025-04-30",
    company_url: null,
    display_order: 3,
  },
  {
    company: "Impacta Tecnologia",
    kind: "education",
    role_pt: "Formação em Tecnologia",
    role_en: "Technology Education",
    description_pt: "Formação técnica com foco em desenvolvimento de software. Conclusão prevista para dezembro de 2027.",
    description_en: "Technical education focused on software development. Expected graduation in December 2027.",
    location: "São Paulo, Brasil",
    start_date: "2022-01-01",
    end_date: null,
    company_url: null,
    display_order: 4,
  },
];

const projects = [
  {
    slug: "consultor-financeiro-ia",
    title: "Consultor Financeiro IA",
    summary_pt: "Consultor financeiro pessoal com IA, integrando Open Finance e um modelo LLM para recomendações.",
    summary_en: "Personal financial advisor powered by AI, integrating Open Finance and an LLM for recommendations.",
    description_pt:
      "Aplicação que conecta dados financeiros reais via Pluggy Open Finance a um modelo de linguagem (Groq) para gerar recomendações e insights financeiros personalizados. Backend e autenticação com Supabase, front-end em Next.js.",
    description_en:
      "Application that connects real financial data via Pluggy Open Finance to a language model (Groq) to generate personalized financial insights and recommendations. Backend and auth powered by Supabase, front-end in Next.js.",
    tech_stack: ["Next.js", "Supabase", "Pluggy Open Finance", "Groq", "TypeScript"],
    repo_url: "https://github.com/fabio-hidetoshi/consultor-financeiro-ia",
    demo_url: null,
    cover_image_url: null,
    featured: true,
    display_order: 1,
  },
  {
    slug: "nlwjourney-frontend",
    title: "NLW Journey — Front-End",
    summary_pt: "Front-end de uma plataforma de planejamento de viagens em grupo, construído durante o evento NLW da Rocketseat.",
    summary_en: "Front-end of a group trip planning platform, built during Rocketseat's NLW event.",
    description_pt:
      "Interface para criação e gerenciamento de viagens em grupo: convite de participantes, atividades e links importantes, consumindo a API própria (nlwjourney-backend).",
    description_en:
      "Interface for creating and managing group trips: inviting participants, activities and important links, consuming the companion API (nlwjourney-backend).",
    tech_stack: ["React", "TypeScript", "JavaScript"],
    repo_url: "https://github.com/fabio-hidetoshi/nlwjourney-frontEnd",
    demo_url: null,
    cover_image_url: null,
    featured: true,
    display_order: 2,
  },
  {
    slug: "nlwjourney-backend",
    title: "NLW Journey — Back-End",
    summary_pt: "API REST para a plataforma de planejamento de viagens em grupo do NLW Journey.",
    summary_en: "REST API for the NLW Journey group trip planning platform.",
    description_pt:
      "API responsável por participantes, atividades, links e confirmação de presença nas viagens, consumida pelo front-end nlwjourney-frontend.",
    description_en:
      "API responsible for participants, activities, links and RSVP confirmation for trips, consumed by the nlwjourney-frontend client.",
    tech_stack: ["Node.js", "TypeScript"],
    repo_url: "https://github.com/fabio-hidetoshi/nlwjourney-backEnd",
    demo_url: null,
    cover_image_url: null,
    featured: true,
    display_order: 3,
  },
];

async function seed() {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    await client.query("TRUNCATE skills RESTART IDENTITY");
    for (const s of skills) {
      await client.query(
        "INSERT INTO skills (name, category, display_order) VALUES ($1, $2, $3)",
        [s.name, s.category, s.display_order]
      );
    }

    await client.query("TRUNCATE experiences RESTART IDENTITY");
    for (const e of experiences) {
      await client.query(
        `INSERT INTO experiences
          (company, kind, role_pt, role_en, description_pt, description_en, location, start_date, end_date, company_url, display_order)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
        [
          e.company,
          e.kind,
          e.role_pt,
          e.role_en,
          e.description_pt,
          e.description_en,
          e.location,
          e.start_date,
          e.end_date,
          e.company_url,
          e.display_order,
        ]
      );
    }

    for (const p of projects) {
      await client.query(
        `INSERT INTO projects
          (slug, title, summary_pt, summary_en, description_pt, description_en, tech_stack, repo_url, demo_url, cover_image_url, featured, display_order)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
         ON CONFLICT (slug) DO UPDATE SET
           title = EXCLUDED.title,
           summary_pt = EXCLUDED.summary_pt,
           summary_en = EXCLUDED.summary_en,
           description_pt = EXCLUDED.description_pt,
           description_en = EXCLUDED.description_en,
           tech_stack = EXCLUDED.tech_stack,
           repo_url = EXCLUDED.repo_url,
           demo_url = EXCLUDED.demo_url,
           cover_image_url = EXCLUDED.cover_image_url,
           featured = EXCLUDED.featured,
           display_order = EXCLUDED.display_order`,
        [
          p.slug,
          p.title,
          p.summary_pt,
          p.summary_en,
          p.description_pt,
          p.description_en,
          p.tech_stack,
          p.repo_url,
          p.demo_url,
          p.cover_image_url,
          p.featured,
          p.display_order,
        ]
      );
    }

    await client.query("COMMIT");
    console.log("Seed aplicado com sucesso.");
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
    await pool.end();
  }
}

seed().catch((err) => {
  console.error("Falha ao rodar seed:", err);
  process.exit(1);
});
