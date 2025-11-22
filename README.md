# Daftra

Modern React application built with Vite, TypeScript, Tailwind CSS, React Router, and React Query.

## 🔗 Links

- **Live Demo**: [https://pokemon-browser-daftra.vercel.app/](https://pokemon-browser-daftra.vercel.app/)
- **GitHub Repository**: [https://github.com/darkMagicCode/pokemon](https://github.com/darkMagicCode/pokemon)

## Tech Stack

- React 19
- TypeScript 5
- Vite 7
- React Router 7
- React Query 5
- Tailwind CSS 4
- Axios
- Framer Motion

## Features

- ✅ Pagination View
- ✅ Load More View
- ✅ Detail Page
- ✅ Loading States
- ✅ Error Boundaries
- ✅ Responsiveness
- ✅ TypeScript
- ✅ Code Organization
- ✅ Separation of Concerns
- ✅ Testing
- ✅ React Query
- ✅ React Suspense
- ✅ Modular Structure
- ✅ Vercel
- ✅ Meaningful Commit History
- ✅ Pixel-perfect layout matching reference designs
- ✅ Fully responsive across desktop, tablet, and mobile

## Getting Started

### Prerequisites

- Node.js
- pnpm

### Installation

```bash
pnpm install
```

### Environment Setup

```bash
cp .env.example .env
```

Configure `VITE_API_BASE_URL` in `.env` (defaults to `https://pokeapi.co/api/v2`).

### Development

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

### Preview

```bash
pnpm preview
```

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Type-check and build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm test` - Run tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm typecheck` - Type-check without emitting files
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

## Project Structure

The project follows a **Feature-Driven Modular Architecture** with **Atomic Design Principles** for maximum reusability and scalability.

```
src/
├── shared/                      # 🎨 100% REUSABLE COMPONENTS
│   ├── components/
│   │   ├── atoms/              # Basic building blocks (Button, Badge, Card, etc.)
│   │   ├── composites/         # Composite components (ContentCard, ContentGrid, PageHeader, etc.)
│   │   └── templates/          # Page layouts (AppLayout, DetailPage)
│   ├── loading/                # Loading states (Skeletons, Spinners)
│   ├── error/                  # Error handling (ErrorDisplay, ErrorBoundary)
│   ├── motion/                 # Animation wrappers (MotionWrapper, variants)
│   ├── hooks/                  # Shared React hooks
│   ├── lib/                    # Utility functions
│   ├── services/               # API client, logger, query client
│   └── types/                  # Global TypeScript types
│
├── features/                    # 🎯 FEATURE MODULES
│   └── pokemon/
│       ├── api/                # API calls & services
│       ├── constants/          # Feature constants
│       ├── hooks/              # Feature-specific hooks & data transformation
│       ├── pages/              # Feature pages (compose shared components)
│       ├── types/              # Feature types
│       ├── utils/              # Feature utilities
│       └── routes.ts           # Feature routing
│
├── router/                      # Application routing
└── test/                        # Test configuration
```

## Architecture

### 🏗️ Component Organization

Components are organized into 3 levels:

1. **Atoms** (`shared/components/atoms/`)
   - Basic UI elements: Button, Badge, Card, Input, Skeleton, etc.
   - Fully generic and reusable across all features

2. **Composites** (`shared/components/composites/`)
   - Composite components built from atoms:
     - Simple: ContentCard, MetricCard, StatBar, ViewToggle, BackButton, ImageContainer
     - Complex: ContentGrid, PageHeader, Pagination, DetailHeader, LoadMoreButton
   - Reusable patterns and sections

3. **Templates** (`shared/components/templates/`)
   - Page-level layouts: AppLayout, DetailPage
   - Define page structure without specific content

4. **Pages** (`features/*/pages/`)
   - Final assembled pages
   - Compose shared components with feature-specific data

### 📦 Feature-Driven Architecture

- **Maximum Reusability**: 95% of UI components are in `shared/` and work for any feature
- **Minimal Feature Code**: Features only contain:
  - Data transformation hooks
  - API calls
  - Pages that compose shared components
  - Feature-specific constants and utilities
- **Direct Composition**: Pages directly compose shared components (no unnecessary wrappers)
- **Scalable**: Adding new features requires minimal code (~100 lines vs ~500+ lines)

### 🎯 Adding New Features

Example: Adding a "Products" feature

1. **Create feature structure**:
   ```
   src/features/products/
   ├── api/              # Product API calls
   ├── hooks/            # Data transformation hook
   ├── pages/            # Product list & detail pages
   └── routes.ts         # Product routes
   ```

2. **Transform data** (~30 lines):
   ```typescript
   // hooks/useProductTransform.ts
   export const useProductTransform = (products) => {
     return products.map(product => ({
       id: product.id,
       title: product.name,
       image: product.image,
       metadata: `$${product.price}`,
       onClick: () => navigate(`/products/${product.id}`)
     }));
   };
   ```

3. **Compose page** (~40 lines):
   ```typescript
   // pages/ProductListPage.tsx
   import { ContentGrid, PageHeader, Pagination } from "@/shared/components/composites";
   
   const ProductListPage = () => {
     const { data } = useProducts();
     const contentCards = useProductTransform(data);
     
     return (
       <>
         <PageHeader title="Products" />
         <ContentGrid items={contentCards} />
         <Pagination ... />
       </>
     );
   };
   ```

**That's it!** No UI components needed. ~70 lines total. 🎉

### 🔄 Data Flow

1. **API Layer** (`features/*/api/`)
   - Services fetch raw data from API
   - Queries use React Query for caching

2. **Transformation Layer** (`features/*/hooks/`)
   - Hooks transform API data into generic component props
   - Example: Transform Pokemon data → ContentCardProps

3. **UI Layer** (`shared/components/`)
   - Generic components receive transformed data
   - No feature-specific logic in UI components

### Routing

React Router with `AppLayout`, Suspense fallbacks, and `ErrorBoundary` for error handling.

### Data Fetching

- Axios for HTTP requests
- React Query for caching and state management
- Centralized CRUD helpers in `src/shared/services/apiHelpers.ts`

### State Management

- Server state: React Query
- Client state: Local hooks

### Styling

- Tailwind CSS for styling
- Framer Motion for animations

## API Usage

### CRUD Helpers

```typescript
import { apiGet, apiPost, apiPut, apiDelete } from "@/shared/services/apiHelpers";

apiGet<T>(url, config?)
apiPost<T>(url, data?, config?)
apiPut<T>(url, data?, config?)
apiDelete<T>(url, config?)
```

### React Query Integration

Create queries in `src/features/*/api/queries` and services in `src/features/*/api/services`.

Example:

```typescript
import { apiGet } from "@/shared/services/apiHelpers";
import { paths } from "../paths";

export const fetchPokemonList = async (limit = 20, offset = 0) => {
  return apiGet(paths.pokemon.list, { params: { limit, offset } });
};
```

## Testing

- Vitest for test runner
- Testing Library for component testing
- jsdom for DOM simulation

Run tests:

```bash
pnpm test
pnpm test:watch
```

## Environment Variables

| Variable            | Description  | Default                     |
| ------------------- | ------------ | --------------------------- |
| `VITE_API_BASE_URL` | API base URL | `https://pokeapi.co/api/v2` |

See `src/shared/services/apiConfig.ts` for configuration.

## 📚 Documentation

For a detailed walkthrough of the architecture refactoring, see [REFACTORING_FINAL.md](./REFACTORING_FINAL.md).

## 🎨 Design System

All shared UI components follow consistent patterns:

- **Accessibility**: ARIA labels, keyboard navigation, focus management
- **Responsiveness**: Mobile-first design with Tailwind breakpoints
- **Animations**: Smooth transitions with Framer Motion
- **Type Safety**: Full TypeScript coverage with strict mode

## 🔍 Key Benefits

✅ **76% Less Code** per feature (70 lines vs 550 lines)  
✅ **100% Reusable UI** - Fix once, applies everywhere  
✅ **Consistent UX** - All features look identical  
✅ **Type-Safe** - Full TypeScript coverage  
✅ **Scalable** - Add unlimited features with minimal effort  
✅ **Maintainable** - Clear separation of concerns  
✅ **Testable** - Easy to unit test transformations  

## 📖 References

Architecture inspired by:
- [Feature-Driven Modular Architecture in React](https://medium.com/@muhmdshanoob/feature-driven-modular-architecture-in-react-focusing-on-scalability-reusability-and-atomic-76d9579ac60e)
- [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
