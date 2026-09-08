import { useTranslation } from "react-i18next";
import { useSkills } from "../../hooks/useSkills";
import { Badge } from "../ui/Badge";
import { SectionHeading } from "../ui/SectionHeading";

export function Skills() {
  const { t } = useTranslation();
  const { skills, loading, error } = useSkills();

  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading index="03" title={t("skills.title")} />

      {loading && <p className="font-mono text-sm text-ink-soft">…</p>}
      {error && <p className="font-mono text-sm text-accent">{error}</p>}

      <div className="grid gap-8 sm:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft dark:text-fog-soft">
              {t(`skills.categories.${category}`, category)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <Badge key={skill.id}>{skill.name}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
