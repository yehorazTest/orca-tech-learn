
import { Course } from '../../types/learningPath';

export const webCourses: Course[] = [
  {
    id: 'react-beginner',
    title: 'React Development - Beginner',
    description: 'React fundamentals including components, state management, and basic React concepts',
    longDescription: 'Learn React from the ground up. Master components, JSX, state, props, event handling, and basic React patterns for building interactive user interfaces.',
    icon: '⚛️',
    iconColor: 'text-cyan-400',
    difficulty: 'Beginner',
    duration: '6-8 weeks',
    color: 'cyan',
    gradient: 'from-cyan-500 to-blue-500',
    category: 'Web',
    prerequisites: ['Basic JavaScript knowledge', 'HTML/CSS fundamentals'],
    estimatedHours: 75,
    tags: ['React', 'Components', 'JSX', 'State', 'Props'],
    isNew: true,
    lastUpdated: new Date('2024-01-25'),
    resources: []
  },
  {
    id: 'react-intermediate',
    title: 'React Development - Intermediate',
    description: 'Advanced React concepts including hooks, context, routing, and modern React patterns',
    longDescription: 'Advance your React skills with hooks, context API, React Router, form handling, performance optimization, and modern React development patterns.',
    icon: '⚛️',
    iconColor: 'text-cyan-500',
    difficulty: 'Intermediate',
    duration: '8-10 weeks',
    color: 'cyan',
    gradient: 'from-cyan-600 to-blue-600',
    category: 'Web',
    prerequisites: ['React Beginner'],
    estimatedHours: 95,
    tags: ['React Hooks', 'Context API', 'React Router', 'Performance'],
    lastUpdated: new Date('2024-01-25'),
    resources: []
  },
  {
    id: 'react-professional',
    title: 'React Development - Professional',
    description: 'Enterprise React development with advanced patterns, testing, and scalable architectures',
    longDescription: 'Master enterprise-level React development with advanced patterns, comprehensive testing, state management libraries, and scalable application architectures.',
    icon: '⚛️',
    iconColor: 'text-cyan-600',
    difficulty: 'Advanced',
    duration: '10-12 weeks',
    color: 'cyan',
    gradient: 'from-cyan-700 to-blue-700',
    category: 'Web',
    prerequisites: ['React Intermediate'],
    estimatedHours: 115,
    tags: ['Advanced Patterns', 'Testing', 'State Management', 'Architecture'],
    lastUpdated: new Date('2024-01-25'),
    resources: []
  }
];
