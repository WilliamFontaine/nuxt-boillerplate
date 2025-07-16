# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt 3 boilerplate with Nuxt 4 migration in progress, featuring TypeScript, Nuxt UI, Prisma ORM, PostgreSQL, and i18n support. The project uses a monorepo-like structure with shared utilities.

## Essential Commands

### Development

```bash
pnpm dev                    # Start development server
pnpm build                  # Build for production
pnpm preview                # Preview production build
```

### Database Operations

```bash
docker compose up -d        # Start PostgreSQL database
npx prisma migrate dev      # Run database migrations
pnpm db:generate           # Generate Prisma client
pnpm db:push               # Push schema changes to database
pnpm db:studio             # Open Prisma Studio
```

### Code Quality

```bash
pnpm lint                  # Run both ESLint and Prettier
pnpm lint:eslint           # Run ESLint only
pnpm lint:prettier         # Run Prettier only
```

### Deployment

```bash
pnpm tag:patch             # Version bump and deploy (patch)
pnpm tag:minor             # Version bump and deploy (minor)
pnpm tag:major             # Version bump and deploy (major)
```

## Architecture

### Directory Structure

- `/app/` - Main Nuxt application (components, pages, layouts, composables, assets)
- `/shared/` - Shared utilities, models, and types (imported via nuxt.config.ts)
- `/server/` - API routes and server middleware
- `/lib/` - Utility libraries (Prisma client singleton)
- `/prisma/` - Database schema and migrations

### Key Patterns

- **Prisma Singleton**: Database client is managed through `lib/prisma.ts` with global singleton pattern
- **Shared Imports**: `shared/` directory is auto-imported in both client and server via nuxt.config.ts
- **Form Components**: Reusable form components in `app/components/form/` with validation
- **Composables**: Shared logic in `app/composables/` (notifications, form handling)

### Tech Stack

- **Framework**: Nuxt 3 (v3.17.4) with Vue 3 Composition API
- **UI**: Nuxt UI components with Tailwind CSS
- **Database**: PostgreSQL + Prisma ORM (v6.8.2)
- **i18n**: French default, English support, prefix strategy except default
- **Validation**: Yup for form validation
- **Package Manager**: pnpm

### Environment Setup

- Requires `NUXT_DATABASE_URL` environment variable
- Database runs in Docker via `docker compose up -d`
- Auto-migration on deployment via GitHub Actions

### Code Style

- Single quotes, no semicolons
- Prettier + ESLint with strict formatting rules
- TypeScript with relaxed rules for Vue components
- Husky for pre-commit hooks

## Development Notes

### Database

- Simple Post model (id, title, content) as example
- Prisma client singleton prevents connection pool issues
- Migrations managed via `npx prisma migrate dev`

### API Design

- RESTful endpoints in `server/api/`
- Consistent response format with statusCode and data
- Event handlers follow Nuxt 3 conventions

### Internationalization

- Configuration in `app/i18n/locales/`
- Language switcher component available
- Lazy loading with browser detection and cookie persistence

### Deployment

- Automated via GitHub Actions on version tags
- Multi-stage Docker build with Node.js 22 Alpine
- GitHub Container Registry for image storage
