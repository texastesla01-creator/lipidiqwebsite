# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### LipidIQ Website (`artifacts/lipidiqwebsite`)
- **Type**: react-vite (frontend-only, no backend)
- **Preview path**: `/`
- **Purpose**: Single-page marketing website for LipidIQ iOS clinical decision support app
- **Tech**: React + Vite, Tailwind CSS, Framer Motion, Google Fonts (DM Sans + DM Serif Display)
- **Key features**:
  - Fixed glassmorphism nav with App Store CTA
  - Animated gradient mesh hero with phone mockups
  - 4 feature cards (PREVENT, Primary Prevention, Secondary Prevention, LLT Reference)
  - Special Populations tabbed section (CKD, Age ≥75, Women, Statin Intol., Elevated Lp(a))
  - Clinical disclaimer strip
  - Guideline badge section
  - Founder card (Dr. Osama Jamil)
  - Final CTA + footer
  - Mobile-first responsive, iPhone 390px optimized, 44px+ touch targets

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
