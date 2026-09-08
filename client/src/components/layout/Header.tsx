import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const { t } = useTranslation();

  const links = [
    { href: "#sobre", label: t("nav.about") },
    { href: "#experiencia", label: t("nav.experience") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#projetos", label: t("nav.projects") },
    { href: "#contato", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur dark:border-line-dark dark:bg-night/90">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-mono text-sm text-ink dark:text-fog">
          fabio<span className="text-accent">.</span>dev
        </Link>

        <nav className="hidden gap-6 font-mono text-xs uppercase tracking-wide text-ink-soft dark:text-fog-soft md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
