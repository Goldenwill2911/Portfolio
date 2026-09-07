export type SocialIcon = "github" | "linkedin" | "youtube" | "kofi";

export type SocialLink = {
  href: string;
  label: string;
  icon: SocialIcon;
};

export const heroWords = [
  "AI Automation Engineer",
  "Software Developer",
  "Full stack Engineer",
  "Agentic Systems, Azure",
  ".NET & API integration",
];

export const heroDescription =
  "Fire is the test of gold; adversity, of strong men!";

export const heroLocation = "Stockton, CA";

export const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/GoldenWill2911",
    label: "GitHub",
    icon: "github",
  },
  {
    href: "https://linkedin.com/in/agustine-gonzalez-6065a2427",
    label: "LinkedIn",
    icon: "linkedin",
  },
];
