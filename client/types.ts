export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
}

export interface Certification {
  name: string;
  issuer?: string;
}

export interface Achievement {
  description: string;
}

export interface ResumeData {
  name: string;
  role: string;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    location: string;
  };
  summary: string;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  achievements: Achievement[];
  extractedProjects: Project[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}