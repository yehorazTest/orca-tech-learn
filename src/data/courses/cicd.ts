
import { Course } from '../../types/learningPath';

export const cicdCourses: Course[] = [
  {
    id: 'cicd-fundamentals',
    title: 'CI/CD Fundamentals',
    description: 'Master continuous integration and continuous deployment pipelines with industry-standard tools and practices',
    longDescription: 'Learn the principles and practices of CI/CD to automate software delivery. Master pipeline creation, automated testing, deployment strategies, and monitoring using popular tools like GitHub Actions, Jenkins, and GitLab CI.',
    level: 'Intermediate',
    duration: '50 hours',
    topics: [
      'CI/CD concepts and principles',
      'Pipeline design and architecture',
      'Automated testing integration',
      'Build automation and artifacts',
      'Deployment strategies (blue-green, canary)',
      'GitHub Actions workflows',
      'Jenkins pipeline creation',
      'GitLab CI/CD configuration',
      'Security in CI/CD pipelines',
      'Monitoring and observability',
      'Infrastructure as Code integration',
      'Rollback and recovery strategies'
    ],
    prerequisites: ['Git & GitHub Fundamentals completion', 'Basic understanding of software development'],
    tags: ['CI/CD', 'Automation', 'GitHub Actions', 'Jenkins', 'GitLab'],
    resources: [
      {
        id: 'welcome-intro',
        title: 'Welcome and Introduction',
        description: 'Course overview and learning objectives for CI/CD fundamentals',
        type: 'article',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/CI-CD-Fundamentals/00-README.md',
        tags: ['introduction', 'overview'],
        difficulty: 'Beginner',
        duration: '15 minutes',
        estimatedMinutes: 15
      },
      {
        id: 'cicd-core-concepts',
        title: 'CI/CD Core Concepts',
        description: 'Understanding the fundamental concepts of continuous integration and deployment',
        type: 'article',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/CI-CD-Fundamentals/01-CI-CD-Core-Concepts.md',
        tags: ['concepts', 'fundamentals'],
        difficulty: 'Beginner',
        duration: '45 minutes',
        estimatedMinutes: 45
      },
      {
        id: 'devops-philosophy',
        title: 'DevOps Philosophy',
        description: 'Exploring the cultural and philosophical foundations of DevOps practices',
        type: 'article',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/CI-CD-Fundamentals/02-DevOps-Philosophy.md',
        tags: ['devops', 'culture', 'philosophy'],
        difficulty: 'Beginner',
        duration: '30 minutes',
        estimatedMinutes: 30
      },
      {
        id: 'pipeline-stages',
        title: 'Pipeline Stages',
        description: 'Understanding the different stages and components of CI/CD pipelines',
        type: 'article',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/CI-CD-Fundamentals/03-Pipeline-Stages.md',
        tags: ['pipeline', 'stages', 'architecture'],
        difficulty: 'Intermediate',
        duration: '40 minutes',
        estimatedMinutes: 40
      },
      {
        id: 'cicd-best-practices',
        title: 'CI/CD Best Practices',
        description: 'Industry best practices for implementing effective CI/CD workflows',
        type: 'article',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/CI-CD-Fundamentals/04-CI-CD-Best-Practices.md',
        tags: ['best-practices', 'workflow'],
        difficulty: 'Intermediate',
        duration: '35 minutes',
        estimatedMinutes: 35
      },
      {
        id: 'tool-landscape',
        title: 'Tool Landscape',
        description: 'Overview of popular CI/CD tools and platforms in the industry',
        type: 'article',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/CI-CD-Fundamentals/05-Tool-Landscape.md',
        tags: ['tools', 'platforms', 'comparison'],
        difficulty: 'Intermediate',
        duration: '50 minutes',
        estimatedMinutes: 50
      },
      {
        id: 'security-compliance',
        title: 'Security and Compliance',
        description: 'Implementing security measures and compliance requirements in CI/CD pipelines',
        type: 'article',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/CI-CD-Fundamentals/06-Security-Compliance.md',
        tags: ['security', 'compliance', 'governance'],
        difficulty: 'Advanced',
        duration: '45 minutes',
        estimatedMinutes: 45
      },
      {
        id: 'monitoring-observability',
        title: 'Monitoring and Observability',
        description: 'Setting up monitoring and observability for CI/CD pipelines and deployments',
        type: 'article',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/CI-CD-Fundamentals/07-Monitoring-Observability.md',
        tags: ['monitoring', 'observability', 'metrics'],
        difficulty: 'Advanced',
        duration: '40 minutes',
        estimatedMinutes: 40
      },
      {
        id: 'git-workflows',
        title: 'Git Workflows',
        description: 'Understanding Git workflows and branching strategies for CI/CD integration',
        type: 'article',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/CI-CD-Fundamentals/08-Git-Workflows.md',
        tags: ['git', 'workflows', 'branching'],
        difficulty: 'Intermediate',
        duration: '35 minutes',
        estimatedMinutes: 35
      },
      {
        id: 'infrastructure-as-code',
        title: 'Infrastructure as Code',
        description: 'Integrating Infrastructure as Code practices with CI/CD pipelines',
        type: 'article',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/CI-CD-Fundamentals/09-Infrastructure-as-Code.md',
        tags: ['iac', 'infrastructure', 'automation'],
        difficulty: 'Advanced',
        duration: '45 minutes',
        estimatedMinutes: 45
      },
      {
        id: 'cloud-native-cicd',
        title: 'Cloud Native CI/CD',
        description: 'Implementing CI/CD pipelines in cloud-native environments and platforms',
        type: 'article',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/CI-CD-Fundamentals/10-Cloud-Native-CI-CD.md',
        tags: ['cloud-native', 'containers', 'kubernetes'],
        difficulty: 'Advanced',
        duration: '50 minutes',
        estimatedMinutes: 50
      }
    ],
    icon: '🔄',
    iconColor: 'text-purple-400',
    difficulty: 'Intermediate',
    color: 'purple',
    gradient: 'from-purple-500 to-violet-500',
    category: 'DevOps',
    estimatedHours: 50,
    lastUpdated: new Date('2024-01-25')
  }
];
