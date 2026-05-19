export type TimelineEntry = {
  badge: string;
  title: string;
  description: string;
  techStack: string[];
  year: string;
  company: string;
  href?: string;
  side: "left" | "right";
};

export const timelineData: TimelineEntry[] = [
  {
    badge: "Intership",
    title: "Fullstack Developer",
    description:
      "Designed and built full-stack web applications for non-profit clients — handling everything from database schema to deployment.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    year: "2026–Present",
    company: "Sponsor A Purpose",
    href: "https://sponsorapet.org",
    side: "left",
  },
  {
    badge: "Intership",
    title: "Backend Developer",
    description:
      "Designed and built a backend api for a vehicle rental company — handling everything from database schemas to endpoints.",
    techStack: ["Nest.js", "TypeScript", "PostgreSQL", "TypeORM"],
    year: "2025-2025",
    company: "RAO Rentals",
    side: "right",
  },
  {
    badge: "FullStack Program",
    title: "Student",
    description: "Took part in a full stack development bootcamp program.",
    techStack: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"],
    year: "2025-2025",
    company: "Coding Temple",
    href: "https://www.codingtemple.com/",
    side: "left",
  },
  {
    badge: "Start of my journey",
    title: "Student",
    description:
      "Started studying frontend web development. Learning web dev foundations of HTML, CSS, and JavaScript and building small projects to develop my foundational skills.",
    techStack: ["HTML", "CSS", "JavaScript"],
    year: "20223-2025",
    company: "Self",
    side: "right",
  },
];
