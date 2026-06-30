# 📊 Tremor Guidelines

## Overview
Tremor is the absolute best library for building dashboards, charts, and data-heavy interfaces. It has strict requirements for Headless UI and custom Tailwind color definitions.

## Required Dependencies
```bash
npm install @tremor/react @heroicons/react
```

## Tailwind Config Pre-Flight (CRITICAL)
Tremor requires a massive, specific color palette and custom safelisting in `tailwind.config.ts`. 
If `tailwind.config.ts` does not contain the Tremor configuration, you MUST scrape `https://www.tremor.so/docs/getting-started/installation` using Firecrawl to retrieve the exact `colors.tremor` object and `safelist` array, and merge it safely into the existing config. Failure to do this will result in invisible or unstyled charts.

## Usage Protocol
Unlike Aceternity, Tremor components are imported directly from the npm package (e.g., `import { BarChart, Card, Title } from "@tremor/react"`). You rarely need to copy-paste raw component code.
Rely on your internal knowledge or use Firecrawl to scrape `https://www.tremor.so/docs/visualizations/[component-name]` for implementation examples.
