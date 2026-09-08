import { useTheme } from "../../context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="border border-line px-2.5 py-1 font-mono text-xs text-ink-soft hover:border-accent hover:text-accent dark:border-line-dark dark:text-fog-soft"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "light" : "dark"}
    </button>
  );
}
