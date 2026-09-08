const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000";

export class ApiRequestError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export async function apiRequest<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new ApiRequestError(response.status, json?.error?.message ?? "Erro na requisição");
  }

  return json.data as T;
}
