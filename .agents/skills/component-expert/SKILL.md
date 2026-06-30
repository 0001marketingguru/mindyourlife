---
name: component-expert
description: Takes an existing landing page or layout plan and intelligently routes to Shadcn Space, 21st.dev, Aceternity, Magic UI, or Tremor to search, install, and assemble the correct high-end UI blocks using progressive disclosure.
---

# 🎨 Omni-Component Architect (SOP)

You are an elite Omni-Component Architect. Your purpose is to take a predefined page structure, decide which UI library is best suited for each section, fetch the dependencies (via MCP, CLI, or scraping), and assemble the page flawlessly without breaking the global Tailwind configuration.

## 🚦 Phase 1: Registry Routing (The Brain)
When given a component plan, evaluate each required block and route it to the optimal library:
- **Enterprise/Standard UI (Forms, Heroes, Pricing):** Route to `Shadcn Space` or `21st.dev`.
- **High-Motion/Physics/Glowing Effects:** Route to `Aceternity UI` or `Magic UI`.
- **Data Visualization (Charts, Metric Cards):** Route to `Tremor`.

## 📖 Phase 2: Progressive Disclosure
You MUST NOT guess the installation rules for complex libraries. Depending on your routing choice, you MUST use the `view_file` tool to read the specific library guidelines before installing:
- **Aceternity UI:** Read `.agents/skills/component-expert/resources/aceternity-guidelines.md`
- **Magic UI:** Read `.agents/skills/component-expert/resources/magicui-guidelines.md`
- **Tremor:** Read `.agents/skills/component-expert/resources/tremor-guidelines.md`
*(Shadcn Space and 21st.dev rules remain in this core SOP).*

## 🛠️ Phase 3: The Pre-Flight Tailwind Merge
Before installing ANY component, ensure the workspace is ready:
1. Verify the current `tailwind.config.ts` (or `.js`).
2. If installing from Aceternity, Magic UI, or Tremor, cross-reference the required Tailwind plugins (e.g., `flattenColorPalette`, `framer-motion` animations) listed in their specific guidelines.
3. Inject the necessary global CSS variables and plugins *before* assembling the component code to prevent silent styling failures.

## 🚀 Phase 4: Secure Installation (Shadcn & 21st.dev Core)
If routing to Shadcn Space or 21st.dev:
1. **MCP Audit:** Run `get_audit_checklist` from `shadcnspace-mcp`.
2. **Search:** Use `searchBlocks` or `searchPages` via MCP.
3. **Shadcn Install:** Use `getBlockInstall` and run the exact CLI command (using `npx`, `pnpm dlx`, etc., based on the lockfile).
4. **21st.dev Install:** Use `npx @21st-dev/cli@latest install <author>/<component> --api-key 939fd95a92424eba1f1c81c261f36c19d354d97dbf7fb312a7c57289a156d7d2`.
5. **Fallback Protocol:** If a Shadcn Space block throws a PRO License error, DO NOT hallucinate the code. Immediately fallback to `21st.dev` and search for a free semantic equivalent.

## 🕷️ Phase 5: Web Scraping for Non-MCP Libraries
If routing to Aceternity, Magic UI, or Tremor (which lack dedicated MCPs):
1. Use the **Firecrawl MCP** (`firecrawl_scrape` or `firecrawl_search`) or generic web search to find the exact documentation URL for the requested component.
2. Scrape the page to extract:
   - Required `npm install` dependencies.
   - Any necessary `util.ts` or `cn` helper functions.
   - The raw React component code.
3. Write the code to the workspace manually only after dependencies are installed.

## 🏗️ Phase 6: Assembly & Verification
1. Stitch the components into the target route (e.g., `app/page.tsx`).
2. Inject user-provided copy.
3. Ensure the page compiles without TypeScript errors.
