
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
    description: "Real-time monitoring system for tracking security personnel efficiency and incident response times. Reduced response time by 35% and improved deployment efficiency.",
    fullDescription: "Built a comprehensive security analytics platform for Samco Security Services that provides real-time insights into personnel efficiency, incident response patterns, and deployment logistics across multiple IoT data sources.",
    role: "Lead Developer & Data Analyst",
    impact: [
      "Reduced incident response time by 35%",
      "Improved deployment efficiency by 28%",
      "Automated 40+ manual reporting processes",
      "Integrated 15+ IoT data sources"
    ],
    challenges: [
      "Handling real-time data ingestion from multiple sources",
      "Ensuring data accuracy and consistency",
      "Creating intuitive visualizations for stakeholders"
    ],
    solutions: [
      "Implemented ETL pipelines with error handling and retry logic",
      "Built automated data validation checks",
      "Designed interactive Power BI dashboards with drill-down capabilities"
    ],
    year: "2023",
    category: "Analytics",
    industry: "Security",
    tech: ["Power BI", "Python", "SQL", "Azure"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/godwincybertechsolutions-cmyk",
    link: "https://security-dashboard.example.com"
  },
  {
    title: "Nexus Full-Stack CRM",
    description: "Comprehensive customer relationship management platform for service-based startups. Increased customer retention by 42% and reduced administrative overhead.",
    fullDescription: "A full-stack CRM solution designed specifically for service-based startups, featuring advanced data visualization, automated workflows, and integrated communication tools. The platform enables businesses to manage customer relationships more effectively and gain actionable insights.",
    role: "Full Stack Developer",
    impact: [
      "Increased customer retention by 42%",
      "Reduced administrative time by 50%",
      "Managed 500+ active users",
      "24/7 uptime with 99.9% SLA"
    ],
    challenges: [
      "Building scalable architecture for concurrent users",
      "Implementing complex permission systems",
      "Real-time data synchronization across devices"
    ],
    solutions: [
      "Used PostgreSQL with optimized indexing and caching",
      "Implemented role-based access control (RBAC)",
      "Built WebSocket-based real-time sync layer"
    ],
    year: "2022",
    category: "Web Apps",
    industry: "SaaS",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind", "WebSocket"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/godwincybertechsolutions-cmyk/nexus-crm",
    link: "https://nexus-crm.example.com"
  },
  {
    title: "EcoPredictive ML",
    description: "Machine learning models predicting environmental degradation patterns with 89% accuracy. Helped organizations plan conservation strategies proactively.",
    fullDescription: "Advanced machine learning system using satellite imagery and historical weather data to predict environmental degradation patterns. This tool enables environmental organizations to proactively identify at-risk areas and allocate conservation resources more effectively.",
    role: "ML Engineer & Data Scientist",
    impact: [
      "Achieved 89% prediction accuracy",
      "Covered 50,000+ square kilometers",
      "Identified 200+ at-risk zones",
      "Supported 5+ conservation organizations"
    ],
    challenges: [
      "Processing massive satellite imagery datasets",
      "Feature engineering from multi-dimensional data",
      "Model deployment at scale"
    ],
    solutions: [
      "Implemented parallel processing with Dask",
      "Used transfer learning with pretrained models",
      "Deployed containerized inference service"
    ],
    year: "2023",
    category: "Machine Learning",
    industry: "Environmental Tech",
    tech: ["Python", "TensorFlow", "Pandas", "Satellite API"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/godwincybertechsolutions-cmyk/eco-predictive",
    link: "https://eco-predictive.example.com"
  },
  {
    title: "DataSync API Gateway",
    description: "High-performance middleware synchronizing legacy databases with cloud analytics platforms. Processed 1M+ daily transactions with 99.99% reliability.",
    fullDescription: "A robust API gateway solution that bridges legacy on-premise databases with modern cloud-based analytics platforms. Handles high-volume data synchronization with built-in fault tolerance and monitoring.",
    role: "Backend Architect",
    impact: [
      "Processed 1M+ daily transactions",
      "Achieved 99.99% uptime",
      "Reduced data latency from 4 hours to 5 minutes",
      "Eliminated manual data migration tasks"
    ],
    challenges: [
      "Handling high-volume concurrent requests",
      "Maintaining data consistency across systems",
      "Zero-downtime deployments"
    ],
    solutions: [
      "Implemented circuit breakers and rate limiting",
      "Used event sourcing for consistency",
      "Blue-green deployment strategy"
    ],
    year: "2024",
    category: "Data Science",
    industry: "Enterprise",
    tech: ["Go", "Docker", "Redis", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/godwincybertechsolutions-cmyk/datasync-gateway",
    link: "https://datasync.example.com"
  },
  {
    title: "Smart Inventory Forecast",
    description: "Automated inventory management with seasonal decomposition achieving 95% prediction accuracy. Reduced holding costs by $50K annually.",
    fullDescription: "An intelligent inventory forecasting system that uses advanced time-series analysis and seasonal decomposition to predict stock requirements with exceptional accuracy, helping businesses optimize inventory levels and reduce costs.",
    role: "Data Science & Analytics",
    impact: [
      "95% forecast accuracy",
      "Reduced holding costs by $50K/year",
      "Minimized stockouts by 78%",
      "Optimized 1000+ SKUs"
    ],
    challenges: [
      "Handling seasonal patterns and anomalies",
      "Dealing with sparse historical data",
      "Real-time forecast updates"
    ],
    solutions: [
      "Implemented SARIMA and Prophet models",
      "Created anomaly detection pipeline",
      "Built automated retraining system"
    ],
    year: "2023",
    category: "Analytics",
    industry: "Retail",
    tech: ["Python", "SciPy", "Matplotlib", "Pandas"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/godwincybertechsolutions-cmyk/inventory-forecast",
    link: "https://inventory-forecast.example.com"
  },
  {
    title: "Pulse Social Tracker",
    description: "Full-stack sentiment analyzer processing live social feeds with 87% sentiment accuracy. Tracked 100K+ daily mentions across platforms.",
    fullDescription: "A comprehensive social media sentiment analysis platform that processes real-time data feeds to determine public opinion on emerging tech trends, providing actionable insights for marketing and product teams.",
    role: "Full Stack Developer & NLP Specialist",
    impact: [
      "87% sentiment classification accuracy",
      "Tracked 100K+ daily mentions",
      "Analyzed trends for 50+ brands",
      "Real-time alerts on sentiment shifts"
    ],
    challenges: [
      "Processing streaming data at scale",
      "Handling multilingual content",
      "Managing API rate limits"
    ],
    solutions: [
      "Implemented Apache Kafka for streaming",
      "Used multilingual BERT models",
      "Built intelligent request queuing"
    ],
    year: "2024",
    category: "Web Apps",
    industry: "MarTech",
    tech: ["Next.js", "Python", "Supabase", "Kafka"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/godwincybertechsolutions-cmyk/pulse-tracker",
    link: "https://pulse-tracker.example.com"
  }
];
