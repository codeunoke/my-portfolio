
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  fullDescription?: string;
  role?: string;
  impact?: string[];
  challenges?: string[];
  solutions?: string[];
  year?: string;
  category?: string;
  industry?: string;
  tech: string[];
  link?: string;
  github?: string;
  image: string;
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
