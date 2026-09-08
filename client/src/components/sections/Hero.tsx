import { useTranslation } from "react-i18next";
import { Button } from "../ui/Button";
import { PROFILE } from "../../constants/profile";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto flex max-w-4xl flex-col items-start gap-6 px-6 py-24 md:py-32">
      <p className="font-mono text-sm text-accent">{t("hero.greeting")}</p>
      <h1 className="font-display text-5xl leading-[1.05] font-medium tracking-tight text-ink dark:text-fog md:text-7xl">
        {PROFILE.name}
      </h1>
      <p className="max-w-xl font-mono text-sm text-ink-soft dark:text-fog-soft">
        {PROFILE.title} <span className="text-line dark:text-line-dark">/</span> {PROFILE.location}
      </p>

      <div className="flex flex-wrap gap-3 pt-6">
        <Button onClick={() => document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })}>
          {t("hero.cta_projects")}
        </Button>
        <Button
          variant="secondary"
          onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
        >
          {t("hero.cta_contact")}
        </Button>
        <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer">
          <Button variant="secondary">{t("hero.cta_resume")}</Button>
        </a>
      </div>
    </section>
  );
}
