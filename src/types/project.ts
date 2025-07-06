
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedHours: number;
  category: 'Python' | 'Docker' | 'Kubernetes' | 'CI/CD' | 'IaC';
  tags: string[];
  prerequisites: string[];
  objectives: string[];
  deliverables: string[];
  resources: ProjectResource[];
  isPopular?: boolean;
  isNew?: boolean;
  lastUpdated: Date;
}

export interface ProjectResource {
  id: string;
  title: string;
  description: string;
  type: 'Repository' | 'Documentation' | 'Tutorial' | 'Reference';
  url: string;
  isExternal: boolean;
}

export interface ProjectFilters {
  difficulty?: string[];
  category?: string[];
  duration?: string;
}
