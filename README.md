# Nuxt Boilerplate

A modern Nuxt 3 boilerplate with TypeScript, Tailwind CSS, Prisma, and PostgreSQL.

## Features

- 🚀 [Nuxt 3](https://nuxt.com/) - The Vue Framework
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- 🖼️ [UI](https://ui.nuxt.com/) - Nuxt UI components
- 🗄️ [Prisma](https://www.prisma.io/) - Next-generation ORM
- 🐘 [PostgreSQL](https://www.postgresql.org/) - Powerful, open source database
- 🌍 [i18n](https://i18n.nuxtjs.org/) - Internationalization
- 🖼️ [Nuxt Image](https://image.nuxt.com/) - Image optimization
- 🧰 TypeScript - Type safety
- 🎯 ESLint + Prettier - Code quality
- 🐳 Docker - Containerization
- 🔄 GitHub Actions - CI/CD

## Prerequisites

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Quick Start

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Copy `.env.example` to `.env` and configure your environment variables
4. Start the database:
   ```bash
   docker compose up -d
   ```
5. Run migrations:
   ```bash
   npx prisma migrate dev
   ```
6. Start the development server:
   ```bash
   pnpm dev
   ```

## Project Structure

```
├── .github/         # GitHub Actions workflows
├── prisma/          # Database schema and migrations
├── public/          # Static assets
├── server/          # Server-side code
└── components/      # Vue components
```

## Application Structure

### Core Directories

- `assets/` - Static assets (CSS, images)
- `components/` - Vue components
- `composables/` - Vue composables and hooks
- `i18n/` - Internationalization files
- `layouts/` - Page layouts
- `lib/` - Utility functions and shared code
- `middleware/` - Route middleware
- `models/` - TypeScript interfaces and types
- `pages/` - Application routes
- `public/` - Public static files
- `server/` - Server-side code and API routes

### Configuration Files

- `nuxt.config.ts` - Nuxt configuration
- `app.config.ts` - NuxtUI configuration
- `tsconfig.json` - TypeScript configuration
- `compose.yml` - Docker Compose configuration
- `Dockerfile` - Docker build configuration
- `.prettierrc.yaml` - Prettier configuration
- `eslint.config.mts` - ESLint configuration

## Features

### Internationalization

The application supports multiple languages:

- English (en)
- French (fr) - Default language

Language files are located in `i18n/` directory and use the `prefix_except_default` strategy.

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **TypeScript** - Type safety
- **Nuxt DevTools** - Development utilities

### Database

The application uses PostgreSQL with Prisma as ORM. Database schema and migrations are managed in the `prisma/` directory.

### API Routes

Server-side API routes are located in `server/api/`. They follow the Nuxt 3 server routes convention.

### Middleware

Route middleware is available in `middleware/` directory. Use it for:

- Authentication
- Route guards
- Request preprocessing

### Components

Components are organized in the `components/` directory. They can be used with auto-imports:

```vue
<template>
  <MyComponent />
</template>
```

### Composables

Reusable Vue composables are in `composables/`. They provide:

- Shared logic
- State management
- API interactions

## Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run all linters
- `pnpm lint:eslint` - Run ESLint
- `pnpm lint:prettier` - Run Prettier

### Environment Variables

Required environment variables:

- `NUXT_DATABASE_URL`: PostgreSQL connection string

### Database

The project uses PostgreSQL with Prisma as ORM. The database runs in Docker:

```bash
# Start database
docker compose up -d

# Run migrations
npx prisma migrate dev
```

## Deployment

The application is automatically deployed when a new version tag is pushed to the repository.

### Deployment Process

1. Build and push Docker image to GitHub Container Registry
2. Run database migrations
3. Deploy to production server

### Versioning

To deploy a new version:

```bash
# Patch version (0.0.x)
pnpm tag:patch

# Minor version (0.x.0)
pnpm tag:minor

# Major version (x.0.0)
pnpm tag:major
```
