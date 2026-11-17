# Bintang Shobri Al Chakim — Personal Engineering Portfolio (V3.0)

A premium, modern, responsive, and visually impressive personal portfolio website for **Bintang Shobri Al Chakim**, an emerging Industrial Informatics Engineer studying at **Politeknik Manufaktur Bandung (POLMAN Bandung)**.

Designed with an international **White & Blue Engineering Design System**, inspired by modern creative developer portfolios (Robinsweb & RedDevs Framer references).

---

## 🎨 Visual Design System (White & Blue)

- **Primary Background**: `#FFFFFF` (75–80% white & off-white)
- **Secondary Background**: `#F4F8FF`
- **Soft Blue Surfaces**: `#E8F1FF`
- **Primary Blue**: `#2563EB`
- **Deep Blue**: `#1D4ED8`
- **Navy Typography**: `#172554`
- **Main Text**: `#111827`
- **Secondary Text**: `#64748B`
- **Border**: `#E2E8F0`
- **Typography**: Plus Jakarta Sans, Inter, JetBrains Mono

---

## 🌟 Key Features

1. **Brand Identity & Hero**:
   - Bold **BSAC.** brand monogram.
   - Large confident headline: *"Engineering Intelligent Systems."*
   - Supporting statement: *"Bridging Artificial Intelligence, IoT, Robotics, and Industrial Innovation."*
   - Asymmetric layout with profile placeholder and live engineering telemetry cards.
2. **Dedicated Project Detail Pages (`/#/projects/:id`)**:
   - Built with **React Router (`HashRouter`)** for 100% static GitHub Pages compatibility.
   - Dedicated routes for all 8 projects:
     - `/#/projects/maestro`
     - `/#/projects/aqua-eye`
     - `/#/projects/ai-component-identification`
     - `/#/projects/mandor-ai`
     - `/#/projects/kdrama-expert-system`
     - `/#/projects/movie-genre-prediction`
     - `/#/projects/rag-lab-assistant`
     - `/#/projects/mobile-robotics`
   - Detailed layout: Hero, Overview, Problem Statement, Objectives, 4-Step Architecture Workflow, Technologies, Personal Contribution vs Team Scope, Development Process, Status Matrix, and Lightbox Gallery.
3. **Featured vs Additional Projects**:
   - **Featured Projects**: MAESTRO, AQUA-EYE, AI Component Identification, MANDOR AI (large cards with varied visual compositions).
   - **Additional Projects**: K-Drama Expert System, Movie Genre Prediction, AI Lab Technical Assistant, Autonomous Mobile Robotics.
4. **Bilingual Engine (EN / ID)**:
   - Centralized translations (`src/data/translations.ts`).
   - Instant toggle with `localStorage` persistence.
5. **Verified Honors & Achievements**:
   - **3rd Place Innovation & Creativity (IoT)** at *International Innovation 4Force 2026* (POLINELA).
   - **Stage 2 / Semifinalist Team** at *Samsung Solve for Tomorrow 2026* (AQUA-EYE).
6. **Development Journey Timeline**:
   - Visual 6-stage engineering roadmap tracing progression from embedded microcontrollers to smart factory digital twins.
7. **Smart Asset Placeholder System & Lightbox**:
   - Ready-to-replace assets in `/public/images/`.
   - Technical blueprint schematics when placeholders are active, smooth photo rendering when replaced.
   - Interactive Lightbox with keyboard navigation.

---

## 🚀 Getting Started

### 1. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 2. Build for Production
```bash
npm run build
```
Generates production-ready static assets in the `/dist` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 🖼️ Media & Image Replacement Guide

Place your actual photographs in `/public/images/`:
- `public/images/profile/profile-photo-placeholder.png`
- `public/images/maestro/` (`prototype`, `dashboard`, `vr`, `architecture`)
- `public/images/aqua-eye/` (`prototype`, `competition`)
- `public/images/component-detection/`
- `public/images/mandor/`
- `public/images/robotics/`
- `public/images/certificates/` (`innovation-4force-2026`, `samsung-solve-for-tomorrow`)

---

## 🌐 Deploy to GitHub Pages

1. Push your repository to GitHub.
2. Go to **Settings > Pages** on your GitHub repository.
3. Choose **GitHub Actions** or deploy from your branch pointing to the `dist` folder.
4. Because the site uses `HashRouter` and `base: './'`, all routes (`/#/projects/maestro`, etc.) work out of the box with zero 404 reload errors!
