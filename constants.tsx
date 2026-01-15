
import { Experience, Project, SkillCategory } from './types';

export const PROFILE = {
  name: "Godwin Koome Mbabu",
  title: "Data Scientist & Full Stack Engineer",
  bio: "Currently leveraging data-driven insights at Samco Security Services while building robust full-stack applications. Passionate about bridging the gap between raw data and actionable user experiences.",
  email: "godwin@godwin.dev",
  phone: "+254 715 689 878",
  location: "Nairobi, Kenya",
  socials: {
    github: "https://github.com/godwincybertechsolutions-cmyk",
    instagram: "https://www.instagram.com/sirgkay",
    x: "https://x.com/sirgkay",
    linkedin: "https://www.linkedin.com/in/godwin-munene-50a9883a2"
  },
  education: {
    university: "Kabarak University",
    degree: "Computer Science (Data Science focus)",
    period: "2017 - 2020"
  },
  certifications: [
    {
      name: "Data Analyst Professional Certificate",
      issuer: "IBM",
      year: "2023"
    }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Data Science & Analytics",
    skills: [
      { name: "Python (Pandas, Scikit-learn)", level: 90 },
      { name: "Power BI", level: 95 },
      { name: "Excel (Advanced VBA)", level: 95 },
      { name: "SQL", level: 85 },
      { name: "R Programming", level: 70 }
    ]
  },
  {
    name: "Full Stack Development",
    skills: [
      { name: "React / TypeScript", level: 85 },
      { name: "Node.js / Express", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "PostgreSQL / MongoDB", level: 80 },
      { name: "Next.js", level: 75 }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Samco Security Services",
    role: "Data Analyst",
    period: "2021 - Present",
    description: [
      "Optimizing security deployment logistics using Power BI dashboards.",
      "Automating internal reporting processes using Excel VBA and Python.",
      "Analyzing security incident trends to provide predictive threat models.",
      "Managing large-scale databases for client asset tracking."
    ],
    skills: ["Power BI", "Excel", "Data Modeling", "Python"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Security Analytics Dashboard",
    description: "A real-time monitoring system for tracking security personnel efficiency and incident response times. Integrated with various IoT data sources.",
    tech: ["Power BI", "Python", "SQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Nexus Full-Stack CRM",
    description: "A comprehensive customer relationship management tool built for service-based startups with advanced data visualization features.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "EcoPredictive ML",
    description: "Machine learning models to predict environmental degradation patterns using satellite imagery and historical weather data.",
    tech: ["Python", "TensorFlow", "Pandas"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "DataSync API Gateway",
    description: "A high-performance middleware for synchronizing legacy databases with modern cloud-based analytics platforms.",
    tech: ["Go", "Docker", "Redis"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Smart Inventory Forecast",
    description: "An automated inventory management system that uses seasonal decomposition to predict stock requirements with 95% accuracy.",
    tech: ["Python", "SciPy", "Matplotlib"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Pulse Social Tracker",
    description: "A full-stack social media sentiment analyzer that processes live feeds to determine public opinion on emerging tech trends.",
    tech: ["Next.js", "Python", "Supabase"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
  }
];
