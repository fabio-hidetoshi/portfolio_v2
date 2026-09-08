import type { Project } from "../../types/project";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="flex flex-col">
      {projects.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i + 1} />
      ))}
    </div>
  );
}
