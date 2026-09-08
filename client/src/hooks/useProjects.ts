import { useEffect, useState } from "react";
import { getProjects } from "../api/projects";
import type { Project } from "../types/project";

export function useProjects(featuredOnly = false) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    getProjects(featuredOnly)
      .then(setProjects)
      .catch((err) => {
        if (!controller.signal.aborted) setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [featuredOnly]);

  return { projects, loading, error };
}
