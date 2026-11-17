export type Language = 'en' | 'id';

export type Theme = 'light' | 'dark';

export interface ProjectStatusItem {
  feature: string;
  status: 'Implemented' | 'Tested' | 'Developed' | 'In Development' | 'Planned';
  note?: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
  aspectRatio?: 'video' | 'square' | 'wide';
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categoryTag: 'ai-cv' | 'iot-edge' | 'robotics' | 'web-ml' | 'gen-ai';
  shortDescription: string;
  description: {
    en: string;
    id: string;
  };
  problemStatement: {
    en: string;
    id: string;
  };
  objectives: {
    en: string[];
    id: string[];
  };
  technologies: string[];
  personalContribution: {
    en: string;
    id: string;
  };
  teamCredits?: {
    isTeam: boolean;
    teamName?: string;
    members: string[];
    role: string;
  };
  architecture: {
    en: string;
    id: string;
    diagramSteps?: {
      step: string;
      title: string;
      description: string;
    }[];
  };
  developmentProcess?: {
    en: string[];
    id: string[];
  };
  statusMatrix: ProjectStatusItem[];
  images: ProjectImage[];
  links: {
    github?: string;
    demo?: string;
    paper?: string;
    presentation?: string;
  };
  featured: boolean; // true for 01-04 (Featured), false for 05-08 (Additional)
  competitionContext?: string;
  relatedProjectIds?: string[];
}

export interface SkillItem {
  name: string;
  level?: string;
  isVerified: boolean;
  context?: string;
}

export interface SkillCategory {
  id: string;
  title: {
    en: string;
    id: string;
  };
  icon: string;
  description: {
    en: string;
    id: string;
  };
  skills: SkillItem[];
}

export interface Award {
  id: string;
  title: string;
  competition: string;
  award: string;
  year: string;
  date: string;
  venue: string;
  category: string;
  project: string;
  awardType: 'victory' | 'finalist' | 'qualifier' | 'training' | 'participation';
  rankNumber?: string; // e.g. "01", "02", "TOP 5", "04"
  keyImplementation?: string[];
  description: {
    en: string;
    id: string;
  };
  participantScope: string;
  teamMembers?: string[];
  certificatePlaceholder: string;
  officialLink?: string;
}

export interface TimelineJourneyItem {
  id: string;
  stage: string;
  title: {
    en: string;
    id: string;
  };
  period: string;
  description: {
    en: string;
    id: string;
  };
  technologies: string[];
  keyOutcome: {
    en: string;
    id: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: {
    en: string;
    id: string;
  };
  institution: string;
  location: string;
  period: string;
  type: 'academic' | 'competition' | 'project';
  highlights: {
    en: string[];
    id: string[];
  };
  technologies: string[];
}
