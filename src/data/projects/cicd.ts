
import { Project } from '../../types/project';

export const cicdProjects: Project[] = [
  {
    id: 'github-actions-pipeline',
    title: 'Complete CI/CD Pipeline with GitHub Actions',
    description: 'Build automated CI/CD pipeline for a web application using GitHub Actions',
    longDescription: 'Create a comprehensive CI/CD pipeline that includes testing, building, security scanning, and deployment to multiple environments using GitHub Actions workflows.',
    difficulty: 'Intermediate',
    estimatedHours: 10,
    category: 'CI/CD',
    tags: ['github-actions', 'automation', 'testing', 'deployment', 'docker'],
    prerequisites: ['Git/GitHub knowledge', 'Basic CI/CD concepts', 'Docker basics'],
    objectives: [
      'Create automated testing workflows',
      'Implement multi-stage deployments',
      'Add security scanning to pipeline',
      'Configure environment-specific deployments'
    ],
    deliverables: [
      'GitHub Actions workflow files',
      'Automated testing setup',
      'Security scanning integration',
      'Multi-environment deployment configuration'
    ],
    resources: [
      {
        id: 'github-actions-docs',
        title: 'GitHub Actions Documentation',
        description: 'Official GitHub Actions documentation',
        type: 'Documentation',
        url: 'https://docs.github.com/en/actions',
        isExternal: true
      }
    ],
    isPopular: true,
    lastUpdated: new Date('2024-01-20')
  },
  {
    id: 'jenkins-pipeline',
    title: 'Jenkins Pipeline as Code',
    description: 'Create declarative Jenkins pipelines using Jenkinsfile',
    longDescription: 'Build sophisticated Jenkins pipelines using Pipeline as Code approach with Jenkinsfile, including parallel execution, approval gates, and integration with various tools.',
    difficulty: 'Advanced',
    estimatedHours: 14,
    category: 'CI/CD',
    tags: ['jenkins', 'pipeline-as-code', 'groovy', 'automation', 'integration'],
    prerequisites: ['Jenkins basics', 'Groovy scripting', 'DevOps concepts'],
    objectives: [
      'Master Jenkins Pipeline syntax',
      'Implement parallel pipeline stages',
      'Add manual approval gates',
      'Integrate with external tools and services'
    ],
    deliverables: [
      'Declarative Jenkinsfile',
      'Parallel execution implementation',
      'Approval workflow setup',
      'Tool integration configuration'
    ],
    resources: [
      {
        id: 'jenkins-pipeline-docs',
        title: 'Jenkins Pipeline Documentation',
        description: 'Official Jenkins Pipeline documentation',
        type: 'Documentation',
        url: 'https://www.jenkins.io/doc/book/pipeline/',
        isExternal: true
      }
    ],
    lastUpdated: new Date('2024-01-23')
  }
];
