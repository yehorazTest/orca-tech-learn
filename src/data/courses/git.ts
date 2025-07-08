
import { Course } from '../../types/learningPath';

export const gitCourses: Course[] = [
  {
    id: 'git-github-fundamentals',
    title: 'Git & GitHub Fundamentals',
    description: 'Master version control with Git and collaborative development with GitHub from basics to advanced workflows',
    longDescription: 'Learn the essential skills for modern software development with Git version control and GitHub collaboration. From basic commits to advanced branching strategies, this course covers everything developers need for effective source code management.',
    level: 'Beginner',
    duration: '35 hours',
    topics: [
      'Git fundamentals and installation',
      'Repository initialization and cloning',
      'Staging, committing, and pushing changes',
      'Branching and merging strategies',
      'GitHub workflow and collaboration',
      'Pull requests and code reviews',
      'Conflict resolution',
      'Git hooks and automation',
      'GitHub Actions basics',
      'Best practices and conventions'
    ],
    prerequisites: ['Basic command line knowledge', 'Understanding of software development'],
    tags: ['Git', 'GitHub', 'Version Control', 'Collaboration', 'DevOps'],
    resources: [
      {
        id: 'git-basics',
        title: 'Git Basics and Setup',
        description: 'Learn Git fundamentals, installation, and initial configuration',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/git-labs/Basics/LAB01-Git-Setup-and-Config',
        tags: ['setup', 'configuration'],
        estimatedMinutes: 45
      },
      {
        id: 'first-repository',
        title: 'Creating Your First Repository',
        description: 'Initialize a Git repository and make your first commits',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/git-labs/Basics/LAB02-First-Repository',
        tags: ['repository', 'commits'],
        estimatedMinutes: 60
      },
      {
        id: 'branching-basics',
        title: 'Git Branching Fundamentals',
        description: 'Learn to create, switch, and merge branches effectively',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/git-labs/Basics/LAB03-Branching-Basics',
        tags: ['branching', 'merging'],
        estimatedMinutes: 75
      },
      {
        id: 'github-workflow',
        title: 'GitHub Collaboration Workflow',
        description: 'Master GitHub for team collaboration and open source contribution',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/git-labs/Collaboration/LAB01-GitHub-Workflow',
        tags: ['github', 'collaboration'],
        estimatedMinutes: 90
      },
      {
        id: 'pull-requests',
        title: 'Pull Requests and Code Reviews',
        description: 'Learn to create effective pull requests and conduct code reviews',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/git-labs/Collaboration/LAB02-Pull-Requests',
        tags: ['pull-requests', 'code-review'],
        estimatedMinutes: 80
      }
    ],
    icon: '📝',
    iconColor: 'text-orange-400',
    difficulty: 'Beginner',
    color: 'orange',
    gradient: 'from-orange-500 to-red-500',
    category: 'Development Tools',
    estimatedHours: 35,
    lastUpdated: new Date('2024-01-25')
  }
];
