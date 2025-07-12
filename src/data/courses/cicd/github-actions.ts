
import { Course } from '../../../types/learningPath';

export const githubActionsCourse: Course = {
  id: 'github-actions-fundamentals',
  title: 'GitHub Actions Fundamentals',
  description: 'Master GitHub Actions with hands-on labs covering workflows, CI/CD pipelines, and automation strategies',
  longDescription: 'Learn GitHub Actions from the ground up with practical labs covering workflow creation, testing automation, Docker integration, deployment strategies, and advanced workflow patterns. Build real-world CI/CD skills using GitHub\'s native automation platform.',
  level: 'Intermediate',
  duration: '35 hours',
  topics: [
    'GitHub Actions basics',
    'Workflow syntax and triggers',
    'Testing automation',
    'Docker build and deployment',
    'Scheduled workflows',
    'Secrets and contexts',
    'Artifact management and caching',
    'Monorepo strategies',
    'Reusable workflows',
    'Deployment patterns'
  ],
  prerequisites: ['Git & GitHub fundamentals', 'Basic CI/CD understanding'],
  tags: ['GitHub Actions', 'CI/CD', 'Automation', 'Workflows', 'DevOps'],
  resources: [
    {
      id: 'installation-setup',
      title: 'Installation and Setup',
      description: 'Get started with GitHub Actions by learning installation and initial setup requirements',
      type: 'article',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/blob/main/GitHub-Actions/install-and-setup.md',
      tags: ['installation', 'setup', 'getting-started'],
      difficulty: 'Beginner',
      duration: '30 minutes',
      estimatedMinutes: 30
    },
    {
      id: 'lab01-hello-world',
      title: 'Hello World',
      description: 'Create your first GitHub Actions workflow with basic concepts',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/GitHub-Actions/LAB01-Hello-World',
      tags: ['basics', 'first-workflow', 'introduction'],
      difficulty: 'Beginner',
      duration: '45 minutes',
      estimatedMinutes: 45
    },
    {
      id: 'lab02-python-test-workflow',
      title: 'Python Test Workflow',
      description: 'Build and test a Python application using GitHub Actions workflows',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/GitHub-Actions/LAB02-Python-Test-Workflow',
      tags: ['python', 'testing', 'automation'],
      difficulty: 'Beginner',
      duration: '60 minutes',
      estimatedMinutes: 60
    },
    {
      id: 'lab03-docker-build-push',
      title: 'Docker Build and Push',
      description: 'Build Docker images and push to container registries using GitHub Actions',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/GitHub-Actions/LAB03-Docker-Build-And-Push',
      tags: ['docker', 'containers', 'registry'],
      difficulty: 'Intermediate',
      duration: '70 minutes',
      estimatedMinutes: 70
    },
    {
      id: 'lab04-deploy-github-pages',
      title: 'Deploy GitHub Pages',
      description: 'Deploy static websites to GitHub Pages using automated workflows',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/GitHub-Actions/LAB04-Deploy-GitHub-Pages',
      tags: ['deployment', 'github-pages', 'static-sites'],
      difficulty: 'Intermediate',
      duration: '50 minutes',
      estimatedMinutes: 50
    },
    {
      id: 'lab05-scheduled-cron-jobs',
      title: 'Scheduled Cron Jobs',
      description: 'Create scheduled workflows using cron expressions and event triggers',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/GitHub-Actions/LAB05-Scheduled-Cron-Jobs',
      tags: ['scheduling', 'cron', 'automation'],
      difficulty: 'Intermediate',
      duration: '55 minutes',
      estimatedMinutes: 55
    },
    {
      id: 'lab06-secrets-contexts',
      title: 'Secrets and Contexts',
      description: 'Manage sensitive data and workflow contexts securely in GitHub Actions',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/GitHub-Actions/LAB06-Secrets-And-Contexts',
      tags: ['security', 'secrets', 'contexts'],
      difficulty: 'Intermediate',
      duration: '65 minutes',
      estimatedMinutes: 65
    },
    {
      id: 'lab07-artifact-caching',
      title: 'Artifact Caching',
      description: 'Optimize workflow performance with artifact management and caching strategies',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/GitHub-Actions/LAB07-Artifact-Caching',
      tags: ['artifacts', 'caching', 'optimization'],
      difficulty: 'Intermediate',
      duration: '60 minutes',
      estimatedMinutes: 60
    },
    {
      id: 'lab08-monorepo-strategy',
      title: 'Monorepo Strategy',
      description: 'Implement CI/CD workflows for monorepo architectures and path-based triggers',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/GitHub-Actions/LAB08-Monorepo-Strategy',
      tags: ['monorepo', 'path-filters', 'strategy'],
      difficulty: 'Advanced',
      duration: '80 minutes',
      estimatedMinutes: 80
    },
    {
      id: 'lab09-reusable-workflows',
      title: 'Reusable Workflows',
      description: 'Create and use reusable workflows for code sharing and standardization',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/GitHub-Actions/LAB09-Reusable-Workflows',
      tags: ['reusable', 'workflows', 'standardization'],
      difficulty: 'Advanced',
      duration: '75 minutes',
      estimatedMinutes: 75
    },
    {
      id: 'lab10-canary-deployment',
      title: 'Canary Deployment',
      description: 'Implement canary deployment strategies using GitHub Actions workflows',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/GitHub-Actions/LAB10-Canary-Deployment',
      tags: ['canary', 'deployment', 'strategies'],
      difficulty: 'Advanced',
      duration: '90 minutes',
      estimatedMinutes: 90
    }
  ],
  icon: '⚡',
  iconColor: 'text-blue-400',
  difficulty: 'Intermediate',
  color: 'blue',
  gradient: 'from-blue-500 to-cyan-500',
  category: 'DevOps',
  estimatedHours: 35,
  lastUpdated: new Date('2024-01-25')
};
