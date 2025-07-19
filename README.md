# Nuxt Boilerplate

A modern **Nuxt 4** boilerplate with TypeScript, Nuxt UI, Prisma, and PostgreSQL. Built with a monorepo-like structure featuring shared utilities and optimized for rapid development.

> **⚠️ This is a template project.** After cloning, use the included `rename-project.sh` script to customize it for your needs.

## ✨ Features

### 🚀 Framework & Core

- **[Nuxt 4](https://nuxt.com/)** - Latest Vue.js framework with enhanced performance
- **[Vue 3](https://vuejs.org/)** - Composition API with `<script setup>` syntax
- **[TypeScript](https://www.typescriptlang.org/)** - Full type safety across client and server
- **[Nuxt UI](https://ui.nuxt.com/)** - Beautiful components built on Tailwind CSS
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Nuxt Image](https://image.nuxt.com/)** - Optimized image loading and processing
- **[Lucide Icons](https://lucide.dev/)** - Beautiful, customizable SVG icons

### 🗄️ Database & Backend

- **[Prisma ORM](https://www.prisma.io/)** - Type-safe database toolkit with migrations
- **[PostgreSQL](https://www.postgresql.org/)** - Robust relational database
- **[Docker Compose](https://docs.docker.com/compose/)** - Containerized development environment
- **[Adminer](https://www.adminer.org/)** - Database management interface

### 🛠️ Developer Experience

- **[i18n](https://i18n.nuxtjs.org/)** - Internationalization (French/English)
- **[ESLint](https://eslint.org/)** + **[Prettier](https://prettier.io/)** - Code quality and formatting
- **[Husky](https://typicode.github.io/husky/)** - Git hooks for quality assurance
- **[Commitlint](https://commitlint.js.org/)** - Conventional commit enforcement
- **[pnpm](https://pnpm.io/)** - Fast, efficient package manager with workspaces
- **[Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog)** - Automated changelog generation

### 🧪 Testing

- **[Vitest](https://vitest.dev/)** - Unit testing framework with native TypeScript support
- **[Playwright](https://playwright.dev/)** - End-to-end testing across browsers
- **[@nuxt/test-utils](https://nuxt.com/docs/getting-started/testing)** - Nuxt-specific testing utilities
- **[Vue Test Utils](https://vue-test-utils.vuejs.org/)** - Vue component testing utilities
- **[Happy DOM](https://github.com/capricorn86/happy-dom)** - Lightweight DOM implementation for testing

### 🏗️ Architecture

- **Monorepo Structure** - Shared utilities and types via `shared/` directory
- **Auto-imports** - Components, composables, and utilities
- **Full-stack API** - Server routes with Nuxt 4 server engine
- **Form System** - Built-in validation with Yup and reusable form components
- **Theme System** - Dark/light mode with persistent preferences
- **Notification System** - Toast notifications with useNotifications composable
- **Type Safety** - Full TypeScript integration across client and server

### 🚀 Deployment

- **GitHub Actions** - Automated CI/CD pipeline
- **Docker** - Production-ready containerization
- **Semantic Versioning** - Automated version management
- **Changelog Generation** - Automatic changelog from conventional commits

## 📋 Prerequisites

- **[Node.js](https://nodejs.org/)** (v18+ recommended, v22+ for production)
- **[pnpm](https://pnpm.io/)** (preferred package manager)
- **[Docker](https://www.docker.com/)** & **[Docker Compose](https://docs.docker.com/compose/)**
- **[Git](https://git-scm.com/)** (for version control and deployment)

## 🚀 Getting Started

### Quick Setup

1. **Clone and navigate to project**

   ```bash
   git clone <repository-url> my-project
   cd my-project
   ```

2. **Rename the project** (recommended - updates all references)

   ```bash
   ./rename-project.sh my-awesome-project
   ```

   _Or skip this step if you prefer the default name_

3. **Environment setup** (optional)

   ```bash
   cp .env.example .env
   # Edit .env with your database URL if needed
   ```

4. **Install dependencies and start development**

   ```bash
   pnpm install                      # Install dependencies
   docker compose up -d              # Start database
   npx prisma migrate dev            # Run migrations
   pnpm dev                          # Start dev server
   ```

### 🌐 Access Points

- **Application**: http://localhost:3000
- **Database Admin**: http://localhost:8000 (Adminer)
- **Prisma Studio**: `npx prisma studio`

## 📁 Project Structure

```
├── app/                   # Main Nuxt 4 application
│   ├── components/        # Vue components (auto-imported)
│   ├── composables/       # Vue composables (auto-imported)
│   ├── layouts/           # Page layouts
│   ├── pages/             # Application routes
│   ├── assets/            # CSS and static assets
│   └── middleware/        # Route middleware
├── shared/                # Shared utilities (auto-imported)
│   ├── models/            # TypeScript models
│   ├── types/             # Type definitions
│   └── utils/             # Utility functions
├── server/                # Server-side code
│   ├── api/               # API routes
│   ├── middleware/        # Server middleware
│   └── routes/            # Custom server routes
├── lib/                   # Library code
│   └── prisma.ts          # Prisma client singleton
├── prisma/                # Database
│   ├── migrations/        # Database migrations
│   └── schema.prisma      # Database schema
├── i18n/                  # Internationalization
│   └── locales/           # Language files (en.json, fr.json)
├── public/                # Static files
├── docker-compose.yml     # Development services
└── rename-project.sh      # Project customization script
```

## 🎨 Architecture Highlights

### Nuxt 4 Features

- New `app/` directory structure
- Enhanced auto-imports for better DX
- Improved server engine
- Better TypeScript integration

### Shared Utilities System

The `shared/` directory provides auto-imported utilities across the entire stack:

```typescript
// Automatically available everywhere
import { Post } from '~/shared/models/post'
import type { ApiResponse } from '~/shared/types/api'
```

### Database Pattern

- **Prisma Client Singleton**: Prevents connection pool issues
- **Type Safety**: Full TypeScript integration
- **Auto-migrations**: Database updates on deployment

### API Design

Consistent response format across all endpoints:

```typescript
type ApiResponse<T> = {
  statusCode: number
  data: T
}
```

### Form System

Built-in validation with reusable components:

```vue
<template>
  <FormPost @submit="handleSubmit" />
</template>
```

### Theme System

Built-in dark/light mode with persistent preferences:

```vue
<template>
  <ThemeSwitcher />
</template>
```

### Notification System

Toast notifications with the useNotifications composable:

```typescript
const { addNotification } = useNotifications()

addNotification({
  type: 'success',
  title: 'Success!',
  description: 'Operation completed successfully'
})
```

### Internationalization

- **Default**: French (no URL prefix)
- **Secondary**: English (`/en` prefix)
- **Strategy**: `prefix_except_default`
- **Features**: Lazy loading, browser detection, cookie persistence

## 🔧 Development

### Available Scripts

| Command                   | Description                      |
| ------------------------- | -------------------------------- |
| `pnpm dev`                | Start development server         |
| `pnpm build`              | Build for production             |
| `pnpm preview`            | Preview production build         |
| `pnpm lint`               | Run ESLint + Prettier            |
| `pnpm lint:eslint`        | Run ESLint only                  |
| `pnpm lint:prettier`      | Run Prettier only                |
| `pnpm test`               | Run all tests                    |
| `pnpm test:unit`          | Run unit tests only              |
| `pnpm test:e2e`           | Run E2E tests only               |
| `pnpm test:watch`         | Run tests in watch mode          |
| `pnpm test:coverage`      | Run tests with coverage report   |
| `pnpm db:generate`        | Generate Prisma client           |
| `pnpm db:push`            | Push schema to database          |
| `pnpm db:studio`          | Open Prisma Studio               |
| `pnpm changelog:generate` | Generate changelog from commits  |
| `pnpm changelog:preview`  | Preview changelog changes        |
| `pnpm version:check`      | Check current version and status |
| `pnpm tag:patch`          | Create patch release             |
| `pnpm tag:minor`          | Create minor release             |
| `pnpm tag:major`          | Create major release             |

### Database Operations

```bash
# Start/stop database
docker compose up -d              # Start services
docker compose down               # Stop services

# Migrations
npx prisma migrate dev            # Create and apply migration
npx prisma migrate reset          # Reset database (dev only)
npx prisma db push               # Push schema changes (quick)

# Database management
npx prisma studio                # Visual database editor
# or visit http://localhost:8000  # Adminer web interface
```

### Environment Variables

```bash
# Required
NUXT_DATABASE_URL="postgresql://postgres:P@ssw0rd@localhost:5432/database"

# Optional customization
# NUXT_PUBLIC_API_BASE="http://localhost:3000"
```

### UI Components

The project includes several built-in components:

- **Form Components**: Input, Password, Select, Textarea with validation
- **ThemeSwitcher**: Toggle between dark and light modes
- **LanguageSwitcher**: Switch between French and English
- **PostCard**: Display post content with styling
- **Notification System**: Toast notifications via useNotifications composable

### Configuration Files

- **`app.config.ts`** - Nuxt UI theme configuration (blue/cyan/slate colors)
- **`nuxt.config.ts`** - Main Nuxt configuration with auto-imports
- **`commitlint.config.ts`** - Conventional commit rules
- **`eslint.config.mts`** - ESLint configuration
- **`pnpm-workspace.yaml`** - Workspace configuration
- **`docker-compose.yml`** - PostgreSQL + Adminer setup

### Code Quality

The project enforces quality through:

- **Pre-commit hooks** (Husky)
- **ESLint** for code linting
- **Prettier** for formatting
- **TypeScript** for type safety

### Testing

The project includes a comprehensive testing setup with database isolation and multi-browser support:

#### Unit Testing with Vitest

- **Framework**: Vitest with native TypeScript support and Nuxt integration
- **Location**: `tests/unit/components/`
- **Configuration**: `vitest.config.ts` with Nuxt environment
- **Features**: Auto-imports, global mocks, coverage reporting
- **Database**: Uses `test_database` for isolated testing

#### End-to-End Testing with Playwright

- **Framework**: Playwright for cross-browser testing
- **Location**: `tests/e2e/`
- **Configuration**: `playwright.config.ts` with multi-browser matrix
- **Browsers**: Chromium, Firefox, WebKit
- **Features**: Visual testing, traces, screenshots, video recording

#### Test Commands

```bash
# Run all tests (unit + E2E)
pnpm test

# Unit tests
pnpm test:unit                    # Run unit tests
pnpm test:unit:watch              # Watch mode for TDD
pnpm test:unit:coverage           # With coverage report

# E2E tests
pnpm test:e2e                     # Run all browsers
pnpm test:e2e:ui                  # Playwright UI mode
pnpm test:e2e:debug               # Debug mode

# Coverage
pnpm test:coverage                # Generate coverage report
```

#### Test Structure

```
tests/
├── setup/
│   ├── vitest.ts               # Global test setup and mocks
│   └── playwright.ts           # E2E database setup and seeding
├── unit/
│   └── components/             # Component unit tests
│       ├── LanguageSwitcher.nuxt.spec.ts
│       └── ThemeSwitcher.nuxt.spec.ts
└── e2e/
    └── home.spec.ts            # End-to-end user workflows
```

#### Key Testing Features

- **Database Isolation**: Dedicated `test_database` for all tests
- **Global Mocks**: Pre-configured mocks for i18n, router, notifications
- **Auto-imports**: All Nuxt composables and utilities work in tests
- **Multi-browser CI**: GitHub Actions runs tests on Chromium, Firefox, WebKit
- **Coverage Reports**: Detailed coverage with V8 provider
- **Visual Testing**: Screenshots and videos for failed E2E tests
- **Accessibility Testing**: Built-in a11y checks in E2E tests

#### Getting Started with Testing

1. **Setup test database** (first time only):

   ```bash
   docker compose up -d              # Start PostgreSQL with test_database
   ```

2. **Run tests during development**:

   ```bash
   pnpm test:unit:watch             # TDD with auto-reload
   pnpm test:e2e:ui                 # Visual E2E testing
   ```

3. **Before committing**:
   ```bash
   pnpm test                        # Run all tests
   pnpm test:coverage               # Check coverage
   ```

## 🚀 Deployment

### Versioning & Releases

This project uses **conventional commits** and **automated changelog generation**. All releases are managed through semantic versioning with automatic changelog updates.

#### Conventional Commits

Use structured commit messages to enable automatic changelog generation:

```bash
# Feature commits (minor version bump)
git commit -m "feat: add user authentication system"
git commit -m "feat(api): implement user profile endpoints"

# Bug fix commits (patch version bump)
git commit -m "fix: resolve database connection timeout"
git commit -m "fix(ui): correct button alignment on mobile"

# Documentation commits
git commit -m "docs: update API documentation"
git commit -m "docs(readme): add installation instructions"

# Other commit types
git commit -m "style: improve code formatting"
git commit -m "refactor: optimize database queries"
git commit -m "test: add user authentication tests"
git commit -m "chore: update dependencies"
```

#### Supported Commit Types

- `feat:` - New features (triggers minor version bump)
- `fix:` - Bug fixes (triggers patch version bump)
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks
- `perf:` - Performance improvements
- `ci:` - CI/CD changes
- `build:` - Build system changes

#### Release Process

Before creating a release, you can preview the changes:

```bash
# Check current version and git status
pnpm version:check

# Preview what will be in the changelog
pnpm changelog:preview
```

Create releases using semantic versioning:

```bash
# Patch release (0.0.x) - Bug fixes only
pnpm tag:patch

# Minor release (0.x.0) - New features, backward compatible
pnpm tag:minor

# Major release (x.0.0) - Breaking changes
pnpm tag:major
```

**Each release automatically:**

1. 📝 Generates changelog from conventional commits
2. 📄 Updates `CHANGELOG.md` file
3. 💾 Commits changelog changes
4. 🏷️ Creates version tag
5. 🚀 Pushes to repository
6. 🏗️ Triggers deployment pipeline

#### Deployment Pipeline

When a version tag is pushed, the GitHub Actions workflow automatically:

1. 🏗️ Builds Docker image
2. 📦 Pushes to GitHub Container Registry
3. 🗄️ Runs database migrations
4. 🚀 Deploys to production
5. 📋 Creates GitHub Release with changelog

### Manual Deployment

```bash
# Build production image
docker build -t your-app .

# Run with environment variables
docker run -p 3000:3000 \
  -e NUXT_DATABASE_URL="postgresql://..." \
  your-app
```

### Production Environment

Required environment variables:

```bash
NUXT_DATABASE_URL="postgresql://user:password@host:5432/database"
NODE_ENV="production"
```

## 📦 Project Customization

### Using the Rename Script

The `rename-project.sh` script automatically updates:

- ✅ Package name in `package.json`
- ✅ Project titles in i18n files
- ✅ Docker container names
- ✅ GitHub workflow references
- ✅ Dependencies reinstallation

```bash
./rename-project.sh my-awesome-project
```

The script will:

1. Validate project name format (alphanumeric + hyphens)
2. Update all configuration files
3. Convert name to proper display title
4. Reinstall dependencies to update lock files
5. Optionally remove itself when done

### Removing Example Code

The template includes example Post functionality. To remove:

1. Delete `shared/models/post.ts`
2. Delete `server/api/posts/` directory
3. Remove Post model from `prisma/schema.prisma`
4. Run `npx prisma migrate dev` to apply changes

## 📚 Resources

- [Nuxt 4 Documentation](https://nuxt.com/)
- [Nuxt UI Components](https://ui.nuxt.com/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Vue 3 Guide](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run `pnpm lint` to ensure code quality
5. Commit your changes using conventional commits (`git commit -m 'feat: add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Commit Message Guidelines

This project uses conventional commits for automated changelog generation. Please follow these guidelines:

- Use present tense ("add feature" not "added feature")
- Use imperative mood ("move cursor to..." not "moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line
- Consider starting the commit message with an applicable emoji for visual clarity

**Examples:**

```bash
feat: add user authentication system
fix: resolve database connection timeout
docs: update API documentation
style: improve button component styling
refactor: optimize database query performance
test: add user registration tests
chore: update project dependencies
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ using Nuxt 4**
