export type EducationItem = {
  program: string;
  school: string;
  period: string;
  points: string[];
};

export type Certification = {
  issuer: string;
  name: string;
  period: string;
  points: string[];
};

export type Role = {
  title: string;
  company: string;
  period: string;
  points: string[];
};

export const education: EducationItem[] = [
  {
    program: "Bachelor of Computer Science",
    school: "university of California, Los Angeles",
    period: "2017 - 2021",
    points: [
      "Completed coursework in application development, systems design, database management, networking, and cyber security.",
      "Gained hands-on experience with IT infrastructure, configuring and maintaining servers and network devices.",
      "Worked with a team to design and build full-stack application projects, applying agile development practices and version control workflows.",
    ],
  },
];

export const certifications: Certification[] = [
  {
    issuer: "CompTIA",
    name: "Network Server Security - Protecting the Server and Client Computers",
    period: "2026",
    points: [
      "Validates troubleshooting skills for supporting end users and IT environments.",
      "Reinforces strong practices in endpoint support, OS installation, hardware diagnostics, and technical documentation.",
    ],
  },
];

export const roles: Role[] = [
  {
    title: "AI Automation Engineer",
    company: "Upwork",
    period: "June 2026 - Present",
    points: [
      "Provided technical support for workstation, phone, printer, and network issues, including hardware troubleshooting, software support, and device maintenance.",
      "Installed and maintained IT infrastructure including network cabling, workstation deployments, charging stations, surveillance systems, and other supported devices.",
      "Coordinated with users, vendors, and internal teams to resolve technical issues and support daily operations.",
    ],
  },
  {
    title: "Software Engineer | AI Automation Solutions",
    company: "Tekyz Inc",
    period: "January 2024 – June 2026",
    points: [
      "Built and maintained scalable ASP.NET Core applications and REST APIs.",
      "Designed integrations between business applications, third-party services, and cloud platforms.",
      "Integrated Azure OpenAI and LLM capabilities into business processes to enable intelligent automation.",
      "Worked with modern software engineering practices including API design, database optimization, and cloud deployment.",
    ],
  },
  {
    title: "Web Developer",
    company: "Saritasa",
    period: "July 2020 – November 2023",
    points: [
      "Developed web applications using ASP.NET Core, C#, JavaScript/TypeScript, and modern frontend frameworks.",
      "Designed and implemented RESTful APIs and database-driven applications.",
      "Integrated external APIs and third-party systems to support business workflows.",
      "Improved application performance, reliability, and maintainability through clean coding practices.",
      "Collaborated with cross-functional teams to deliver scalable software solutions.",
    ],
  },
  {
    title: "Software Development Intern ",
    company: "Saritasa",
    period: "January 2020 – June 2020",
    points: [
      "Assisted in developing web applications using .NET technologies.",
      "Created and maintained application components and database operations.",
      "Participated in code reviews, testing, and software improvement tasks.",
    ],
  },
];
