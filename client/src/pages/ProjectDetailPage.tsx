import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getProjectBySlug } from "../api/projects";
import type { Project } from "../types/project";
import { pickLocale } from "../utils/localize";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;

    setLoading(true);
    getProjectBySlug(slug)
      .then((data) => {
        if (!cancelled) setProject(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <Link to="/" className="font-mono text-xs text-ink-soft hover:text-accent dark:text-fog-soft">
        ← {t("projects.back")}
      </Link>

      {loading && <p className="mt-6 font-mono text-sm text-ink-soft">…</p>}
      {error && <p className="mt-6 font-mono text-sm text-accent">{error}</p>}

      {project && (
        <article className="mt-6">
          <h1 className="font-display text-4xl font-medium text-ink dark:text-fog">{project.title}</h1>
          <p className="mt-6 max-w-xl leading-relaxed text-ink-soft dark:text-fog-soft">
            {pickLocale(project, "description", i18n.language) || pickLocale(project, "summary", i18n.language)}
          </p>

          <div className="mt-8">
            <h2 className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft dark:text-fog-soft">
              {t("projects.tech_stack")}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech_stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>

          <div className="mt-10 flex gap-3 border-t border-line pt-8 dark:border-line-dark">
            <a href={project.repo_url} target="_blank" rel="noreferrer">
              <Button>{t("projects.view_repo")}</Button>
            </a>
            {project.demo_url && (
              <a href={project.demo_url} target="_blank" rel="noreferrer">
                <Button variant="secondary">{t("projects.view_demo")}</Button>
              </a>
            )}
          </div>
        </article>
      )}
    </section>
  );
}
