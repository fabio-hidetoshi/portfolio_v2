export function pickLocale(obj: object, field: string, lang: string): string {
  const suffix = lang.startsWith("en") ? "en" : "pt";
  const value = (obj as Record<string, unknown>)[`${field}_${suffix}`];
  return typeof value === "string" ? value : "";
}
