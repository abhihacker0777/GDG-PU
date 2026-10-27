# Google Developer Groups on Campus — Poornima University

<div align="center">
  <img src="public/19.png" alt="Google Developer Groups" width="360" />
  <p><strong>Official student-led developer community backed by Google Developers at Poornima University, Jaipur.</strong></p>
  
  <p>
    <a href="https://gdg.community.dev/gdg-on-campus-poornima-university-jaipur-india/"><img src="https://img.shields.io/badge/Bevy-Community_Chapter-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Bevy Chapter" /></a>
    <a href="https://poornima.edu.in/"><img src="https://img.shields.io/badge/Poornima_University-NAAC_'A+'-05488B?style=for-the-badge" alt="Poornima University" /></a>
    <a href="https://chat.whatsapp.com/BUzm2aq56HJHVmyiuzGIpJ"><img src="https://img.shields.io/badge/WhatsApp-Community_Group-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp Group" /></a>
  </p>
</div>

---

## 🌟 Overview

This is the official web portal for **Google Developer Groups (GDG) on Campus Poornima University - Jaipur, India**. Built as a high-performance, single-page application (SPA), it showcases the chapter's active events, hackathons, speaker sessions, leadership team, retrospective archives (2024, 2025, 2026), and campus photo gallery.

---

## 🚀 Key Features

- **Chapter Leadership Directory**: Real organizers and verified leads with direct links to official Bevy and LinkedIn profiles.
- **Season Retrospectives (2024, 2025, 2026)**: Multi-year tabs detailing past hackathons, team structure, themes, and upcoming Google Solution Challenge 2026 initiatives.
- **Official Events & Workshops**: Sourced from official Google Community Dev (Bevy) portal archives with category badges, date, venue, and registration links.
- **Campus Moments Gallery**: High-resolution photography of study jams, auditorium sessions, and hackathon celebrations.
- **Interactive Contact & RSVP Hub**: Custom animated dropdowns, accessible forms, and direct chapter headquarters routing.
- **Custom Interactive Design System**: Google/Poornima brand palette, responsive layout for all mobile/tablet/desktop viewports, and custom active scrollbars.
- **Vercel & SEO Ready**: Configured with `vercel.json` SPA routing, `robots.txt`, `sitemap.xml`, OpenGraph cards, and OWASP HTTP security headers.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) (Strict Mode, Hooks)
- **Build Tool**: [Vite 5](https://vitejs.dev/) (ESM, Fast HMR, Rollup production chunking)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with PostCSS & Autoprefixer
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Vector Brand Logos
- **Effects**: Canvas Confetti for community interactions
- **Typography**: Google Fonts (*Plus Jakarta Sans* & *Fira Code*)

---

## 📁 Project Structure

```text
GDG-PU/
├── public/
│   ├── 16.jpg - 23.png        # Optimized brand logos, badges, and chapter photos
│   ├── team2024/              # 2024 Organizer portraits
│   ├── team2025/              # 2025 Organizer & Core Team portraits
│   ├── team2026/              # 2026 Current Organizer portraits
│   ├── robots.txt             # Search crawler directives
│   └── sitemap.xml            # SEO canonical URL index
├── src/
│   ├── components/
│   │   ├── Footer.jsx         # Chapter footer, social badges & student attribution
│   │   ├── GoogleBracketsLogo.jsx
│   │   ├── GoogleColorBar.jsx
│   │   ├── Navbar.jsx         # Responsive desktop/mobile navigation
│   │   ├── RSVPModal.jsx      # Interactive event registration modal
│   │   └── WhatsAppIcon.jsx   # Vector WhatsApp brand icon
│   ├── data/
│   │   └── gdgData.js         # Centralized chapter metadata, events, and rosters
│   ├── pages/
│   │   ├── About.jsx          # Mission, vision, and three pillars of GDG
│   │   ├── Contact.jsx        # Headquarters info and contact form
│   │   ├── Events.jsx         # Full chapter workshops and gatherings
│   │   ├── Home.jsx           # Chapter landing page with featured sections
│   │   ├── Photos.jsx         # Campus gallery with lightbox viewer
│   │   ├── Projects.jsx       # 2024-2026 Season journeys & rosters
│   │   ├── Resources.jsx      # Google developer links, docs, and platforms
│   │   └── Team.jsx           # Leadership directory
│   ├── App.jsx                # Main layout and tab router
│   ├── index.css              # Tailwind utilities, Google palette & custom scrollbar
│   └── main.jsx               # Application entrypoint
├── index.html                 # OpenGraph metadata, favicons, and viewport config
├── package.json
├── tailwind.config.js
├── vercel.json                # Vercel SPA rewrites & OWASP security headers
└── vite.config.js             # Vite configuration
```

---

## ⚡ Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.0.0 or higher) and **npm** installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/GDG-PU.git
   cd GDG-PU
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. Create production build:
   ```bash
   npm run build
   ```
   The production-ready artifacts will be generated in the `dist/` directory.

---

## 🛡️ Security & OWASP Standards

This frontend adheres to client-side security best practices:
- **Zero Secret Exposure**: No private API keys or tokens are stored in the client repository.
- **XSS Defense**: Pure JSX rendering without `dangerouslySetInnerHTML` or `eval()`.
- **Safe External Navigation**: All outbound links use `rel="noopener noreferrer"` to prevent reverse tab-nabbing.
- **Vercel Security Headers**: Hardened in `vercel.json` with `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and `Strict-Transport-Security`.

---

## 🚀 Deploying to Vercel

1. Push your repository to **GitHub**.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your `GDG-PU` repository.
4. Framework preset will automatically be detected as **Vite**.
5. Click **Deploy**. Vercel will process `vercel.json` automatically for SPA routing and asset caching.

---

## 🌐 Official Links

- **Bevy Chapter Portal**: [GDG on Campus Poornima University](https://gdg.community.dev/gdg-on-campus-poornima-university-jaipur-india/)
- **Poornima University Portal**: [poornima.edu.in](https://poornima.edu.in/)
- **Instagram**: [@gdg.poornima](https://instagram.com/gdg.poornima)
- **LinkedIn**: [GDG Poornima University](https://www.linkedin.com/company/gdg-poornima/)
- **Telegram**: [GDG On Campus PU](https://t.me/gdgpoornima)
- **WhatsApp**: [Join Official Group](https://chat.whatsapp.com/BUzm2aq56HJHVmyiuzGIpJ)

---

## 💙 Attribution & Credits

Built with ❤️ for **Google Developer Groups on Campus Poornima University** by [Poornima Student](https://www.linkedin.com/in/abhihacker0777/).
