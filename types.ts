
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
  tech: string[];
  link?: string;
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
