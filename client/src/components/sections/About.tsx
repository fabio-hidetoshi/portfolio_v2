import { useTranslation } from "react-i18next";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  const { t } = useTranslation();

  return (
    <section id="sobre" className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading index="01" title={t("about.title")} />
      <p className="max-w-2xl font-display text-xl leading-relaxed text-ink-soft dark:text-fog-soft">
        {t("about.text")}
      </p>
    </section>
  );
}
