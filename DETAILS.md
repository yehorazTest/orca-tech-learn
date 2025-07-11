# DETAILS.md

---

## 1. Project Overview

### Purpose & Domain
**orca-tech-learn** is a React + TypeScript web application designed as a comprehensive **tech learning platform**. It provides curated educational content in the form of **courses**, **learning paths**, and **projects/exercises** focused on modern technology domains such as programming, cloud, Kubernetes, CI/CD, infrastructure as code, and more.

### Problem Solved
- Centralizes and organizes technical learning content for developers and IT professionals.
- Provides structured learning journeys (learning paths) combining courses and projects.
- Enables filtering, searching, and progress tracking to personalize learning.
- Offers rich metadata (difficulty, duration, prerequisites) to guide learners.
- Supports interactive UI with collapsible sections, filtering bars, and responsive design.

### Target Users & Use Cases
- **Developers and IT professionals** seeking structured learning paths.
- **Tech learners** wanting curated courses and hands-on projects.
- **Educators and content managers** who want to maintain and extend course/project catalogs.
- Use cases include browsing courses, filtering by difficulty or topic, tracking progress, and accessing project exercises.

### Core Business Logic & Domain Models
- **LearningPath**: Represents a curated sequence of courses grouped by themes or skills.
- **Course**: Individual educational units with metadata and resources.
- **Project**: Hands-on exercises with objectives, deliverables, and resources.
- **Resource**: Supplementary materials linked to courses or projects.
- **User Progress**: Tracks favorites, completion, and progress per resource.

---

## 2. Architecture and Structure

### High-Level Architecture
- **Frontend SPA** built with React and TypeScript.
- **Component-Based UI Architecture** with modular, reusable components.
- **Static Data Layer**: Courses, projects, and learning paths are defined as static TypeScript data modules.
- **State Management**: React Context API for user progress and search state.
- **Routing**: React Router for client-side navigation.
- **Styling**: Tailwind CSS with utility-first approach and custom design system components.
- **Build & Dev**: Vite as build tool with React SWC plugin, PostCSS, and Tailwind integration.
- **CI/CD**: GitHub Actions workflow for automated deployment to GitHub Pages.

---

### Complete Repository Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── docs/
│   ├── deployment-guide.md
│   ├── local-development.md
│   └── troubleshooting.md
├── public/ (8 items)
│   ├── lovable-uploads/
│   │   ├── ORCATech-logo-transparent.png
│   │   └── orcatech-logo.png
│   ├── 404.html
│   ├── CNAME
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/ (122 items)
│   ├── components/ (70 items)
│   │   ├── course/
│   │   │   ├── CourseFilterBar.tsx
│   │   │   ├── CourseHero.tsx
│   │   │   ├── CoursePrerequisites.tsx
│   │   │   ├── ResourceCard.tsx
│   │   │   └── ResourcesSection.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Logo.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── SearchBar.tsx
│   │   ├── learning-path/
│   │   │   ├── CourseGroupSection.tsx
│   │   │   ├── LearningPathHero.tsx
│   │   │   ├── LearningPathNotFound.tsx
│   │   │   └── LearningPathSidebar.tsx
│   │   └── ui/ (52 items)
│   │       ├── CourseCard.tsx
│   │       ├── LearningPathCard.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       └── ... (42 more files)
│   ├── context/
│   │   ├── SearchContext.tsx
│   │   └── UserProgressContext.tsx
│   ├── data/ (20 items)
│   │   ├── courses/ (11 items)
│   │   │   ├── cicd.ts
│   │   │   ├── cloud.ts
│   │   │   ├── docker.ts
│   │   │   ├── expert.ts
│   │   │   ├── git.ts
│   │   │   ├── iac.ts
│   │   │   ├── index.ts
│   │   │   ├── kubernetes.ts
│   │   │   ├── programming.ts
│   │   │   ├── sysadmin.ts
│   │   │   └── web.ts
│   │   ├── projects/ (6 items)
│   │   │   ├── cicd.ts
│   │   │   ├── docker.ts
│   │   │   ├── iac.ts
│   │   │   ├── index.ts
│   │   │   ├── kubernetes.ts
│   │   │   └── python.ts
│   │   └── learningPaths.ts
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   ├── use-toast.ts
│   │   ├── useCourseFilters.ts
│   │   └── useScrollToTop.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/ (11 items)
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── CoursePage.tsx
│   │   ├── CoursesPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── Index.tsx
│   │   ├── LearningPathPage.tsx
│   │   ├── LearningPathsPage.tsx
│   │   ├── NotFound.tsx
│   │   ├── NotFoundPage.tsx
│   │   └── ProjectsPage.tsx
│   ├── types/
│   │   ├── learningPath.ts
│   │   └── project.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── README.md
├── bun.lockb
├── components.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 3. Technical Implementation Details

