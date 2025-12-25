---
title: "Building This Portfolio: A Development Log"
date: "2025-12-25"
description: "Behind the scenes of building this 'Code Art & Zen' portfolio. From fighting build errors to creating generative canvas animations."
tags: ["Next.js", "Tailwind CSS", "Generative Art", "DevLog"]
---

# 2025-12-25 (Wednesday) - Portfolio (Code Art & Zen) Development Log

**Topic:** Building the "Code Art & Zen" Portfolio with Next.js + Tailwind v4

## Summary
I built this portfolio site from scratch, fusing "Minimal Zen" with "Playful Code Art". This post documents the journey of implementing a Markdown-based blog system, integrating generative Canvas animations, and the challenges faced along the way to Vercel deployment.

## Detailed Process

### 1. 🏗️ Environment & Component Strategy (Shadcn UI)

- **Decision:** Adopted `shadcn/ui` and `Tailwind CSS v4` as the design system.
- **Trial & Error (CLI Freeze):**
    - **Phenomenon:** Commands like `npx shadcn@latest add input` kept freezing while waiting for user input.
    - **Solution:** Switched to a "Manual Operation" approach, creating source files (`badge.tsx`, `input.tsx`, etc.) directly. This confirmed a robust workflow independent of CLI tools.

### 2. 🎨 Visualizing "Code Art"

- **Challenge:** How to visualize the concept of "Code Art"?
- **Evolution:**
    - **Ver 1 (Framer Motion):** Initially just floating code snippets. It was too subtle and invisible.
    - **Ver 2 (Opening Integration):** Integrated the "Slow Convergence (Deep Glow)" Canvas animation as an opening sequence. Used `AnimatePresence` for smooth transitions.
    - **Ver 3 (Generative Hero):** massively updated the Hero section's `CodeBackground.tsx`. Combined a mouse-reactive particle network with syntax-highlighted code snippets to achieve both visibility and immersion.

### 3. 📝 Implementing the Blog (Markdown vs CMS)

- **Strategy:** Selected **Markdown (File-based)** for zero operational cost.
- **Implementation:**
    - Built metadata parsing logic using `gray-matter`.
    - Separated `app/page.tsx` into a Server Component (for SEO/Data) and a Client Component (`ClientHome` for Animations).
    - Implemented dynamic routing: `app/posts/[slug]/page.tsx`.

### 4. 🐛 Battling Build Errors (@tailwindcss/typography)

- **Phenomenon:** After installing `@tailwindcss/typography` for blog styling, the build failed with `CssSyntaxError`.
- **Hypothesis:** Compatibility issue between Tailwind v4 and the plugin resolution path.
- **Solution (Deep Dive):**
    - Abandoned the plugin dependency.
    - **Manually defined styles** in `app/globals.css`. Added a custom `.prose` class to define styles for `h1`~`h3`, `code`, etc., perfectly matching the "Zen" theme.

### 5. 🚀 Deployment & SEO

- **Implementation:** Configured Next.js Metadata API for SEO, Open Graph, and Sitemap/Robots.
- **Result:** Successfully deployed to Vercel via GitHub. Verified 60fps animation performance on production.

## Learnings & Next Actions

- **Tailwind v4 Plugins:** The ecosystem is still catching up. Having manual CSS fallback skills is crucial (`@layer utilities`).
- **Canvas x React:** rigorous management of `useEffect` and `requestAnimationFrame` cleanup allows heavy generative art to coexist peacefully with React's lifecycle.
