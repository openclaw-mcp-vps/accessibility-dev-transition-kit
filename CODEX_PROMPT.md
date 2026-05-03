# Build Task: accessibility-dev-transition-kit

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: accessibility-dev-transition-kit
HEADLINE: Career transition toolkit for developers going blind
WHAT: Curated resources, tools, and mentorship matching for developers transitioning to accessible development practices due to vision loss
WHY: Direct ask from developer going blind seeking preparation guidance - represents underserved community with specific needs
WHO PAYS: Developers with vision impairments, accessibility consultants, companies hiring inclusive teams
NICHE: accessibility-tools
PRICE: $$29/mo

ARCHITECTURE SPEC:
Next.js SaaS platform with user authentication, subscription management via Lemon Squeezy, and a curated resource database. Features mentorship matching system and progress tracking for developers transitioning to accessible development practices.

PLANNED FILES:
- app/page.tsx
- app/dashboard/page.tsx
- app/resources/page.tsx
- app/mentorship/page.tsx
- app/api/auth/[...nextauth]/route.ts
- app/api/webhooks/lemonsqueezy/route.ts
- app/api/resources/route.ts
- app/api/mentorship/route.ts
- components/ui/resource-card.tsx
- components/ui/mentor-profile.tsx
- components/ui/progress-tracker.tsx
- components/auth/auth-provider.tsx
- lib/db/schema.ts
- lib/lemonsqueezy.ts
- lib/auth.ts
- middleware.ts

DEPENDENCIES: next, react, typescript, tailwindcss, next-auth, @auth/prisma-adapter, prisma, @prisma/client, @lemonsqueezy/lemonsqueezy.js, lucide-react, class-variance-authority, clsx, tailwind-merge, zod, react-hook-form, @hookform/resolvers

REQUIREMENTS:
- Next.js 15 with App Router (app/ directory)
- TypeScript
- Tailwind CSS v4
- shadcn/ui components (npx shadcn@latest init, then add needed components)
- Dark theme ONLY — background #0d1117, no light mode
- Stripe Payment Link for payments (hosted checkout — use the URL directly as the Buy button href)
- Landing page that converts: hero, problem, solution, pricing, FAQ
- The actual tool/feature behind a paywall (cookie-based access after purchase)
- Mobile responsive
- SEO meta tags, Open Graph tags
- /api/health endpoint that returns {"status":"ok"}
- NO HEAVY ORMs: Do NOT use Prisma, Drizzle, TypeORM, Sequelize, or Mongoose. If the tool needs persistence, use direct SQL via `pg` (Postgres) or `better-sqlite3` (local), or just filesystem JSON. Reason: these ORMs require schema files and codegen steps that fail on Vercel when misconfigured.
- INTERNAL FILE DISCIPLINE: Every internal import (paths starting with `@/`, `./`, or `../`) MUST refer to a file you actually create in this build. If you write `import { Card } from "@/components/ui/card"`, then `components/ui/card.tsx` MUST exist with a real `export const Card` (or `export default Card`). Before finishing, scan all internal imports and verify every target file exists. Do NOT use shadcn/ui patterns unless you create every component from scratch — easier path: write all UI inline in the page that uses it.
- DEPENDENCY DISCIPLINE: Every package imported in any .ts, .tsx, .js, or .jsx file MUST be
  listed in package.json dependencies (or devDependencies for build-only). Before finishing,
  scan all source files for `import` statements and verify every external package (anything
  not starting with `.` or `@/`) appears in package.json. Common shadcn/ui peers that MUST
  be added if used:
  - lucide-react, clsx, tailwind-merge, class-variance-authority
  - react-hook-form, zod, @hookform/resolvers
  - @radix-ui/* (for any shadcn component)
- After running `npm run build`, if you see "Module not found: Can't resolve 'X'", add 'X'
  to package.json dependencies and re-run npm install + npm run build until it passes.

ENVIRONMENT VARIABLES (create .env.example):
- NEXT_PUBLIC_STRIPE_PAYMENT_LINK  (full URL, e.g. https://buy.stripe.com/test_XXX)
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY  (pk_test_... or pk_live_...)
- STRIPE_WEBHOOK_SECRET  (set when webhook is wired)

BUY BUTTON RULE: the Buy button's href MUST be `process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK`
used as-is — do NOT construct URLs from a product ID, do NOT prepend any base URL,
do NOT wrap it in an embed iframe. The link opens Stripe's hosted checkout directly.

After creating all files:
1. Run: npm install
2. Run: npm run build
3. Fix any build errors
4. Verify the build succeeds with exit code 0

Do NOT use placeholder text. Write real, helpful content for the landing page
and the tool itself. The tool should actually work and provide value.


PREVIOUS ATTEMPT FAILED WITH:
Codex exited 1: Reading additional input from stdin...
OpenAI Codex v0.121.0 (research preview)
--------
workdir: /tmp/openclaw-builds/accessibility-dev-transition-kit
model: gpt-5.3-codex
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019deeb6-b8bd-7720-b58a-6b39c787f7ad
--------
user
# Build Task: accessibility-dev-transition-kit

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: accessibility-dev-transit
Please fix the above errors and regenerate.