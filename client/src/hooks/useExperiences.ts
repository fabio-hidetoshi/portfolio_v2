import { useEffect, useState } from "react";
import { getExperiences } from "../api/experiences";
import type { Experience } from "../types/experience";

export function useExperiences() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    getExperiences()
      .then((data) => {
        if (!cancelled) setExperiences(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { experiences, loading, error };
}
