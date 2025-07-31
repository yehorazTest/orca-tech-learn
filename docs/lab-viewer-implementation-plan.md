
# Lab Viewer Implementation Plan - Frontend Only

## Overview
Transform the current "Start Lab" external link functionality into an integrated lab viewer within our website. Users will click "View Lab" and see lab content fetched from our backend API in a dedicated lab viewer interface.

## Current State Analysis
- **ResourceCard Component**: Currently shows "Start lab" button that redirects to external GitHub URLs
- **Backend Integration**: App fetches course data from `/api/v1/data` endpoint
- **Lab Data**: Lab URLs point to GitHub repositories with markdown files and code examples

## Implementation Plan

### Phase 1: Core Infrastructure

#### 1.1 Type Definitions Updates
**File**: `src/types/learningPath.ts`
- Add `LabContent` interface for backend response structure
- Add `LabFile` interface for individual files
- Extend `Resource` type with lab content properties

#### 1.2 API Service Extension  
**File**: `src/services/apiService.ts`
- Add `getLabContent(labFullName: string)` method
- Implement endpoint call to `/api/v1/lab/$labFullName/content`
- Handle caching and error states

#### 1.3 Routing Setup
**File**: `src/App.tsx`
- Add new route `/lab/:labFullName` for lab viewer page

### Phase 2: Lab Viewer Components

#### 2.1 Lab Viewer Page
**File**: `src/pages/LabViewerPage.tsx`
- Main page component for lab viewing
- Handle lab content fetching using React Query
- Loading and error states
- Breadcrumb navigation back to course

#### 2.2 File Explorer Component
**File**: `src/components/lab/FileExplorer.tsx`
- Tree-like structure for lab files and folders
- Collapsible directories
- File type icons and syntax highlighting indicators
- Search functionality for files

#### 2.3 File Content Viewer
**File**: `src/components/lab/FileContentViewer.tsx`  
- Display selected file content
- Markdown rendering for README and .md files
- Syntax highlighting for code files
- Copy-to-clipboard functionality
- Download individual files

#### 2.4 Lab Navigation
**File**: `src/components/lab/LabNavigation.tsx`
- Navigation between lab files
- Progress indicator
- "Next/Previous" file navigation
- Quick access to important files (README, instructions)

### Phase 3: Enhanced Features

#### 3.1 Lab Instructions Panel
**File**: `src/components/lab/LabInstructionsPanel.tsx`
- Dedicated panel for lab instructions (usually from README)
- Step-by-step navigation within instructions
- Collapsible sidebar design
- Progress tracking for instruction steps

#### 3.2 Code Highlighting & Tools
**File**: `src/components/lab/CodeViewer.tsx`
- Syntax highlighting using `react-syntax-highlighter`
- Line numbers
- Copy code blocks
- Code language detection
- Search within code files

#### 3.3 Lab Header & Info
**File**: `src/components/lab/LabHeader.tsx`
- Lab title and description
- Difficulty level and estimated time
- Tags and prerequisites
- Link to original GitHub repository
- Download entire lab as ZIP

### Phase 4: Integration & Updates

#### 4.1 Resource Card Updates
**File**: `src/components/course/ResourceCard.tsx`
- Change "Start lab" button to "View Lab"  
- Update click handler to navigate to `/lab/:labFullName`
- Extract lab name from GitHub URL for routing
- Keep external link as fallback option

#### 4.2 Backend Data Context Updates
**File**: `src/context/BackendDataContext.tsx`
- Add lab content caching
- Implement lab content query hooks

### Phase 5: UI/UX Enhancements

#### 5.1 Responsive Design
- Mobile-friendly file explorer
- Collapsible sidebar for mobile
- Touch-friendly navigation controls

#### 5.2 Dark/Light Theme Support  
- Syntax highlighting theme matching
- File explorer theming
- Markdown content theming

#### 5.3 Accessibility
- Keyboard navigation for file explorer
- Screen reader support
- Focus management
- High contrast mode support

## Technical Implementation Details

### Required Dependencies
```bash
# For syntax highlighting
npm install react-syntax-highlighter @types/react-syntax-highlighter

# For markdown rendering  
npm install react-markdown remark-gfm

# For file tree visualization
npm install react-tree-view (or build custom)

# For copy-to-clipboard
npm install react-copy-to-clipboard
```

### API Integration Pattern
```typescript
// Expected backend response structure
interface LabContentResponse {
  labName: string;
  description: string;
  files: LabFile[];
  metadata: {
    lastUpdated: string;
    totalFiles: number;
    mainInstruction: string; // path to main README
  };
}

interface LabFile {
  path: string;
  name: string;
  type: 'file' | 'directory';
  content?: string; // for files
  children?: LabFile[]; // for directories
  size: number;
  language?: string; // detected programming language
}
```

### URL Structure
- Lab viewer: `/lab/{labFullName}`  
- Lab name extraction from GitHub URLs:
  - `https://github.com/study-ORCATech-cloud/docker-labs/tree/main/Registry/LAB01-Registry-Setup` 
  - Becomes: `docker-labs/Registry/LAB01-Registry-Setup`

### File Organization
```
src/
├── pages/
│   └── LabViewerPage.tsx
├── components/
│   └── lab/
│       ├── FileExplorer.tsx
│       ├── FileContentViewer.tsx
│       ├── LabNavigation.tsx
│       ├── LabInstructionsPanel.tsx
│       ├── CodeViewer.tsx
│       └── LabHeader.tsx
├── hooks/
│   ├── useLabContent.ts
│   └── useLabNavigation.ts
└── types/
    └── lab.ts
```

### Error Handling Strategy
- Graceful fallback to external GitHub links if lab content fails to load
- Retry mechanisms for network failures  
- Clear error messages for users
- Loading states with skeletons

### Performance Considerations
- Lazy loading of file contents
- Virtual scrolling for large file lists
- Caching of frequently accessed labs
- Code splitting for lab viewer components

## Success Metrics
- Reduced bounce rate from lab pages
- Increased time spent on lab content
- Higher completion rates for labs
- Reduced external link clicks
- Improved user engagement with course content

## Future Enhancements (Phase 6+)
- Lab progress tracking and bookmarking
- Interactive code execution (where applicable)
- Lab completion certificates
- Social features (comments, ratings)
- Offline lab content caching
- Integration with user progress system