### Module Organization & Boundaries

- **`src/components/`**:  
  - **`ui/`**: Generic reusable UI components wrapping Radix UI primitives and custom styles (buttons, cards, dialogs, menus, inputs, etc.).  
  - **`course/`**: Domain-specific components for course pages (filter bars, hero sections, resource cards).  
  - **`learning-path/`**: Components related to learning path pages (hero, sidebar, grouped course sections).  
  - **`layout/`**: Layout components such as header, navigation, mobile menu, and search bar.

- **`src/pages/`**: Route-level React components representing pages (Home, Courses, Projects, Learning Paths, About, Contact, NotFound).

- **`src/data/`**: Static data modules organized by domain:  
  - `courses/`: Course data split by category (programming, kubernetes, iac, etc.).  
  - `projects/`: Project data similarly categorized.  
  - `learningPaths.ts`: Learning path definitions referencing courses.

- **`src/context/`**: React Context providers for global state:  
  - `SearchContext`: Manages search queries and results.  
  - `UserProgressContext`: Tracks user progress, favorites, and completion.

- **`src/hooks/`**: Custom React hooks for UI utilities and domain logic:  
  - `useCourseFilters`: Filtering logic for course resources.  
  - `useToast`: Toast notification management.  
  - `useIsMobile`: Responsive viewport detection.  
  - `useScrollToTop`: Scroll behavior on route change.

- **`src/lib/utils.ts`**: Utility functions, e.g., className concatenation (`cn`).

- **`src/types/`**: TypeScript interfaces defining domain models (`Course`, `LearningPath`, `Project`, `Resource`).

---

### Key Interfaces & Data Structures

- **Domain Models (`src/types/learningPath.ts` and `project.ts`):**  
  - `LearningPath`: id, title, description, icon, category, tags, courseIds, courseGroups, estimatedHours, isPopular, isNew, lastUpdated.  
  - `Course`: id, title, description, icon, difficulty, duration, category, topics, resources, prerequisites, tags, isNew, lastUpdated.  
  - `Project`: id, title, description, difficulty, category, objectives, deliverables, resources, tags, isPopular, isNew, lastUpdated.  
  - `Resource`: id, title, description, type, url, difficulty, duration, tags, isExternal, isInteractive.

- **UI State Types:**  
  - Filter states, collapsible section states, search queries, user progress data.

---

### Communication Patterns

- **Component Composition:** UI built by composing small reusable components (e.g., `CourseCard` inside `CourseGroupSection` inside `LearningPathPage`).

- **Context API:**  
  - Global state shared via React Context (`SearchContext`, `UserProgressContext`).

- **Props Drilling:** Data passed down via props from pages to components.

- **Hooks:** Encapsulate reusable logic and side effects.

---

### Entry Points & Main Execution Paths

- **`src/main.tsx`**: React app bootstrap, renders `<App />` into DOM.

- **`src/App.tsx`**: Root component, sets up React Router routes, context providers, and global UI components (toaster, tooltip).

- **Routing:**  
  - Routes defined for `/`, `/courses`, `/projects`, `/learning-paths`, `/learning-path/:pathId`, `/course/:courseId`, `/about`, `/contact`, and fallback 404.

- **Pages:**  
  - Each page component fetches or imports static data, manages local UI state, and renders composed UI components.

---

## 4. Development Patterns and Standards

### Code Organization Principles

- **Modular directory structure** separating UI components, pages, data, hooks, and contexts.

- **TypeScript for type safety** and domain modeling.

- **Component-based UI** with reusable, composable React functional components.

- **Use of React Context** for global state management.

- **Static data modules** for content, enabling easy updates and offline development.

- **Consistent styling** via Tailwind CSS and utility functions (`cn`).

---

### Testing Strategies & Coverage

- No explicit test files were provided; likely testing is done via unit tests or snapshot tests on components.

- Components are stateless or have minimal state, facilitating easy testing.

- Hooks encapsulate logic, enabling isolated testing.

---

### Error Handling & Logging

- UI components handle missing data gracefully (e.g., `LearningPathNotFound` component).

- `NotFound.tsx` logs errors on mount for 404 routes.

- No explicit global error boundaries shown, but React error boundaries could be added.

---

### Configuration Management Patterns

- **Environment variables** managed via Vite (`vite-env.d.ts`).

