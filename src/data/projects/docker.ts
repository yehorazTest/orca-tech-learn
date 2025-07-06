
import { Project } from '../../types/project';

export const dockerProjects: Project[] = [
  {
    id: 'docker-multi-container',
    title: 'Multi-Container Web Application',
    description: 'Deploy a full-stack application using Docker Compose with multiple services',
    longDescription: 'Create a complete multi-container application setup with frontend, backend, database, and reverse proxy using Docker Compose. Learn container orchestration and service communication.',
    difficulty: 'Intermediate',
    estimatedHours: 10,
    category: 'Docker',
    tags: ['docker-compose', 'multi-container', 'microservices', 'nginx', 'database'],
    prerequisites: ['Docker basics', 'Web development fundamentals', 'Basic networking'],
    objectives: [
      'Master Docker Compose for multi-container apps',
      'Configure service communication',
      'Implement reverse proxy with Nginx',
      'Set up persistent data volumes'
    ],
    deliverables: [
      'Docker Compose configuration',
      'Dockerfiles for each service',
      'Nginx reverse proxy setup',
      'Data persistence implementation'
    ],
    resources: [
      {
        id: 'docker-compose-docs',
        title: 'Docker Compose Documentation',
        description: 'Official Docker Compose documentation',
        type: 'Documentation',
        url: 'https://docs.docker.com/compose/',
        isExternal: true
      }
    ],
    isPopular: true,
    lastUpdated: new Date('2024-01-18')
  },
  {
    id: 'docker-optimization',
    title: 'Docker Image Optimization',
    description: 'Optimize Docker images for production with multi-stage builds and security',
    longDescription: 'Learn advanced Docker techniques including multi-stage builds, image layer optimization, security scanning, and creating minimal production-ready images.',
    difficulty: 'Advanced',
    estimatedHours: 6,
    category: 'Docker',
    tags: ['optimization', 'multi-stage', 'security', 'production', 'alpine'],
    prerequisites: ['Docker fundamentals', 'Linux basics', 'Security awareness'],
    objectives: [
      'Implement multi-stage Docker builds',
      'Minimize image size and layers',
      'Apply security best practices',
      'Create production-ready images'
    ],
    deliverables: [
      'Optimized Dockerfiles',
      'Security scanning implementation',
      'Image size comparison report',
      'Production deployment guide'
    ],
    resources: [
      {
        id: 'docker-best-practices',
        title: 'Docker Best Practices',
        description: 'Docker official best practices guide',
        type: 'Documentation',
        url: 'https://docs.docker.com/develop/dev-best-practices/',
        isExternal: true
      }
    ],
    lastUpdated: new Date('2024-01-22')
  }
];
