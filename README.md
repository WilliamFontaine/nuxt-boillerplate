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

### 🗄️ Database & Backend

- **[Prisma ORM](https://www.prisma.io/)** - Type-safe database toolkit with migrations
- **[PostgreSQL](https://www.postgresql.org/)** - Robust relational database
- **[Docker Compose](https://docs.docker.com/compose/)** - Containerized development environment
- **[Adminer](https://www.adminer.org/)** - Database management interface

### 🛠️ Developer Experience

- **[i18n](https://i18n.nuxtjs.org/)** - Internationalization (French/English)
- **[ESLint](https://eslint.org/)** + **[Prettier](https://prettier.io/)** - Code quality and formatting
- **[Husky](https://typicode.github.io/husky/)** - Git hooks for quality assurance
- **[pnpm](https://pnpm.io/)** - Fast, efficient package manager

### 🏗️ Architecture

- **Monorepo Structure** - Shared utilities and types via `shared/` directory
- **Auto-imports** - Components, composables, and utilities
- **Full-stack API** - Server routes with Nuxt 4 server engine
- **Form System** - Built-in validation with Yup

### 🚀 Deployment

- **GitHub Actions** - Automated CI/CD pipeline
- **Docker** - Production-ready containerization
- **Semantic Versioning** - Automated version management

## 📋 Prerequisites

- **[Node.js](https://nodejs.org/)** (v18+ recommended)
- **[pnpm](https://pnpm.io/)** (preferred package manager)
- **[Docker](https://www.docker.com/)** & **[Docker Compose](https://docs.docker.com/compose/)**

## 🚀 Getting Started

### Option 1: Quick Setup with Renaming (Recommended)

1. **Clone and navigate to project**

   ```bash
   git clone <repository-url> my-project
   cd my-project
   ```

2. **Rename the project** (updates all references)

   ```bash
   ./rename-project.sh my-awesome-project
   ```

3. **Start development**
   ```bash
   docker compose up -d              # Start database
   npx prisma migrate dev            # Run migrations
   pnpm dev                          # Start dev server
   ```

### Option 2: Standard Setup

```bash
# Clone and install
git clone <repository-url> my-project
cd my-project
pnpm install

# Environment setup
cp .env.example .env
# Edit .env with your database URL if needed

# Database setup
docker compose up -d
npx prisma migrate dev

# Start development
pnpm dev
```

### 🌐 Access Points

- **Application**: http://localhost:3000
- **Database Admin**: http://localhost:8000 (Adminer)
- **Prisma Studio**: `npx prisma studio`

## 📁 Project Structure

```
├── app/                    # Main Nuxt 4 application
│   ├── components/         # Vue components (auto-imported)
│   ├── composables/        # Vue composables (auto-imported)
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

### Internationalization

- **Default**: French (no URL prefix)
- **Secondary**: English (`/en` prefix)
- **Strategy**: `prefix_except_default`
- **Features**: Lazy loading, browser detection, cookie persistence

## 🔧 Development

### Available Scripts

| Command              | Description              |
| -------------------- | ------------------------ |
| `pnpm dev`           | Start development server |
| `pnpm build`         | Build for production     |
| `pnpm preview`       | Preview production build |
| `pnpm lint`          | Run ESLint + Prettier    |
| `pnpm lint:eslint`   | Run ESLint only          |
| `pnpm lint:prettier` | Run Prettier only        |
| `pnpm db:generate`   | Generate Prisma client   |
| `pnpm db:push`       | Push schema to database  |
| `pnpm db:studio`     | Open Prisma Studio       |

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

### Code Quality

The project enforces quality through:

- **Pre-commit hooks** (Husky)
- **ESLint** for code linting
- **Prettier** for formatting
- **TypeScript** for type safety

## 🚀 Deployment

### Automated Deployment

Deployment is triggered by pushing version tags:

```bash
# Semantic versioning
pnpm tag:patch      # 0.0.x (bug fixes)
pnpm tag:minor      # 0.x.0 (new features)
pnpm tag:major      # x.0.0 (breaking changes)
```

**Deployment process:**

1. 🏗️ Build Docker image
2. 📦 Push to GitHub Container Registry
3. 🗄️ Run database migrations
4. 🚀 Deploy to production

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
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ using Nuxt 4**
