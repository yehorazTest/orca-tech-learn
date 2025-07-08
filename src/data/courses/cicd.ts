
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
        id: 'cicd-concepts',
        title: 'CI/CD Concepts and Principles',
        description: 'Understanding the fundamentals of continuous integration and deployment',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/Fundamentals/LAB01-CICD-Concepts',
        tags: ['concepts', 'principles'],
        difficulty: 'Beginner',
        duration: '1 hour',
        estimatedMinutes: 60
      },
      {
        id: 'github-actions-intro',
        title: 'GitHub Actions Introduction',
        description: 'Create your first CI/CD pipeline with GitHub Actions',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/GitHub-Actions/LAB01-Actions-Introduction',
        tags: ['github-actions', 'pipeline'],
        difficulty: 'Beginner',
        duration: '1.5 hours',
        estimatedMinutes: 90
      },
      {
        id: 'automated-testing',
        title: 'Automated Testing in Pipelines',
        description: 'Integrate automated testing into CI/CD workflows',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/Testing/LAB01-Automated-Testing',
        tags: ['testing', 'automation'],
        difficulty: 'Intermediate',
        duration: '1.25 hours',
        estimatedMinutes: 75
      },
      {
        id: 'deployment-strategies',
        title: 'Deployment Strategies',
        description: 'Implement blue-green and canary deployment patterns',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/Deployment/LAB01-Deployment-Strategies',
        tags: ['deployment', 'strategies'],
        difficulty: 'Intermediate',
        duration: '1.75 hours',
        estimatedMinutes: 105
      },
      {
        id: 'jenkins-pipelines',
        title: 'Jenkins Pipeline Creation',
        description: 'Build and manage CI/CD pipelines with Jenkins',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/Jenkins/LAB01-Jenkins-Pipelines',
        tags: ['jenkins', 'pipelines'],
        difficulty: 'Advanced',
        duration: '2 hours',
        estimatedMinutes: 120
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
