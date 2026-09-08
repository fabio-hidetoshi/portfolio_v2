import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import type { Project } from "../../types/project";
import { pickLocale } from "../../utils/localize";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t, i18n } = useTranslation();

  return (
    <Link
      to={`/projetos/${project.slug}`}
      className="group flex flex-col gap-2 border-b border-line py-8 first:pt-0 last:border-b-0 dark:border-line-dark sm:flex-row sm:gap-8"
    >
      <span className="w-10 shrink-0 font-mono text-sm text-accent">{String(index).padStart(2, "0")}</span>

      <div className="flex-1">
        <h3 className="font-display text-2xl text-ink transition-colors group-hover:text-accent dark:text-fog">
          {project.title}
        </h3>
        <p className="mt-2 max-w-xl text-sm text-ink-soft dark:text-fog-soft">
          {pickLocale(project, "summary", i18n.language)}
        </p>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-wide text-ink-soft/70 dark:text-fog-soft/70">
          {project.tech_stack.join(" · ")}
        </p>
      </div>

      <span className="shrink-0 self-center font-mono text-xs text-ink-soft transition-colors group-hover:text-accent dark:text-fog-soft">
        {t("projects.view_details")} →
      </span>
    </Link>
  );
}
