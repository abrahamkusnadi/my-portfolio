import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Abraham Kusnadi — Software Engineer & Backend Developer",
  author: "Abraham Kusnadi",
  description:
    "Computer Science student and Backend Developer specializing in scalable server-side systems, message brokering, database architecture, and data pipelines.",
  lang: "en",
  siteLogo: "/abraham-kusnadi-small.jpeg",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Skills", href: "#skills" },
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Organizations", href: "#organizations" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/abrahamkusnadi" },
    { text: "GitHub", href: "https://github.com/abrahamkusnadi" },
  ],
  socialImage: "/abraham-kusnadi-big.png",
  canonicalURL: "https://abrahamkusnadi.vercel.app/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Abraham Kusnadi",
    tagline: "Learn deeply. Build scalably. Share willingly.",
    specialty: "Software Engineer & Backend Developer",
    summary:
      "Computer Science undergraduate at BINUS University specializing in robust server-side architecture, message brokering, database engineering, and automated enterprise data pipelines.",
    email: "abrahamkusnadi@gmail.com",
    resumeUrl: "https://www.linkedin.com/in/abrahamkusnadi",
  },
  about: {
    description: [
      "I am a Computer Science student at BINUS University and a Backend Developer passionate about designing resilient, high-throughput distributed systems. My technical focus centers on backend engineering, data modeling, and asynchronous workflow orchestration.",
      "In production environments, I build automated data pipelines utilizing Apache Kafka for event-driven messaging, implement secure SFTP extractions, optimize relational databases, and set up real-time monitoring with Splunk. Alongside development, I serve as a Backend Development Mentor at BNCC, training junior developers in RESTful API design and architectural best practices.",
    ],
    image: "/abraham-kusnadi-big.png",
    highlights: [
      "Backend Architecture",
      "Event-Driven Pipelines",
      "5NF Database Design",
      "API Security & Unit Testing",
      "Technical Mentorship",
    ],
  },
  skills: [
    {
      title: "Backend & Frameworks",
      badgeColor: "#3B82F6", // Sky/Cobalt Blue
      items: [
        "Go (Gin)",
        "Java (Spring Boot)",
        "PHP (Laravel)",
      ],
    },
    {
      title: "Databases & Storage",
      badgeColor: "#10B981", // Emerald/Mint
      items: [
        "PostgreSQL",
        "MySQL",
        "Redis (Caching)",
      ],
    },
    {
      title: "System Modeling & Design",
      badgeColor: "#8B5CF6", // Violet/Purple
      items: [
        "Visual Paradigm (UML & ERD)",
        "PlantUML",
      ],
    },
    {
      title: "Data Pipelines & DevOps",
      badgeColor: "#F59E0B", // Amber/Gold
      items: [
        "Apache Kafka (Message Broker)",
        "Splunk (Real-time Monitoring & Logging)",
        "Docker (Containerization)",
        "GitHub & GitLab",
      ],
    },
    {
      title: "Frontend & UI/UX",
      badgeColor: "#EC4899", // Rose/Pink
      items: [
        "TypeScript",
        "Astro Framework",
        "Tailwind CSS",
        "HTML5 / Responsive CSS",
        "Figma (UI Wireframing)",
      ],
    },
  ],
  experience: [
    {
      company: "PhinCon",
      position: "Backend Developer Intern",
      startDate: "February 2026",
      endDate: "Present",
      summary: [
        "Engineered automated reporting services integrated with SFTP for secure data extraction and Splunk for real-time log monitoring, significantly streamlining data workflow cycles.",
        "Designed and enforced robust input validation layers across RESTful endpoints to safeguard API integrity and prevent malformed request handling.",
        "Authored comprehensive unit test suites for critical backend business logic, minimizing production regression risks.",
        "Collaborated with senior consultants and lead engineers through structured code reviews and architectural QA, adhering to strict enterprise standards.",
      ],
    },
    {
      company: "DingTalk",
      position: "AI Data Collection Coordinator",
      startDate: "March 2026",
      endDate: "April 2026",
      summary: [
        "Coordinated native Indonesian speaker teams, systematically tracking audio dataset progress and quality standards for conversational AI models.",
        "Facilitated operational workflows and technical troubleshooting, ensuring smooth task execution and timely data submissions.",
        "Localized English technical specifications into Indonesian and structured step-by-step documentation for distributed contributor teams.",
      ],
    },
  ],
  projects: [
    {
      name: "Meksiko Inc. E-Commerce",
      summary:
        "Full-featured e-commerce platform built with Laravel featuring automated invoice generation, dynamic shopping cart management, and role-based admin inventory controls.",
      image: "/meksiko-inc.png",
      tags: ["PHP", "Laravel", "MySQL", "Bootstrap", "Blade"],
      linkPreview: "https://drive.google.com/file/d/1kh5jXmFl5Q5U1Gq7Sj5vnzMQIjUS74jC/view?usp=sharing",
      linkSource: "https://github.com/abrahamkusnadi/Laravel-Project-BNCC",
    },
    {
      name: "Invoice DB Management & Normalization",
      summary:
        "End-to-end enterprise relational database engineering project featuring data extraction, functional dependency analysis, and complete normalization up to 3NF in MySQL.",
      image: "/db-design.png",
      tags: ["MySQL", "3NF Normalization", "Database Architecture", "Python"],
      linkPreview: "https://colab.research.google.com/drive/1ueCsh1yNBIWdA37O8HCCYL88tajPyHcP?usp=sharing",
      linkSource: "https://github.com/abrahamkusnadi/Database-Design-Project",
    },
    {
      name: "BLATE Dating App Prototype",
      summary:
        "Android mobile application prototype simulating modern interactive match interfaces, profile browsing, and responsive real-time chat flows.",
      image: "/blate.png",
      tags: ["Android", "Java/Kotlin", "Mobile UI"],
      linkPreview: "https://drive.google.com/file/d/10IB-Ztz2KGmGbyY0KH-vW5RJC8N4VJKV/view?usp=sharing",
      linkSource: "https://github.com/abrahamkusnadi/BLATE",
    },
    {
      name: "Spotify Big Data Clustering",
      summary:
        "Music data analytics and unsupervised machine learning pipeline utilizing K-Means clustering in Python to classify acoustic audio features at scale.",
      image: "/spotify-clustering.png",
      tags: ["Python", "K-Means", "Scikit-Learn", "Data Analysis", "Pandas"],
      linkPreview: "https://colab.research.google.com/drive/1qvrL5DYlZyjgTJGk6fzyDBUT-WyVNguL",
      linkSource: "https://github.com/abrahamkusnadi/Big-Data-Processing-Project",
    },
  ],
  organizations: [
    {
      name: "Bina Nusantara Computer Club (BNCC)",
      period: "Nov 2025 - Present",
      summary:
        "Entrusted as a consecutive Backend Development Mentor across two academic cohorts (LnT 37 & LnT 38), educating student cohorts in server-side engineering, clean API design, and database modeling.",
      image: "/bncc.jpg",
      roles: [
        {
          title: "Backend Development Mentor — LnT 37 & LnT 38",
          periodRole: "Nov 2025 - Present (2 Consecutive Cohorts)",
          description:
            "Instructed student cohorts in server-side web development using PHP (Laravel), MVC architecture, RESTful API conventions, and relational database modeling. Delivered hands-on code reviews, guided mentees through final capstone fullstack projects, and conducted troubleshooting support.",
          certificateLink: "/bncc-praetorian-1.pdf",
        },
      ],
    },
    {
      name: "Himpunan Mahasiswa Teknik Informatika (HIMTI)",
      period: "Mar 2025 - Dec 2025",
      summary:
        "Active member of the academic events committee, contributing to large-scale technological symposiums, public relations, and operational event logistics.",
      image: "/himti.jpg",
      roles: [
        {
          title: "Registration & Fundraising Staff — HIMTI 33rd Anniversary",
          periodRole: "Aug 2025 - Oct 2025",
          description:
            "Executed attendee registration pipelines and managed fundraising campaigns, coordinating directly with external sponsors and event participants.",
          certificateLink: "/himti-anniv.png",
        },
        {
          title: "BURAM Division Staff — TECHNO 2025 & Expo",
          periodRole: "May 2025 - Sep 2025",
          description:
            "Drove student engagement at the BINUS Organization Expo and coordinated venue logistics and audience flow during TECHNO 2025 at BRIN Thamrin.",
          certificateLink: "/himti-techno.pdf",
        },
        {
          title: "Promotional Division Staff — TECHFEST 2025",
          periodRole: "Mar 2025 - Jul 2025",
          description:
            "Managed digital communication channels and maintained institutional media partner networks to maximize digital reach and participant turnout.",
          certificateLink: "/himti-techfest.png",
        },
        {
          title: "Registration Staff — Breaking into Software Engineering",
          periodRole: "Mar 2025 - May 2025",
          description:
            "Managed on-site verification, attendee credential validation, and post-event attendance analytics reporting.",
          certificateLink: "/himti-seminar.jpg",
        },
      ],
    },
  ],
};
