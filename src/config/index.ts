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
  socialImage: "/website.png",
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
      "I am a Computer Science student at BINUS University and a Backend Developer focused on building scalable microservices with Go (Gin) and Java Spring Boot.",
      "Across pre-production and production environments, I ensure system reliability through SSL/TLS security also API validation.",
      "Beyond backend engineering, I build real-time ETL monitoring portals with React and Next.js, and have mentored 50+ junior developers at BNCC in backend architecture and RESTful API best practices.",
    ],
    image: "/abraham-kusnadi-big.png",
    highlights: [
      "Microservices (Go & Spring Boot)",
      "Event-Driven Systems (Kafka)",
      "Next.js & React ETL Portals",
      "Technical Mentorship (50+ Mentees)",
    ],
  },
  skills: [
    {
      title: "Backend & Frameworks",
      badgeColor: "#3B82F6",
      items: [
        "Go (Gin)",
        "Java (Spring Boot / WebFlux)",
        "PHP (Laravel)",
      ],
    },
    {
      title: "Databases & Storage",
      badgeColor: "#10B981",
      items: [
        "PostgreSQL",
        "MySQL",
        "Redis (Caching)",
      ],
    },
    {
      title: "Data Pipelines & DevOps",
      badgeColor: "#F59E0B",
      items: [
        "Apache Kafka",
        "GitLab & GitHub",
        "Docker",
        "Splunk",
      ],
    },
    {
      title: "Operating System",
      badgeColor: "#6B7280",
      items: [
        "Linux",
        "Windows",
      ],
    },
    {
      title: "Frontend & UI/UX",
      badgeColor: "#EC4899",
      items: [
        "React & Next.js",
        "TypeScript",
        "Astro  ",
        "Tailwind CSS",
        "Figma",
      ],
    },
    {
      title: "System Modeling & Design",
      badgeColor: "#8B5CF6",
      items: [
        "Visual Paradigm (UML & ERD)",
        "PlantUML",
      ],
    },
        {
      title: "Testing & QA",
      badgeColor: "#06B6D4",
      items: [
        "JUnit (Unit Testing)",
        "Postman (API Testing)",
        "Wiremock (API Simulation)",
      ],
    },
  ],
  experience: [
    {
      company: "PhinCon (Phintraco Consulting)",
      position: "Backend Developer Intern",
      startDate: "February 2026",
      endDate: "Present",
      summary: [
        "Engineered enterprise microservices using Go (Gin) and Java Spring Boot (WebFlux/R2DBC) alongside asynchronous automated SFTP extraction services for blasting billing report from Splunk",
        "Managed SSL/TLS certificates and Java keystores/truststores, and deployed WireMock API simulators to ensure reliable service integrations.",
        "Enforced strict RESTful API input validation, authored comprehensive JUnit test suites, and monitored production workflows via Splunk to minimize regression risks.",
        "Developed interactive web portals using React and Next.js to support real-time ETL pipeline monitoring and data reconciliation.",
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
        "Localized English technical specifications into Indonesian and structured step-by-step visual documentation for distributed contributor teams.",
      ],
    },
  ],
  projects: [
    {
      name: "Meksiko Inc. E-Commerce",
      summary:
        "Full-featured e-commerce platform built with Laravel featuring automated invoice generation, dynamic shopping cart management, and role-based admin inventory controls.",
      image: "/meksiko-inc.png",
      tags: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "Blade"],
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
        "Music data analytics and unsupervised machine learning pipeline utilizing K-Means clustering and PCA in Python to classify acoustic audio features at scale.",
      image: "/spotify-clustering.png",
      tags: ["Python", "K-Means", "Scikit-Learn", "PCA", "Pandas"],
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
            "Instructed student cohorts in server-side web development using PHP (Laravel), MVC architecture, RESTful API conventions, and relational database modeling. Delivered hands-on code reviews, guided mentees through final capstone full-stack projects, and conducted troubleshooting support.",
          certificateLink: "/bncc-praetorian-1.pdf",
        },
      ],
    },
    {
      name: "Himpunan Mahasiswa Teknik Informatika (HIMTI)",
      period: "Mar 2025 - Oct 2025",
      summary:
        "Active member of the academic events committee, contributing to large-scale technological symposiums, public relations, and operational event logistics.",
      image: "/himti.jpg",
      roles: [
        {
          title: "Registration & Fundraising Staff — HIMTI 33rd Anniversary \"INSIGHT\"",
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