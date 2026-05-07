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
      "Undergraduate Computer Science student specializing in server-side architecture development and data infrastructure.",
    email: "abrahamkusnadi@gmail.com.com",
  },
  about: {
    description: `
      Hi, I’m Abraham Kusnadi, a passionate Software Engineer with a primary focus on Backend Development and Database Architecture. As a Computer Science student at BINUS University, I’ve honed my skills in building scalable systems using Go, Java, and PHP (Laravel), always prioritizing performance, security, and seamless integration.

Beyond writing code, I actively contribute to my campus tech community as a Backend Development Mentor at BNCC, guiding fellow students in mastering database concepts and backend frameworks. Whether I am orchestrating automated services, designing normalized databases, or conducting end-to-end testing, I am driven by the challenge of solving complex technical problems and delivering high-quality, reliable software solutions.
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
    }
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  organizations: [
    {
      name: "BNCC",
      period: "Nov 2025 - May 2026",
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
          title: "BURAM Staff",
          periodRole: "May 2025 - Sep 2025",
          description: "Spearheaded promotional booth operations at the BINUS @Alam Sutera Organization Expo, successfully driving student engagement and registrations for HIMTI. Additionally, ensured seamless event execution and attendee satisfaction as an Usher during the main TECHNO 2025 event at BRIN Thamrin.",
          certificateLink: "/himti-techno.pdf"
        },
      ]
    },
  ],
};

// #5755ff
