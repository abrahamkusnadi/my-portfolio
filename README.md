<div align="center">

# ⚡ Abraham Kusnadi — Personal Portfolio Website

[![Live Website](https://img.shields.io/badge/Live_Demo-abrahamkusnadi.vercel.app-2563EB?style=for-the-badge&logo=vercel&logoColor=white)](https://abrahamkusnadi.vercel.app/)
[![Astro](https://img.shields.io/badge/Astro_v6-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/abrahamkusnadi/)

<br />

> _"Learn deeply. Build scalably. Share willingly."_

</div>

---

## 📌 Overview

This repository contains the source code for the personal portfolio website of **Ignatius Abraham Aristio Kusnadi (Abraham Kusnadi)** — a Computer Science student at BINUS University and a **Software Engineer & Backend Developer**.

The website is engineered for speed, high contrast visual impact, and content accessibility. It showcases production-grade backend competencies, microservices architectures, data pipeline projects, and mentorship contributions.

---

## 🎨 Design Philosophy & Features

The site adopts a bold **Neo-Brutalist** aesthetic combined with high-performance modern web standards:

- **Neo-Brutalist Visual Identity:**
  - High-contrast black borders (`2.5px solid #000`) and rigid drop-shadows (`4px 4px 0px #000`).
  - Subtle architectural graph-grid background pattern.
  - Vibrant retro accent palettes (Electric Blue `#2563EB`, Neo-Lime `#A3E635`, Bright Yellow `#FDE047`, Soft Purple `#C084FC`).
  - Distinct typography pairing: **Gabarito** for bold editorial serif headlines and **Be Vietnam Pro** for clean, readable body copy.

- **Interactive Retro CLI Terminal:**
  - A bash-inspired terminal window embedded directly in the hero section displaying runtime simulation (`whoami`, `cat core-stack.json`, `systemctl status architecture.service`).

- **Bento Metric Badges:**
  - Quick-glance metrics highlighting mentorship milestones (50+ mentees), industry tenure, and core programming languages.

- **Centralized Data & Content Architecture:**
  - Complete separation of data and presentation. All profile narratives, career timelines, project listings, and skill categories are strictly managed within [`src/config/index.ts`](src/config/index.ts) with full TypeScript schema validation.

- **Verified Proof of Work:**
  - Direct links to GitHub repositories, Google Colab notebooks, and hosted credential certificates for organizational and mentorship achievements.

---

## 🛠️ Tech Stack

- **Core Framework:** [Astro v6](https://astro.build/) (Island Architecture, static site generation, ultra-fast initial page load)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (integrated via `@tailwindcss/vite` with custom theme tokens)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (strict type definitions for all section props and configuration schemas)
- **Hosting & Analytics:** [Vercel](https://vercel.com/) with `@vercel/analytics`
- **Fonts:** Self-hosted via Astro Fontsource (`Gabarito` & `Be Vietnam Pro`)

---

## 📂 Project Structure

```text
my-portfolio/
├── public/                 # Static assets (profile images, project previews, PDF certificates)
├── src/
│   ├── components/         # Modular Astro UI components
│   │   ├── About.astro         # Narrative bio, highlights, sticker card
│   │   ├── Experience.astro    # Career & internship timeline
│   │   ├── Footer.astro        # Pre-footer CTA banner and copyright
│   │   ├── Header.astro        # Sticky navigation bar & mobile menu
│   │   ├── Hero.astro          # Headline, action buttons, retro CLI terminal, metric cards
│   │   ├── Organizations.astro # Leadership roles, BNCC mentorship, and HIMTI events
│   │   ├── Projects.astro      # Featured projects grid with preview & source badges
│   │   ├── Section.astro       # Reusable section wrapper with neo-badges
│   │   └── Skills.astro        # Categorized tech stack & tooling cards
│   ├── config/
│   │   └── index.ts        # Centralized site data (Source of Truth)
│   ├── layouts/
│   │   └── Layout.astro    # Base HTML template, meta tags, OpenGraph, font imports
│   ├── styles/
│   │   └── global.css      # Tailwind v4 theme definitions and neo-brutalist utility classes
│   └── types/
│       └── index.ts        # TypeScript interfaces and prop types
├── astro.config.mjs        # Astro configuration & Vite plugin pipeline
└── package.json            # Project dependencies and script declarations
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.17.1 or higher) and [pnpm](https://pnpm.io/) (or npm / yarn) installed.

### 1. Clone the Repository

```bash
git clone https://github.com/abrahamkusnadi/my-portfolio.git
cd my-portfolio
```

### 2. Install Dependencies

```bash
pnpm install
# or
npm install
```

### 3. Start Development Server

```bash
pnpm dev
# or
npm run dev
```

Visit [`http://localhost:4321`](http://localhost:4321) in your browser to see the site running live.

### 4. Build for Production

```bash
pnpm build
# or
npm run build
```

The production-ready static output will be generated inside the `dist/` directory.

---

## 📬 Contact & Connect

- **Name:** Abraham Kusnadi
- **Email:** [abrahamkusnadi@gmail.com](mailto:abrahamkusnadi@gmail.com)
- **LinkedIn:** [linkedin.com/in/abrahamkusnadi](https://www.linkedin.com/in/abrahamkusnadi/)
- **GitHub:** [github.com/abrahamkusnadi](https://github.com/abrahamkusnadi)

---

<div align="center">
  <sub>
    Designed &amp; Developed with ⚡ by <b>Abraham Kusnadi</b> • Powered by Astro &amp; Tailwind CSS • Design Inspired by <a href="https://id.pinterest.com/pin/1072349361292329302/">Pinterest</a>
  </sub>
</div>
