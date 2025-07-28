
import { RoadmapItem } from '../../types/learningPath';
import { toolsRoadmap } from './tools';

export const roadmapItems: RoadmapItem[] = [
  ...toolsRoadmap
];

export const roadmapCategories = [
  { id: 'tools', name: 'Tools & Infrastructure', count: toolsRoadmap.length },
  { id: 'programming', name: 'Advanced Programming', count: 0 },
  { id: 'security', name: 'Security', count: 0 },
  { id: 'ai-ml', name: 'AI/ML', count: 0 },
  { id: 'mobile', name: 'Mobile Development', count: 0 },
  { id: 'emerging', name: 'Emerging Technologies', count: 0 }
];
