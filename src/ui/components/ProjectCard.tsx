import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  index?: string;
  badge?: string;
  title?: string;
  description?: string;
  techStack?: string[];
  year?: string;
  category?: string;
  href?: string;
  thumbnail?: string;
};

export default function ProjectCard({
  index = "01",
  badge = "Featured",
  title = "Project",
  description = "Project description",
  techStack = ["React", "Node.js", "PostgreSQL", "WebSocket"],
  year = "2024",
  category = "Category / Type",
  href = "#",
  thumbnail,
}: ProjectCardProps) {
  return (
    <div className="border-b border-border flex flex-col lg:flex-row">
      {/* Content */}
      <div className="flex-1 px-4 py-8 md:px-8 md:py-10 lg:px-16 lg:py-12">
        <div className="flex items-start gap-4 md:gap-8 lg:gap-0">
          {/* Index */}
          <p className="para-mono-lg text-subtle shrink-0 lg:w-20">{index}</p>

          {/* Center: title + description + tags */}
          <div className="flex-1 flex flex-col gap-4 lg:gap-6 lg:pr-20">
            <div className="flex flex-col gap-1.5">
              {badge && (
                <div className="inline-flex self-start bg-black/25 border border-border rounded-md px-2 py-1.5">
                  <span className="para-mono-sm text-sky uppercase tracking-wider">
                    {badge}
                  </span>
                </div>
              )}
              <p className="heading-3">{title}</p>
            </div>
            <p className="para-lg-light text-subtle">{description}</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <div
                  key={tech}
                  className="bg-black/25 border border-border rounded-md px-2 py-1.5"
                >
                  <span className="para-mono-sm text-subtle">{tech}</span>
                </div>
              ))}
            </div>

            {/* Meta — mobile/tablet only, shown below tags */}
            <div className="flex items-center justify-between pt-4 border-t border-border lg:hidden">
              <div className="flex flex-col gap-1">
                <p className="para-mono-sm text-subtle">{year}</p>
                <p className="para-mono-sm text-subtle">{category}</p>
              </div>
              <Link
                href={href}
                className="para-mono-sm text-sky flex items-center gap-1.5"
              >
                Link <ArrowUpRightIcon size={16} />
              </Link>
            </div>
          </div>

          {/* Meta — desktop only, right-aligned column */}
          <div className="hidden lg:flex flex-col items-end gap-1 shrink-0">
            <p className="para-mono-sm text-subtle text-right">{year}</p>
            <p className="para-mono-sm text-subtle text-right">{category}</p>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={href}
              className="para-mono-sm text-sky flex items-center gap-1.5"
            >
              Link <ArrowUpRightIcon size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Thumbnail — right on desktop */}
      {thumbnail && (
        <div className="group relative overflow-hidden hidden lg:block lg:w-[374px] shrink-0 self-center">
          <Image
            alt={title}
            src={thumbnail}
            width={2186}
            height={7596}
            className="w-full h-auto"
          />
        </div>
      )}
    </div>
  );
}
