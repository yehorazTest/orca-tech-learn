
import { Course } from '../../../types/learningPath';

export const gitExpertCourses: Course[] = [
  {
    id: 'git-github-expert',
    title: 'Git & GitHub Expert',
    description: 'Advanced Git and GitHub automation, workflows, and API integration for professional development teams',
    longDescription: 'Take your Git and GitHub skills to the expert level with advanced automation, GitHub Actions, Git hooks, CLI tools, and API integration. Perfect for DevOps engineers and senior developers who need to implement sophisticated workflows and automation.',
    level: 'Expert',
    duration: '30 hours',
    topics: [
      'GitHub Actions fundamentals',
      'Custom Git hooks implementation',
      'GitHub CLI automation',
      'Workflow templates and reusability',
      'Token management and secrets',
      'GitHub API integration with Python',
      'Advanced automation patterns',
      'Enterprise workflow design',
      'Security best practices',
      'Custom tooling development'
    ],
    prerequisites: ['Git & GitHub Fundamentals', 'Python programming', 'CI/CD basics'],
    tags: ['Git', 'GitHub', 'Automation', 'API', 'Advanced', 'DevOps'],
    resources: [
      {
        id: 'github-actions-basics-expert',
        title: 'GitHub Actions Basics',
        description: 'Master GitHub Actions workflows and automation from an expert perspective',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/git-labs/tree/main/Expert/LAB10-GitHub-Actions-Basics',
        tags: ['github-actions', 'workflows', 'automation'],
        difficulty: 'Advanced',
        duration: '2 hours',
        estimatedMinutes: 120
      },
      {
        id: 'git-hooks-expert',
        title: 'Git Hooks',
        description: 'Implement custom Git hooks for automated quality control and workflow enforcement',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/git-labs/tree/main/Expert/LAB11-Git-Hooks',
        tags: ['git-hooks', 'automation', 'quality-control'],
        difficulty: 'Advanced',
        duration: '1.5 hours',
        estimatedMinutes: 90
      },
      {
        id: 'github-cli-expert',
        title: 'GitHub CLI',
        description: 'Master GitHub CLI for advanced repository management and automation',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/git-labs/tree/main/Expert/LAB12-GitHub-CLI',
        tags: ['github-cli', 'command-line', 'automation'],
        difficulty: 'Advanced',
        duration: '1.25 hours',
        estimatedMinutes: 75
      },
      {
        id: 'workflow-templates-expert',
        title: 'Workflow Templates',
        description: 'Create reusable workflow templates for consistent automation across projects',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/git-labs/tree/main/Expert/LAB13-Workflow-Templates',
        tags: ['templates', 'workflows', 'reusability'],
        difficulty: 'Advanced',
        duration: '1.5 hours',
        estimatedMinutes: 90
      },
      {
        id: 'tokens-and-secrets-expert',
        title: 'Tokens and Secrets',
        description: 'Advanced management of GitHub tokens, secrets, and security best practices',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/git-labs/tree/main/Expert/LAB14-Tokens-And-Secrets',
        tags: ['security', 'tokens', 'secrets'],
        difficulty: 'Advanced',
        duration: '1 hour',
        estimatedMinutes: 60
      },
      {
        id: 'github-api-python-expert',
        title: 'GitHub API with Python',
        description: 'Build custom GitHub integrations and automation tools using Python and the GitHub API',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/git-labs/tree/main/Expert/LAB15-GitHub-API-With-Python',
        tags: ['api', 'python', 'integration'],
        difficulty: 'Advanced',
        duration: '2.5 hours',
        estimatedMinutes: 150
      }
    ],
    icon: '🚀',
    iconColor: 'text-purple-400',
    difficulty: 'Advanced',
    color: 'purple',
    gradient: 'from-purple-500 to-indigo-500',
    category: 'Development Tools',
    estimatedHours: 30,
    lastUpdated: new Date('2024-01-25')
  }
];
