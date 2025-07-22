
import { Course } from '../../types/learningPath';

export const gitCourses: Course[] = [
  {
    id: 'git-github-fundamentals',
    title: 'Git & GitHub Fundamentals',
    description: 'Master version control with Git and collaborative development with GitHub from basics to advanced workflows',
    longDescription: 'Learn the essential skills for modern software development with Git version control and GitHub collaboration. From basic commits to advanced branching strategies, this course covers everything developers need for effective source code management.',
    level: 'Beginner',
    duration: '40 hours',
    topics: [
      'Git fundamentals and initialization',
      'Repository setup and gitignore configuration',
      'Committing changes and viewing history',
      'Branching and merging strategies',
      'Reset vs revert operations',
      'Stashing and tagging',
      'Cloning and pushing to remote repositories',
      'Pull requests and code reviews',
      'Forking and upstream management',
      'GitHub issues and project boards'
    ],
    prerequisites: ['Basic command line knowledge', 'Understanding of software development'],
    tags: ['Git', 'GitHub', 'Version Control', 'Collaboration', 'DevOps'],
    resources: [
      {
        id: 'git-initialize-gitignore',
        title: 'Initialize Git and Gitignore',
        description: 'Learn to initialize Git repositories and configure gitignore files effectively',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/git-labs/tree/main/Fundamentals/LAB01-Initialize-Git-And-Gitignore',
        tags: ['initialization', 'gitignore', 'setup'],
        difficulty: 'Beginner',
        duration: '45 minutes',
        estimatedMinutes: 45
      },
      {
        id: 'commit-and-history',
        title: 'Commit and History',
        description: 'Master Git commits and learn to navigate repository history',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/git-labs/tree/main/Fundamentals/LAB02-Commit-And-History',
        tags: ['commits', 'history', 'log'],
        difficulty: 'Beginner',
        duration: '1 hour',
        estimatedMinutes: 60
      },
      {
        id: 'branching-basics',
        title: 'Branching Basics',
        description: 'Learn to create, switch, and manage branches effectively',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/git-labs/tree/main/Fundamentals/LAB03-Branching-Basics',
        tags: ['branching', 'checkout', 'merge'],
        difficulty: 'Beginner',
        duration: '1.25 hours',
        estimatedMinutes: 75
      },
      {
        id: 'reset-vs-revert',
        title: 'Reset vs Revert',
        description: 'Understand the differences between reset and revert operations',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/git-labs/tree/main/Fundamentals/LAB04-Reset-Vs-Revert',
        tags: ['reset', 'revert', 'undo'],
        difficulty: 'Intermediate',
        duration: '1 hour',
        estimatedMinutes: 60
      },
      {
        id: 'stashing-and-tagging',
        title: 'Stashing and Tagging',
        description: 'Learn to use Git stash for temporary changes and tags for releases',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/git-labs/tree/main/Fundamentals/LAB05-Stashing-And-Tagging',
        tags: ['stash', 'tags', 'releases'],
        difficulty: 'Intermediate',
        duration: '50 minutes',
        estimatedMinutes: 50
      },
      {
        id: 'clone-and-push',
        title: 'Clone and Push',
        description: 'Master cloning repositories and pushing changes to remote repositories',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/git-labs/tree/main/Fundamentals/LAB06-Clone-And-Push',
        tags: ['clone', 'push', 'remote'],
        difficulty: 'Beginner',
        duration: '45 minutes',
        estimatedMinutes: 45
      },
      {
        id: 'branches-and-pull-requests',
        title: 'Branches and Pull Requests',
        description: 'Learn advanced branching workflows and create effective pull requests',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/git-labs/tree/main/Fundamentals/LAB07-Branches-And-Pull-Requests',
        tags: ['branches', 'pull-requests', 'workflow'],
        difficulty: 'Intermediate',
        duration: '1.5 hours',
        estimatedMinutes: 90
      },
      {
        id: 'forks-and-upstream',
        title: 'Forks and Upstream',
        description: 'Master forking repositories and managing upstream relationships',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/git-labs/tree/main/Fundamentals/LAB08-Forks-And-Upstream',
        tags: ['forks', 'upstream', 'open-source'],
        difficulty: 'Intermediate',
        duration: '1.25 hours',
        estimatedMinutes: 75
      },
      {
        id: 'issues-and-boards',
        title: 'Issues and Boards',
        description: 'Learn to manage projects using GitHub issues and project boards',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/git-labs/tree/main/Fundamentals/LAB09-Issues-And-Boards',
        tags: ['issues', 'project-boards', 'project-management'],
        difficulty: 'Intermediate',
        duration: '1 hour',
        estimatedMinutes: 60
      }
    ],
    icon: '📝',
    iconColor: 'text-orange-400',
    difficulty: 'Beginner',
    color: 'orange',
    gradient: 'from-orange-500 to-red-500',
    category: 'Development Tools',
    estimatedHours: 40,
    lastUpdated: new Date('2024-01-25')
  },
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
