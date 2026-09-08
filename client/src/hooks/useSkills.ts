import { useEffect, useState } from "react";
import { getSkills } from "../api/skills";
import type { SkillsByCategory } from "../types/skill";

export function useSkills() {
  const [skills, setSkills] = useState<SkillsByCategory>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    getSkills()
      .then((data) => {
        if (!cancelled) setSkills(data);
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

  return { skills, loading, error };
}