- **Build-time configs** in `vite.config.ts`, `tailwind.config.ts`, and TypeScript configs.

- **CI/CD pipeline** configured via GitHub Actions workflow (`.github/workflows/deploy.yml`).

---

## 5. Integration and Dependencies

### External Libraries & Their Purposes

- **React ecosystem:** `react`, `react-dom`, `react-router-dom` for SPA and routing.

- **UI primitives:** `@radix-ui/react-*` for accessible UI components (dialogs, menus, tooltips, etc.).

- **Iconography:** `lucide-react` for SVG icons.

- **Styling:** Tailwind CSS, `tailwind-merge`, `tailwindcss-animate`.

- **Data fetching & caching:** `@tanstack/react-query`.

- **Form handling:** `react-hook-form`.

- **Validation:** `zod`.

- **Notifications:** `sonner`.

- **Charts & UI widgets:** `recharts`, `react-day-picker`, `embla-carousel-react`.

- **Utilities:** `clsx`, `fuse.js` (fuzzy search), `date-fns`.

---

### Internal Modules & Contracts

- **`@/components/ui/`**: Shared UI component library.

- **`@/hooks/`**: Custom hooks for domain and UI logic.

- **`@/context/`**: React Context providers for global state.

- **`@/data/`**: Static data modules for courses, projects, learning paths.

- **`@/types/`**: TypeScript interfaces defining domain models.

---

### Build & Deployment Dependencies

- **Vite** as build tool with React SWC plugin.

- **PostCSS** and **Tailwind CSS** for styling.

- **GitHub Actions** workflow for CI/CD deployment to GitHub Pages.

---

## 6. Usage and Operational Guidance

### Getting Started

- Clone repository and install dependencies via `npm ci`.

- Run development server with `npm run dev` (configured on port 8080).

- Access app at `http://localhost:8080`.

---

### Development Workflow

- **Code organization:** Add new UI components under `src/components/` with domain-specific subfolders or `ui` for generic components.

- **Data updates:** Modify or add courses/projects/learning paths in `src/data/` modules.

- **Routing:** Add new pages under `src/pages/` and register routes in `src/App.tsx`.

- **Styling:** Use Tailwind CSS classes and utility `cn` for conditional styling.

- **State management:** Use React Context or hooks for shared state.

- **Testing:** Add unit or integration tests alongside components/hooks.

---

### Deployment

- Automated via GitHub Actions (`.github/workflows/deploy.yml`) deploying to GitHub Pages.

- Manual deployment scripts available in documentation (`docs/deployment-guide.md`).

- Environment variables (e.g., `VITE_API_URL`) configured via GitHub Secrets.

---

### Monitoring & Observability

- No explicit monitoring tools integrated; can be added via third-party services.

- Logging limited to console and error boundaries.

---

### Performance & Scalability

- Static data modules enable fast load times without backend calls.

- React Query used for caching if dynamic data fetching is added.

- Tailwind CSS and code splitting optimize bundle size.

- Responsive design via Tailwind and custom hooks (`useIsMobile`).

---

### Security Patterns

- Client-side SPA; no backend code exposed.

- Uses React Router for safe navigation.

- No direct API calls shown; if added, secure via environment variables and HTTPS.

---

## 7. Actionable Insights for Developers and AI Agents

- **To understand what this codebase does:**  
  - Focus on `src/pages/` for entry points and user flows.  
  - Explore `src/components/` for UI building blocks and domain-specific components.  
  - Review `src/data/` for static content shaping the learning platform.  
  - Check `src/context/` and `src/hooks/` for state management and logic encapsulation.

- **To work with or extend the codebase:**  
  - Add new courses or projects by extending data files in `src/data/courses` or `src/data/projects`.  
  - Create new UI components in `src/components/ui` or domain folders.  
  - Use existing hooks and context providers for stateful logic.  
  - Follow existing styling conventions with Tailwind CSS and `cn` utility.  
  - Use React Router for navigation and route management.  
  - Run and debug locally with Vite dev server on port 8080.

- **To maintain or improve:**  
  - Add tests for components and hooks.  
  - Implement error boundaries and logging for robustness.  
  - Integrate monitoring and analytics for operational insights.  
  - Modularize data further if dynamic backend integration is planned.  
  - Optimize bundle size with lazy loading and code splitting.

---

# Summary

**orca-tech-learn** is a well-structured React + TypeScript SPA for tech education, leveraging static data modules, a rich component library, and modern frontend tooling. It supports scalable content management, responsive UI, and extensible architecture suitable for continuous growth and feature addition.

---

#### Generated by [detailer](https://detailer.ginylil.com/)
