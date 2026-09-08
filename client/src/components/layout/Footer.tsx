import { useTranslation } from "react-i18next";
import { PROFILE } from "../../constants/profile";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-line py-10 font-mono text-xs text-ink-soft dark:border-line-dark dark:text-fog-soft">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p>
          © {new Date().getFullYear()} {PROFILE.name} — {t("footer.rights")}
        </p>
        <div className="flex gap-5">
          <a href={PROFILE.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-accent">
            linkedin
          </a>
          <a href={PROFILE.githubUrl} target="_blank" rel="noreferrer" className="hover:text-accent">
            github
          </a>
          <a href={`mailto:${PROFILE.email}`} className="hover:text-accent">
            email
          </a>
        </div>
      </div>
    </footer>
  );
}
