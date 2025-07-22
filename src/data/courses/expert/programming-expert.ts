
import { Course } from '../../../types/learningPath';

export const programmingExpertCourses: Course[] = [
  {
    id: 'java-cloud-expert',
    title: 'Java Cloud Expert',
    description: 'Enterprise Java development for cloud platforms with Spring Cloud, microservices, and cloud-native patterns',
    longDescription: 'Master Java for cloud environments with Spring Cloud, microservices architecture, cloud deployment patterns, containerization, and enterprise cloud-native development.',
    icon: '☕',
    iconColor: 'text-orange-600',
    level: 'Advanced',
    difficulty: 'Advanced',
    duration: '10-12 weeks',
    color: 'orange',
    gradient: 'from-orange-600 to-red-600',
    category: 'Programming',
    topics: ['Spring Cloud', 'Microservices Architecture', 'Cloud Deployment', 'Enterprise Development'],
    prerequisites: ['Java Professional', 'Cloud Intermediate'],
    estimatedHours: 115,
    tags: ['Java', 'Spring Cloud', 'Microservices', 'Cloud Native', 'Enterprise'],
    isUnderMaintenance: true,
    lastUpdated: new Date('2024-01-25'),
    resources: []
  },
  {
    id: 'sql-expert',
    title: 'SQL Expert',
    description: 'Advanced database design, query optimization, and enterprise database management',
    longDescription: 'Master advanced SQL with complex query optimization, database design patterns, performance tuning, stored procedures, and enterprise database management strategies.',
    icon: '🗄️',
    iconColor: 'text-blue-500',
    level: 'Advanced',
    difficulty: 'Advanced',
    duration: '8-10 weeks',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
    category: 'Programming',
    topics: ['Query Optimization', 'Database Design', 'Performance Tuning', 'Enterprise Management'],
    prerequisites: ['Database fundamentals', 'SQL basics'],
    estimatedHours: 85,
    tags: ['SQL', 'Database Design', 'Query Optimization', 'Performance', 'Enterprise'],
    isUnderMaintenance: true,
    lastUpdated: new Date('2024-01-25'),
    resources: []
  }
];
