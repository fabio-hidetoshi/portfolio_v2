import { apiRequest } from "./client";

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
  locale: "pt" | "en";
}

export function sendContactMessage(payload: ContactPayload) {
  return apiRequest<{ id: number }>("/api/contact", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
