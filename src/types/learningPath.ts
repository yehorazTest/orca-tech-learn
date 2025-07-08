
export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'article' | 'lab' | 'quiz' | 'project';
  url: string;
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  estimatedMinutes: number;
  isCompleted?: boolean;
}

export interface ResourceGroup {
  title: string;
  description: string;
  resources: Resource[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  level: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional';
  duration: string;
  icon: string;
  iconColor: string;
  color: string;
  gradient: string;
  category: string;
  isPopular?: boolean;
  isNew?: boolean;
  estimatedHours: number;
  topics: string[];
  prerequisites: string[];
  tags: string[];
  resources?: Resource[];
  resourceGroups?: ResourceGroup[];
  lastUpdated: Date;
}

export interface CourseGroup {
  title: string;
  description: string;
  courseIds: string[];
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
  courseGroups?: CourseGroup[];
  tags: string[];
  isPopular?: boolean;
  isNew?: boolean;
  lastUpdated: Date;
}
