import type { projectData } from "@/data/projectData";
import ProjectCard from "@/ui/components/ProjectCard";

type Project = (typeof projectData)[number];

type ProjectListProps = {
  projects: Project[];
};

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="px-4 md:px-24">
      {projects.map((project, i) => (
        <ProjectCard
          key={project.title}
          index={String(i + 1).padStart(2, "0")}
          {...project}
        />
      ))}
    </div>
  );
}
