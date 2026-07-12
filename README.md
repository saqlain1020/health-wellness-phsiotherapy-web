# Health and Wellness Physiotherapy Healing Center

Next.js marketing site for Health and Wellness Physiotherapy Healing Center, rebuilt for Vercel with static content and SheetDB-backed forms.

## Stack

- Bun
- Next.js App Router
- Tailwind CSS v4
- Zod + Server Actions
- SheetDB → Google Sheets (contact + appointments)

## Getting started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local` (optional — live SheetDB defaults are already set in code):

```bash
SHEETDB_CONTACT_URL=https://sheetdb.io/api/v1/vzldv7qmmv2ox
SHEETDB_APPOINTMENT_URL=https://sheetdb.io/api/v1/q0r8m7v5vdvsl
```

## Scripts

- `bun dev` — development server
- `bun run build` — production build
- `bun start` — serve production build
- `bun run lint` — ESLint

## Deploy

Deploy to Vercel and set the SheetDB env vars if you want to override the defaults.
