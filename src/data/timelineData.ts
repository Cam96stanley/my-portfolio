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
    badge: "Full Time",
    title: "Fullstack Developer",
    description:
      "Designed and built full-stack web applications for nonprofit clients, managing development across the entire stack from database design and backend development to frontend implementation and deployment. Developed CRM features to support nonprofit grant management, rebuilt campaign journey interfaces, and built a Slack agent that notifies team members when users make donations to nonprofit organizations.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    year: "2026",
    company: "Sponsor A Purpose",
    href: "https://www.sponsorapurpose.org/",
    side: "left",
  },
  {
    badge: "Intership",
    title: "Fullstack Developer",
    description:
      "Designed and built full-stack web applications for non-profit clients — handling everything from database schema to deployment.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    year: "2026",
    company: "Sponsor A Pet",
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
    year: "2023-2025",
    company: "Self",
    side: "right",
  },
];
