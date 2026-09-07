export type SkillGroup = {
  title: string;
  summary: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Core Stack",
    summary: "Build & ship",
    items: [
      "Python", "C#",".net","TypeScript", "JavaScript", "Java",
      "Spring Boot", "React", "Next.js", "Node.js", "Tailwind CSS",
      "SQL", "PostgreSQL",
    ],
  },
  {
    title: "Tools & Platforms",
    summary: "Daily workflow",
    items: [
      "Azure", "Git", "GitHub", "GitHub Actions", "Docker", "Cloudflare", "Linux",
      "Active Directory", "ConnectWise", "Jira", "Figma", "Power BI",
      "Swagger / OpenAPI",
    ],
  },
  {
    title: "Currently Learning",
    summary: "What's next",
    items: ["AWS", "Kubernetes", "Playwright"],
  },
];
