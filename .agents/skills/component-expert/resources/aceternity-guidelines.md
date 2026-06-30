# 🌀 Aceternity UI Guidelines

## Overview
Aceternity UI relies heavily on `framer-motion`, `clsx`, `tailwind-merge`, and custom Tailwind plugins. Components are usually copy-pasted rather than installed via CLI.

## Required Dependencies
Before using any Aceternity component, you must ensure these are installed:
```bash
npm install framer-motion clsx tailwind-merge
```

## Global Utilities (`lib/utils.ts`)
Aceternity requires this standard `cn` utility. Ensure this exists in the workspace:
```typescript
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## Tailwind Config Pre-Flight
Many Aceternity components require the `addVariablesForColors` plugin. Inject this into `tailwind.config.ts`:
```typescript
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... rest of config
  plugins: [
    addVariablesForColors,
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({
    ":root": newVars,
  });
}
```
## Scraping Protocol
Use Firecrawl to target `https://ui.aceternity.com/components/[component-name]` to extract the specific React code and any specific animation variants.
