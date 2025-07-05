
export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  iconColor: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  color: string;
  gradient: string;
  category: 'Programming' | 'DevOps' | 'Cloud' | 'Security' | 'Data' | 'Web';
  prerequisites: string[];
  estimatedHours: number;
  resources: Resource[];
  tags: string[];
  isPopular?: boolean;
  isNew?: boolean;
  lastUpdated: Date;
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
  courseIds: string[]; // IDs of courses required for this path
  tags: string[];
  isPopular?: boolean;
  isNew?: boolean;
  lastUpdated: Date;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'Lab' | 'Tutorial' | 'Documentation' | 'Video' | 'Quiz' | 'Project';
  url: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  estimatedMinutes: number;
  tags: string[];
  prerequisites: string[];
  isExternal: boolean;
  thumbnail?: string;
  author?: string;
  rating?: number;
  lastUpdated: Date;
  isInteractive?: boolean;
}

export interface UserProgress {
  userId: string;
  completedResources: string[];
  favorites: string[];
  currentPath?: string;
  lastAccessed: Date;
  totalHours: number;
  achievements: Achievement[];
  preferences: UserPreferences;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: Date;
}

export interface UserPreferences {
  theme: 'dark' | 'light';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  interests: string[];
  notifications: boolean;
}

export interface SearchFilters {
  difficulty?: string[];
  type?: string[];
  duration?: string;
  category?: string[];
}

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'path' | 'course';
  url: string;
  tags: string[];
}
