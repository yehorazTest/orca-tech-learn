export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'lab' | 'article' | 'video' | 'other';
  url: string;
  tags: string[];
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  duration?: string;
  rating?: number;
  estimatedMinutes?: number;
  prerequisites?: string[];
  isExternal?: boolean;
  lastUpdated?: Date;
  isInteractive?: boolean;
}

export interface ResourceCategory {
  title: string;
  resources: Resource[];
  defaultOpen?: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional';
  duration: string;
  topics: string[];
  prerequisites: string[];
  tags: string[];
  resources: Resource[];
  resourceCategories?: ResourceCategory[];
  // Additional properties needed by components
  icon?: string;
  iconColor?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional';
  color?: string;
  gradient?: string;
  category?: string;
  isPopular?: boolean;
  isNew?: boolean;
  estimatedHours?: number;
  lastUpdated?: Date;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  iconColor: string;
  gradient: string;
  category: string;
  estimatedHours: number;
  courseIds: string[];
  courseGroups?: Array<{
    title: string;
    description: string;
    courseIds: string[];
  }>;
  tags: string[];
  isPopular?: boolean;
  isNew?: boolean;
  lastUpdated: Date;
}

// Search item interface for individual search results
export interface SearchItem {
  id: string;
  title: string;
  description: string;
  type: 'path' | 'course';
  url: string;
  tags: string[];
}

// Export additional types that are imported by other files
export interface SearchFilters {
  category?: string;
  difficulty?: string;
  duration?: string;
  tags?: string[];
}

export interface SearchResult {
  courses: Course[];
  learningPaths: LearningPath[];
  totalResults: number;
}

export interface UserProgress {
  userId: string;
  completedCourses: string[];
  inProgressCourses: string[];
  completedResources: string[];
  achievements: string[];
  totalHoursSpent: number;
  lastActivity: Date;
  favorites: string[];
}
