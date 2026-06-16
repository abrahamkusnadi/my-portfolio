import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Abraham Kusnadi — Backend Developer",
  author: "Abraham Kusnadi",
  description:
    "Computer Science student and Backend Developer Intern based in Jakarta, Indonesia. I specialize in server-side architecture development and data infrastructure.",
  lang: "en",
  siteLogo: "/abraham-kusnadi-small.jpeg",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Organization", href: "#organizations" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/abraham-kusnadi" },
    { text: "Github", href: "https://github.com/abrahamkusnadi" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://abrahamkusnadi.vercel.app/",
};

export const SITE_CONTENT: SiteContent = {
hero: {
    name: "Abraham Kusnadi",
    specialty: "Software Engineer & Backend Developer",
    summary:
      "Computer Science undergraduate specializing in robust server-side architecture, message brokering, and enterprise data pipelines.",
    email: "abrahamkusnadi@gmail.com",
  },
  about: {
    description: `
      Hi, I’m Abraham Kusnadi, a Software Engineer with a strong focus on Backend Development and Database Architecture. As a Computer Science student at BINUS University, I specialize in building robust, scalable systems using Go, Java (Spring Boot), and PHP (Laravel). 

      My recent professional experience revolves around engineering automated data pipelines—orchestrating message brokers like Kafka, managing relational databases such as PostgreSQL, and handling secure SFTP extractions. I also implement real-time log monitoring utilizing Splunk and actively collaborate within Agile workflows managed via Jira. 
      
      Beyond writing and testing production-ready APIs, I actively contribute to the campus tech community as a Backend Development Mentor at BNCC, guiding fellow students through complex database management and server-side concepts. Whether I am building asynchronous tracking services, optimizing data workflows, or designing normalized 3NF databases, I am driven by the challenge of solving complex technical problems and delivering high-performance software solutions.
    `,
    image: "/abraham-kusnadi-big.png",
  },
  experience: [
    {
      company: "PhinCon",
      position: "Backend Developer Intern",
      startDate: "February 2026",
      endDate: "Present",
      summary: [
        "Engineered an automated reporting service integrated with SFTP for secure data extraction and Splunk for real-time log monitoring, streamlining the entire data processing pipeline.",
        "Implemented robust input validation mechanisms for RESTful APIs to ensure data integrity, prevent malformed requests, and enhance the overall security of the backend services.",
        "Authored comprehensive unit tests to verify complex backend logic, minimize production bugs, and maintain a high standard of code reliability throughout the development lifecycle.",
        "Actively collaborated with senior consultants and developers in rigorous code reviews and quality assurance processes, adhering to industry best practices in software architecture."
      ],
    },
    {
      company: "DingTalk",
      position: "AI Data Collection Coordinator",
      startDate: "March 2026",
      endDate: "April 2026",
      summary: [
        "Coordinated a team of Indonesian native speakers, tracking their progress and submission statuses for an AI voice recording project.",
        "Facilitated seamless project execution by ensuring all team members fully understood the data collection workflows and providing administrative support.",
        "Localized English project guidelines into Indonesian and developed step-by-step visual documentation to ensure clear communication of tasks."
      ],
    },
  ],
  projects: [
    {
      name: "Meksiko Inc. E-Commerce",
      summary: "A Laravel-based e-commerce app with automated invoice generation, dynamic carts, and an admin inventory dashboard.",
      linkPreview: "https://drive.google.com/file/d/1kh5jXmFl5Q5U1Gq7Sj5vnzMQIjUS74jC/view?usp=sharing",
      linkSource: "https://github.com/abrahamkusnadi/Laravel-Project-BNCC",
      image: "/meksiko-inc.png",
    },
    {
      name: "BLATE",
      summary: "An Android dating application prototype built to simulate dating apps and chat interfaces.",
      linkPreview: "https://drive.google.com/file/d/10IB-Ztz2KGmGbyY0KH-vW5RJC8N4VJKV/view?usp=sharing",
      linkSource: "https://github.com/abrahamkusnadi/BLATE",
      image: "/blate.png",
    },
    {
      name: "Spotify Big Data Clustering",
      summary: "A Python-based music data analysis and K-Means clustering group project.",
      linkPreview: "https://colab.research.google.com/drive/1qvrL5DYlZyjgTJGk6fzyDBUT-WyVNguL",
      linkSource: "https://github.com/abrahamkusnadi/Big-Data-Processing-Project",
      image: "/spotify-clustering.png",
    },
    {
      name: "Invoice DB Management",
      summary: "Relational database design project involving data scraping, functional dependency mapping, and 3NF normalization in MySQL.",
      linkPreview: "https://colab.research.google.com/drive/1ueCsh1yNBIWdA37O8HCCYL88tajPyHcP?usp=sharing", 
      linkSource: "https://github.com/abrahamkusnadi/Database-Design-Project", 
      image: "/db-design.png", 
    },
  ],
  organizations: [
    {
      name: "BNCC",
      period: "Nov 2025 - Present",
      summary: "Acted as a Backend Development Mentor, guiding students in mastering server-side technologies. I developed comprehensive teaching materials and provided hands-on troubleshooting support for frameworks such as Laravel.",
      image: "/bncc.jpg",
    },
    {
      name: "HIMTI",
      period: "May 2025 - December 2025",
      summary: "Served as an Academic Events Staff, contributing to the end-to-end execution of various large-scale organizational events. Working closely within extensive committee structures, I developed a strong foundation in cross-functional collaboration, event logistics, and adaptive problem-solving to ensure the success of HIMTI's core programs.",
      image: "/himti.jpg",
      roles: [
        {
          title: "Registration & Fundraising Division Staff",
          periodRole: "Aug 2025 - Oct 2025",
          description: "Managed crucial operational aspects for the HIMTI 33rd Anniversary event. Coordinated comprehensive fundraising campaigns, led multi-channel promotional strategies to boost attendance, and oversaw a streamlined, efficient registration process for all event attendees.",
          certificateLink: "/himti-anniv.png"
        },
        {
          title: "BURAM Divison Staff",
          periodRole: "May 2025 - Sep 2025",
          description: "Spearheaded promotional booth operations at the BINUS @Alam Sutera Organization Expo, successfully driving student engagement and registrations for HIMTI. Additionally, ensured seamless event execution and attendee satisfaction as an Usher during the main TECHNO 2025 event at BRIN Thamrin.",
          certificateLink: "/himti-techno.pdf"
        },
        {
          title: "Promotional Division Staff",
          periodRole: "Mar 2025 - Jul 2025",
          description: "Contributed to the promotional execution for TECHFEST 2025 by assisting in the management of the official Instagram account. Actively maintained media partner relations through consistent follow-ups, distributing essential campaign guidebooks, and ensuring smooth cross-organizational collaboration to maximize the event's digital reach.",
          certificateLink: "/himti-techfest.png"
        },
        {
          title: "Registration Staff",
          periodRole: "Mar 2025 - May 2025",
          description: "Managed the participant registration process for the 'Breaking into Software Engineering' seminar. Ensured a seamless check-in experience by validating attendee credentials on-site and accurately compiling post-event attendance data to support official organizational reporting.",
          certificateLink: "/himti-seminar.jpg"
        },
      ]
    },
  ],
};