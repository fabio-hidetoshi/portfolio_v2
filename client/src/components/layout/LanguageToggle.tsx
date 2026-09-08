import { useTranslation } from "react-i18next";

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const isPt = i18n.language.startsWith("pt");

  function toggle() {
    i18n.changeLanguage(isPt ? "en" : "pt");
  }

  return (
    <button
      onClick={toggle}
      className="border border-line px-2.5 py-1 font-mono text-xs text-ink-soft hover:border-accent hover:text-accent dark:border-line-dark dark:text-fog-soft"
      aria-label="Toggle language"
    >
      {isPt ? "PT" : "EN"}
    </button>
  );
}
