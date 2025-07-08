
import { Course } from '../../types/learningPath';

export const dockerCourses: Course[] = [
  {
    id: 'docker-beginner',
    title: 'Docker Beginner',
    description: 'Learn containerization fundamentals with Docker, including images, containers, and basic networking',
    longDescription: 'Master the fundamentals of containerization with Docker. Learn how to create, manage, and deploy containers, work with Docker images, and understand basic networking concepts. Perfect for developers new to containerization.',
    level: 'Beginner',
    duration: '40 hours',
    topics: [
      'Container fundamentals',
      'Docker installation and setup',
      'Working with Docker images',
      'Container lifecycle management',
      'Basic Docker networking',
      'Data persistence with volumes',
      'Dockerfile basics',
      'Docker CLI commands'
    ],
    prerequisites: ['Basic command line knowledge', 'Understanding of software development'],
    tags: ['Docker', 'Containers', 'DevOps', 'Fundamentals'],
    resources: [
      {
        id: 'docker-arch',
        title: 'Docker Architecture Overview',
        description: 'Understanding Docker daemon, client, and registry architecture',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/docker-labs/Basics/LAB01-Docker-Architecture',
        tags: ['architecture', 'fundamentals'],
        estimatedMinutes: 45
      },
      {
        id: 'first-container',
        title: 'Your First Docker Container',
        description: 'Create and run your first Docker container',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/docker-labs/Basics/LAB02-First-Container',
        tags: ['hands-on', 'beginner'],
        estimatedMinutes: 30
      },
      {
        id: 'docker-images',
        title: 'Working with Docker Images',
        description: 'Learn to pull, build, and manage Docker images',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/docker-labs/Basics/LAB03-Docker-Images',
        tags: ['images', 'management'],
        estimatedMinutes: 60
      }
    ],
    icon: '🐳',
    iconColor: 'text-blue-400',
    difficulty: 'Beginner',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
    category: 'Containerization',
    estimatedHours: 40,
    lastUpdated: new Date('2024-01-25')
  },
  {
    id: 'docker-intermediate',
    title: 'Docker Intermediate',
    description: 'Advanced Docker concepts including multi-stage builds, Docker Compose, and container orchestration basics',
    longDescription: 'Take your Docker skills to the next level with advanced containerization concepts. Learn multi-stage builds, Docker Compose for multi-container applications, networking strategies, and security best practices.',
    level: 'Intermediate',
    duration: '50 hours',
    topics: [
      'Multi-stage Dockerfile builds',
      'Docker Compose fundamentals',
      'Advanced networking concepts',
      'Container security practices',
      'Performance optimization',
      'Registry management',
      'CI/CD integration',
      'Troubleshooting containers'
    ],
    prerequisites: ['Docker Beginner completion', 'Basic networking knowledge'],
    tags: ['Docker', 'Docker Compose', 'Security', 'Performance'],
    resources: [
      {
        id: 'multi-stage-builds',
        title: 'Multi-stage Docker Builds',
        description: 'Optimize Docker images with multi-stage builds',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/docker-labs/Intermediate/LAB01-Multi-Stage-Builds',
        tags: ['optimization', 'dockerfile'],
        estimatedMinutes: 75
      },
      {
        id: 'docker-compose-intro',
        title: 'Docker Compose Introduction',
        description: 'Orchestrate multi-container applications with Docker Compose',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/docker-labs/Intermediate/LAB02-Docker-Compose',
        tags: ['compose', 'orchestration'],
        estimatedMinutes: 90
      },
      {
        id: 'container-security',
        title: 'Container Security Best Practices',
        description: 'Implement security measures for Docker containers',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/docker-labs/Intermediate/LAB03-Container-Security',
        tags: ['security', 'best-practices'],
        estimatedMinutes: 60
      }
    ],
    icon: '🐳',
    iconColor: 'text-blue-400',
    difficulty: 'Intermediate',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
    category: 'Containerization',
    estimatedHours: 50,
    lastUpdated: new Date('2024-01-25')
  },
  {
    id: 'docker-professional',
    title: 'Docker Professional',
    description: 'Enterprise Docker deployment, advanced orchestration, and production-ready containerization strategies',
    longDescription: 'Master enterprise-level Docker deployment and management. Learn advanced orchestration patterns, production monitoring, scaling strategies, and integration with enterprise systems.',
    level: 'Professional',
    duration: '60 hours',
    topics: [
      'Enterprise Docker deployment',
      'Production monitoring and logging',
      'Advanced orchestration patterns',
      'Container scaling strategies',
      'Enterprise registry management',
      'Disaster recovery for containers',
      'Integration with enterprise systems',
      'Container governance and compliance'
    ],
    prerequisites: ['Docker Intermediate completion', 'Production system experience'],
    tags: ['Docker', 'Enterprise', 'Production', 'Monitoring'],
    resources: [
      {
        id: 'enterprise-deployment',
        title: 'Enterprise Docker Deployment',
        description: 'Deploy Docker in enterprise environments',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/docker-labs/Professional/LAB01-Enterprise-Deployment',
        tags: ['enterprise', 'production'],
        estimatedMinutes: 120
      },
      {
        id: 'production-monitoring',
        title: 'Production Container Monitoring',
        description: 'Monitor and troubleshoot containers in production',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/docker-labs/Professional/LAB02-Production-Monitoring',
        tags: ['monitoring', 'troubleshooting'],
        estimatedMinutes: 90
      },
      {
        id: 'container-governance',
        title: 'Container Governance and Compliance',
        description: 'Implement governance policies for container environments',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/docker-labs/Professional/LAB03-Container-Governance',
        tags: ['governance', 'compliance'],
        estimatedMinutes: 105
      }
    ],
    icon: '🐳',
    iconColor: 'text-blue-400',
    difficulty: 'Professional',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
    category: 'Containerization',
    estimatedHours: 60,
    lastUpdated: new Date('2024-01-25')
  }
];
