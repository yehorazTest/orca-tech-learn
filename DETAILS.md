# DETAILS.md

🔍 **Powered by [Detailer](https://detailer.ginylil.com)** - Context-engineered repository analysis



---

## 1. Project Overview

### Purpose & Domain
**orca-tech-learn** is a comprehensive, modular React + TypeScript Single Page Application (SPA) designed as an educational platform focused on technology learning paths, courses, and projects. It addresses the challenge of organizing, delivering, and tracking technical learning content in a structured, user-friendly manner.

### Problem Solved
- Centralizes curated technical learning content (courses, learning paths, projects) with rich metadata.
- Provides interactive UI for browsing, filtering, and tracking progress.
- Supports advanced search and filtering capabilities.
- Enables scalable content management with static data modules.
- Facilitates user progress tracking and personalized learning experiences.
- Automates deployment and continuous integration for rapid updates.

### Target Users & Use Cases
- **Learners** seeking structured technology education (DevOps, Kubernetes, Python, Cloud, etc.).
- **Educators and Content Managers** curating and updating course and project content.
- **Developers and Contributors** extending platform features or content.
- Use cases include browsing courses, filtering by difficulty or topic, tracking progress, and accessing project exercises.

### Core Business Logic & Domain Models
- **Learning Paths**: Curated sequences of courses grouped into stages.
- **Courses**: Individual educational units with resources (labs, videos, docs).
- **Projects**: Practical exercises with objectives and deliverables.
- **Resources**: Learning materials linked to courses/projects.
- **User Progress**: Tracking completion, favorites, preferences.
- **Search & Filtering**: Across learning paths, courses, and projects.

---

## 2. Architecture and Structure

### High-Level Architecture
- **Frontend SPA** built with React + TypeScript.
- **Component-Based UI Architecture**: Modular React components organized by domain (course, learning-path, project, ui).
- **Static Data Layer**: Course, project, and learning path data defined as TypeScript constants.
- **State Management**: React Context + custom hooks for user progress and search.
- **Routing**: React Router for client-side navigation.
- **Styling**: Tailwind CSS with custom theming and utility classes.
- **Build & Deployment**: Vite as build tool, GitHub Actions for CI/CD deploying to GitHub Pages.

### Complete Repository Structure
```
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── docs/ (41 files)
│   ├── advanced-topics/
│   ├── architecture-development/
│   ├── content-management/
│   ├── contributor-community/
│   ├── maintenance-operations/
│   ├── technical-operational/
│   ├── user-feature/
│   ├── README.md
│   ├── deployment-guide.md
│   ├── local-development.md
│   └── troubleshooting.md
├── public/
│   ├── lovable-uploads/
│   ├── 404.html
│   ├── CNAME
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/
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
│   │   └── ui/ (52 files)
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
│   ├── data/
│   │   ├── courses/
│   │   │   ├── cicd/
│   │   │   ├── expert/
│   │   │   ├── cicd.ts
│   │   │   ├── cloud.ts
│   │   │   ├── docker.ts
│   │   │   ├── expert.ts
│   │   │   ├── git.ts
│   │   │   ├── iac.ts
│   │   │   ├── index.ts
│   │   │   ├── kubernetes-beginner.ts
│   │   │   ├── kubernetes-intermediate.ts
│   │   │   ├── kubernetes-professional.ts
│   │   │   ├── kubernetes.ts
│   │   │   ├── programming.ts
│   │   │   ├── sysadmin.ts
│   │   │   └── web.ts
│   │   ├── projects/
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
│   ├── pages/
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
├── DETAILS.md
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
- **`src/components/`**: React UI components organized by domain:
  - `course/`: Course-specific UI components (filter bar, hero, resource cards).
  - `learning-path/`: Components for learning path UI (course groups, hero, sidebar).
  - `layout/`: Layout components (header, navigation, mobile menu, search bar).
  - `ui/`: Generic UI primitives and design system components (buttons, cards, dialogs, accordions, badges, etc.).
- **`src/context/`**: React Context providers for global state:
  - `SearchContext.tsx`: Search state and logic.
  - `UserProgressContext.tsx`: User progress tracking and persistence.
- **`src/data/`**: Static data modules defining domain content:
  - `courses/`: Course definitions grouped by category and expertise level.
  - `projects/`: Project definitions by category.
  - `learningPaths.ts`: Learning path definitions.
- **`src/hooks/`**: Custom React hooks encapsulating reusable logic:
  - `useCourseFilters.ts`: Filtering logic for courses/resources.
  - `useToast.ts`: Toast notification management.
  - `useScrollToTop.ts`: Scroll behavior on route change.
  - `use-mobile.tsx`: Responsive detection.
- **`src/lib/utils.ts`**: Utility functions (e.g., class name merging).
- **`src/pages/`**: React page components mapped to routes.
- **`src/types/`**: TypeScript interfaces defining domain models (`Course`, `LearningPath`, `Project`, `Resource`, etc.).

### Key Interfaces & Data Models
- **Course**: Metadata, topics, resources, difficulty, duration, tags.
- **Resource**: Learning materials with type, URL, difficulty, duration.
- **LearningPath**: Aggregates courses into groups/stages with metadata.
- **Project**: Practical exercises with objectives, deliverables, and resources.
- **UserProgress**: Tracks completion, favorites, preferences.
- **SearchItem**: Represents searchable entities (courses, paths).

### Communication Patterns
- React Context + Hooks for state sharing.
- Props drilling for component data flow.
- Static data imported directly into UI components.
- React Router for navigation and route parameters.

---

## 4. Development Patterns and Standards

### Code Organization Principles
- **Modularization** by feature/domain.
- **TypeScript** for type safety and interface contracts.
- **React Functional Components** with hooks.
- **Component Composition**: Small reusable UI components assembled into complex views.
- **Separation of Concerns**: Data, UI, state management, and routing separated.

### Testing Strategies
- No explicit tests provided in analyzed files.
- Likely relies on type safety and manual testing.
- Potential for unit tests on hooks and components.

### Error Handling & Logging
- UI components handle missing data gracefully (e.g., `LearningPathNotFound`).
- No explicit logging or error boundary components visible.
- Context providers handle state updates with safe defaults.

### Configuration Management
- Environment-specific configs managed via Vite (`vite.config.ts`).
- Tailwind CSS theming via `tailwind.config.ts`.
- Static data centralized in `src/data/`.
- Build and deployment configured via GitHub Actions (`.github/workflows/deploy.yml`).

---

## 5. Integration and Dependencies

### External Libraries
- **React ecosystem**: `react`, `react-dom`, `react-router-dom`.
- **UI Primitives**: `@radix-ui/react-*` for accessible UI components.
- **Styling**: Tailwind CSS, `tailwind-merge`, `tailwindcss-animate`.
- **Icons**: `lucide-react`.
- **State & Data**: `@tanstack/react-query` for data fetching and caching.
- **Build Tools**: Vite, SWC plugin.
- **Utilities**: `clsx`, `date-fns`, `zod`, `fuse.js` for class management, date handling, validation, and fuzzy search.
- **Notifications**: `sonner` for toast notifications.

### Internal Integrations
- **Static Data**: Imported from `src/data/` into UI components.
- **Context Providers**: Shared state via React Context.
- **Custom Hooks**: Encapsulate reusable logic.
- **Routing**: React Router manages navigation and dynamic routes.
- **CI/CD**: GitHub Actions automate build and deployment to GitHub Pages.

---

## 6. Usage and Operational Guidance

### Getting Started
- Clone repository.
- Install dependencies via `npm ci` or `yarn install`.
- Run development server: `npm run dev` (uses Vite).
- Access app at `http://localhost:3000`.

### Development Workflow
- Add or modify static data in `src/data/` for courses, projects, or learning paths.
- Create or update UI components in `src/components/`.
- Use React Context and hooks for shared state.
- Follow Tailwind CSS conventions for styling.
- Use provided documentation in `docs/` for advanced topics, deployment, and troubleshooting.

### Deployment
- Automated via GitHub Actions (`.github/workflows/deploy.yml`).
- Deploys to GitHub Pages on push to `main`.
- Uses Vite build output (`dist/`).
- Configure custom domain via `public/CNAME`.

### Performance & Scalability
- Static data modules enable fast startup and no runtime data fetching.
- React Query supports caching and efficient data updates.
- Tailwind CSS utility classes optimize styling performance.
- Modular component architecture supports scalable feature development.

### Security Considerations
- No backend code; security concerns limited to frontend.
- Environment variables and secrets managed via GitHub Actions.
- User data stored locally (e.g., progress in localStorage).

### Monitoring & Observability
- No explicit monitoring tools integrated.
- Logging and error tracking can be added via React error boundaries or external services.

---

# Summary

The **orca-tech-learn** project is a well-structured React + TypeScript SPA for delivering curated technical education content. It uses a modular architecture with static data modules, reusable UI components, React Context for state management, and Tailwind CSS for styling. The project is optimized for scalability, maintainability, and developer onboarding, supported by comprehensive documentation and automated deployment pipelines.

---

# Appendix: Key Paths and Files

| Path | Description |
|-------|-------------|
| `src/components/layout/Header.tsx` | Main header with navigation and search |
| `src/components/course/ResourcesSection.tsx` | Course resource listing with filtering |
| `src/components/learning-path/CourseGroupSection.tsx` | Collapsible course groups in learning paths |
| `src/context/SearchContext.tsx` | Search state and logic provider |
| `src/context/UserProgressContext.tsx` | User progress tracking provider |
| `src/data/courses/` | Static course data modules |
| `src/data/projects/` | Static project data modules |
| `src/data/learningPaths.ts` | Learning path definitions |
| `src/hooks/useCourseFilters.ts` | Filtering logic for courses/resources |
| `src/pages/` | React page components for routing |
| `.github/workflows/deploy.yml` | CI/CD pipeline for deployment |
| `vite.config.ts` | Vite build configuration |
| `tailwind.config.ts` | Tailwind CSS theming and config |

---

# Recommendations for New Developers

- Familiarize with React + TypeScript and Tailwind CSS.
- Review `docs/architecture-development` for system overview.
- Explore `src/data/` to understand content structure.
- Use `src/hooks/` for reusable logic patterns.
- Follow component patterns in `src/components/ui` for UI consistency.
- Leverage React Context providers for shared state.
- Test changes locally with `npm run dev` before pushing.
- Consult `docs/deployment-guide.md` for deployment details.

---

*This DETAILS.md is designed to enable AI agents and developers to rapidly comprehend the orca-tech-learn codebase, its purpose, architecture, and operational practices.*
