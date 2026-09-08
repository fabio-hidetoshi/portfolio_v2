import { type FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useContactForm } from "../../hooks/useContactForm";
import { Input, Textarea } from "../ui/Field";
import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";

export function Contact() {
  const { t } = useTranslation();
  const { status, errorMessage, submit } = useContactForm();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(field: keyof typeof form) {
    return (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.currentTarget.value }));
    };
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    await submit(form);
    if (status !== "error") setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contato" className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading index="05" title={t("contact.title")} />
      <p className="mb-8 max-w-md font-display text-lg text-ink-soft dark:text-fog-soft">{t("contact.subtitle")}</p>

      <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
        <Input
          type="text"
          required
          placeholder={t("contact.name")}
          value={form.name}
          onChange={handleChange("name")}
        />
        <Input
          type="email"
          required
          placeholder={t("contact.email")}
          value={form.email}
          onChange={handleChange("email")}
        />
        <Textarea
          required
          rows={5}
          placeholder={t("contact.message")}
          value={form.message}
          onChange={handleChange("message")}
        />

        <Button type="submit" disabled={status === "submitting"} className="self-start">
          {status === "submitting" ? t("contact.submitting") : t("contact.submit")}
        </Button>

        {status === "success" && <p className="font-mono text-xs text-accent">{t("contact.success")}</p>}
        {status === "error" && (
          <p className="font-mono text-xs text-accent">{errorMessage ?? t("contact.error")}</p>
        )}
      </form>
    </section>
  );
}
