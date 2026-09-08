import { useTranslation } from "react-i18next";
import { useProjects } from "../../hooks/useProjects";
import { ProjectGrid } from "../project/ProjectGrid";
import { SectionHeading } from "../ui/SectionHeading";

export function Projects() {
  const { t } = useTranslation();
  const { projects, loading, error } = useProjects(true);

  return (
    <section id="projetos" className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading index="04" title={t("projects.title")} />

      {loading && <p className="font-mono text-sm text-ink-soft">…</p>}
      {error && <p className="font-mono text-sm text-accent">{error}</p>}

      <ProjectGrid projects={projects} />
    </section>
  );
}
