# Singam Ironman Academy Website

A Next.js website for marathon runner and academy founder Sivabalan Singam. It presents the academy, running programs, achievements, events, gallery, and shop, with Supabase-backed content actions.

## Site sections

- Home and about pages
- Academy and running information
- Achievements, events, and photo gallery
- Shop and contact pages
- Running pace calculator
- Admin and dashboard pages for managing site content

## Technology

- Next.js 16 App Router, React 19, and TypeScript
- Supabase JavaScript client for database and storage integration
- Tailwind CSS 4
- Framer Motion and Lucide React

## Requirements

- Node.js compatible with Next.js 16
- npm
- A Supabase project with the tables and storage bucket used by the app

## Configure Supabase

Create a `.env.local` file in the project root with the public project URL and anon key:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

The client configuration is in `lib/supabaseClient.ts`. Content actions use the `events`, `gallery`, `leads`, `products`, and `achievements` tables, and image uploads use the `portfolio-images` storage bucket. Configure the required database schema, bucket, and Supabase Row Level Security policies in your Supabase project before using those features.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Other commands

```bash
npm run build
npm run start
npm run lint
```

## Project structure

- `app/` — pages, layouts, and server actions
- `app/actions/` — Supabase actions for events, gallery, leads, shop, achievements, and dashboard data
- `components/` — navigation, footer, hero, cards, and shared UI
- `lib/` — Supabase client, upload helper, and shared types/utilities

## Deployment

Deploy as a Next.js application and configure the same Supabase environment variables in the hosting provider. This repository does not document a current live deployment URL.