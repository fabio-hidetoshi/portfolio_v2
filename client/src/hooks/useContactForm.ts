import { useState } from "react";
import { useTranslation } from "react-i18next";
import { sendContactMessage } from "../api/contact";

type Status = "idle" | "submitting" | "success" | "error";

export function useContactForm() {
  const { i18n } = useTranslation();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function submit(fields: { name: string; email: string; message: string }) {
    setStatus("submitting");
    setErrorMessage(null);

    try {
      await sendContactMessage({
        ...fields,
        locale: i18n.language.startsWith("en") ? "en" : "pt",
      });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Erro desconhecido");
    }
  }

  return { status, errorMessage, submit };
}
