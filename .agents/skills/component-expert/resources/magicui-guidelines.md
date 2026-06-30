# 🪄 Magic UI Guidelines

## Overview
Magic UI specializes in micro-interactions, animated backgrounds, and physics-based React components. Like Aceternity, it relies on `framer-motion` and copy-paste mechanics.

## Required Dependencies
```bash
npm install framer-motion clsx tailwind-merge
```

## Global Utilities (`lib/utils.ts`)
Magic UI uses the exact same `cn` utility as Shadcn and Aceternity. Verify its existence before proceeding.

## Tailwind Config Pre-Flight
Magic UI often uses specific animations (like `marquee`, `meteor`, `border-beam`). When scraping a Magic UI component, specifically look for the `tailwind.config.ts` requirements block on their docs page. You MUST merge their `animation` and `keyframes` objects into the project's `tailwind.config.ts` before creating the component file.

## Scraping Protocol
Use Firecrawl to target `https://magicui.design/docs/components/[component-name]`.
Pay special attention to the "Installation" tab on their docs to catch any specialized dependencies (like `react-spring` or `d3`).
