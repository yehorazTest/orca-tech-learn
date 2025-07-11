
import { Course } from '../../../types/learningPath';

export const cicdExpertCourses: Course[] = [
  {
    id: 'github-actions-expert',
    title: 'GitHub Actions Expert',
    description: 'Advanced CI/CD with GitHub Actions including custom workflows, marketplace actions, and enterprise automation',
    longDescription: 'Master GitHub Actions with advanced workflow patterns, custom action development, self-hosted runners, security best practices, and enterprise-scale automation strategies.',
    icon: '🚀',
    iconColor: 'text-gray-400',
    level: 'Advanced',
    difficulty: 'Advanced',
    duration: '6-8 weeks',
    color: 'gray',
    gradient: 'from-gray-500 to-slate-500',
    category: 'DevOps',
    topics: ['Advanced Workflows', 'Custom Actions', 'Self-hosted Runners', 'Enterprise Automation'],
    prerequisites: ['Git fundamentals', 'CI/CD basics'],
    estimatedHours: 70,
    tags: ['GitHub Actions', 'CI/CD', 'Automation', 'Custom Actions', 'Enterprise'],
    lastUpdated: new Date('2024-01-25'),
    resources: []
  },
  {
    id: 'jenkins-expert',
    title: 'Jenkins Expert',
    description: 'Enterprise Jenkins mastery with pipeline as code, plugin development, and scalable CI/CD architectures',
    longDescription: 'Deep dive into Jenkins with advanced pipeline development, custom plugin creation, distributed builds, security configurations, and enterprise CI/CD architectures.',
    icon: '🔧',
    iconColor: 'text-blue-600',
    level: 'Advanced',
    difficulty: 'Advanced',
    duration: '8-10 weeks',
    color: 'blue',
    gradient: 'from-blue-600 to-indigo-600',
    category: 'DevOps',
    topics: ['Pipeline as Code', 'Plugin Development', 'Distributed Builds', 'Enterprise Architecture'],
    prerequisites: ['CI/CD fundamentals', 'Groovy basics'],
    estimatedHours: 90,
    tags: ['Jenkins', 'Pipeline as Code', 'Plugins', 'Distributed Builds', 'Enterprise'],
    lastUpdated: new Date('2024-01-25'),
    resources: []
  }
];
