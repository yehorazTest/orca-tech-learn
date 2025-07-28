
import { RoadmapItem } from '../../types/learningPath';
import { toolsRoadmap } from './tools';
import { programmingRoadmap } from './programming';

export const roadmapItems: RoadmapItem[] = [
  ...toolsRoadmap,
  ...programmingRoadmap
];

export const roadmapCategories = [
  { id: 'tools', name: 'Tools & Infrastructure', count: toolsRoadmap.length },
  { id: 'programming', name: 'Programming', count: programmingRoadmap.length },
  { id: 'security', name: 'Security', count: 0 },
  { id: 'ai-ml', name: 'AI/ML', count: 0 },
  { id: 'mobile', name: 'Mobile Development', count: 0 },
  { id: 'emerging', name: 'Emerging Technologies', count: 0 }
];
