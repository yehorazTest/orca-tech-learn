
export interface LearningPath {
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
  completionRate?: number;
  studentsEnrolled?: number;
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
  resource: Resource;
  score?: number;
  highlights?: string[];
}
