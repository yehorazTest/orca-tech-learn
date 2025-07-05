
import { LearningPath } from '../types/learningPath';

export const learningPaths: LearningPath[] = [
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    description: 'Complete learning path to become a DevOps Engineer with containerization, orchestration, and automation skills',
    longDescription: 'Master the complete DevOps workflow from basic version control to enterprise-level automation. This path covers Git, Docker, Kubernetes, CI/CD pipelines, infrastructure as code, monitoring, and security best practices.',
    icon: '🔧',
    iconColor: 'text-blue-400',
    gradient: 'from-blue-500 to-cyan-500',
    category: 'DevOps',
    estimatedHours: 240,
    courseIds: ['devops-beginner', 'devops-intermediate', 'devops-professional'],
    tags: ['Docker', 'Kubernetes', 'CI/CD', 'Infrastructure', 'Automation'],
    isPopular: true,
    lastUpdated: new Date('2024-01-15')
  },
  {
    id: 'backend-developer',
    title: 'Backend Developer',
    description: 'Comprehensive backend development path covering both Python and Java ecosystems',
    longDescription: 'Become a versatile backend developer with expertise in both Python and Java. Learn web frameworks, database design, API development, microservices architecture, and deployment strategies.',
    icon: '⚙️',
    iconColor: 'text-purple-400',
    gradient: 'from-purple-500 to-pink-500',
    category: 'Programming',
    estimatedHours: 270,
    courseIds: ['python-beginner', 'python-intermediate', 'java-intermediate', 'java-professional'],
    tags: ['Python', 'Java', 'APIs', 'Databases', 'Microservices'],
    isNew: true,
    lastUpdated: new Date('2024-01-20')
  },
  {
    id: 'cloud-architect',
    title: 'Cloud Architect',
    description: 'End-to-end cloud architecture path with DevOps integration and enterprise solutions',
    longDescription: 'Design and implement scalable cloud solutions. This comprehensive path combines cloud computing fundamentals with DevOps practices to create enterprise-ready architectures.',
    icon: '🏗️',
    iconColor: 'text-cyan-400',
    gradient: 'from-cyan-500 to-blue-500',
    category: 'Cloud',
    estimatedHours: 290,
    courseIds: ['cloud-beginner', 'cloud-intermediate', 'cloud-professional', 'devops-intermediate'],
    tags: ['Cloud Architecture', 'AWS', 'Azure', 'DevOps', 'Enterprise'],
    isPopular: true,
    lastUpdated: new Date('2024-01-05')
  },
  {
    id: 'fullstack-developer',
    title: 'Full-Stack Developer',
    description: 'Complete full-stack development journey with Python backend and cloud deployment',
    longDistance: 'Master both frontend and backend development with a focus on Python web frameworks and cloud deployment. Perfect for building modern web applications.',
    icon: '🌐',
    iconColor: 'text-emerald-400',
    gradient: 'from-emerald-500 to-teal-500',
    category: 'Programming',
    estimatedHours: 205,
    courseIds: ['python-beginner', 'python-intermediate', 'python-professional', 'cloud-beginner'],
    tags: ['Python', 'Web Development', 'Full-Stack', 'Cloud'],
    lastUpdated: new Date('2024-01-20')
  }
];
