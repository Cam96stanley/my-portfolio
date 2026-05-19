import Image from "next/image";
import { projectData } from "@/data/projectData";
import ProjectList from "@/ui/components/ProjectList";

export default function Projects() {
  return (
    <div className="pb-24">
      <section className="px-4 md:px-24 flex gap-8 items-center pt-8 pb-16">
        <Image alt="" src="/cube.svg" width={56} height={56} />
        <div className="flex flex-col">
          <p className="para-sm-upper-reg text-subtle">Work</p>
          <p className="heading-2">Projects</p>
        </div>
      </section>
      <ProjectList projects={projectData} />
    </div>
  );
}
