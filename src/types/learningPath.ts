export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'lab' | 'article' | 'video' | 'other';
  url: string;
  tags: string[];
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
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  courses: Course[];
}
