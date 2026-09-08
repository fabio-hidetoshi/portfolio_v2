import { useTranslation } from "react-i18next";
import { useExperiences } from "../../hooks/useExperiences";
import { pickLocale } from "../../utils/localize";
import { SectionHeading } from "../ui/SectionHeading";

function formatDate(dateStr: string, lang: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(lang.startsWith("en") ? "en-US" : "pt-BR", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function Experience() {
  const { t, i18n } = useTranslation();
  const { experiences, loading, error } = useExperiences();

  return (
    <section id="experiencia" className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading index="02" title={t("experience.title")} />

      {loading && <p className="font-mono text-sm text-ink-soft">…</p>}
      {error && <p className="font-mono text-sm text-accent">{error}</p>}

      <div className="divide-y divide-line dark:divide-line-dark">
        {experiences.map((exp) => (
          <div key={exp.id} className="flex flex-col gap-2 py-6 sm:flex-row sm:gap-8">
            <span className="w-40 shrink-0 font-mono text-xs text-ink-soft dark:text-fog-soft">
              {formatDate(exp.start_date, i18n.language)} —{" "}
              {exp.end_date ? formatDate(exp.end_date, i18n.language) : t("experience.present")}
            </span>
            <div>
              <h3 className="font-display text-lg text-ink dark:text-fog">
                {pickLocale(exp, "role", i18n.language)}
              </h3>
              <p className="mt-0.5 font-mono text-xs text-accent">{exp.company}</p>
              {pickLocale(exp, "description", i18n.language) && (
                <p className="mt-2 max-w-xl text-sm text-ink-soft dark:text-fog-soft">
                  {pickLocale(exp, "description", i18n.language)}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
