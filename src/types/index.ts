export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SkillCategory {
  title: string;
  badgeColor?: string;
  items: string[];
}

export interface SiteContent {
  hero: HeroProps;
  about: AboutProps;
  skills: SkillCategory[];
  experience: ExperienceProps[];
  projects: ProjectProps[];
  organizations: OrganizationProps[];
}

export interface HeroProps {
  name: string;
  tagline: string;
  specialty: string;
  summary: string;
  email: string;
  resumeUrl?: string;
}

export interface AboutProps {
  description: string[];
  image: string;
  highlights?: string[];
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  tags?: string[];
  linkPreview?: string;
  linkSource?: string;
}

export interface OrganizationRole {
  title: string;
  periodRole: string;
  description: string;
  certificateLink?: string;
}

export interface OrganizationProps {
  name: string;
  period?: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
  roles?: OrganizationRole[];
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
