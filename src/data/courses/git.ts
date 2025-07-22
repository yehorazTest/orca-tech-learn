
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
        url: 'https://github.com/study-ORCATech-cloud/git-labs/tree/main/LAB01-Initialize-Git-And-Gitignore',
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
        url: 'https://github.com/study-ORCATech-cloud/git-labs/tree/main/LAB02-Commit-And-History',
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
        url: 'https://github.com/study-ORCATech-cloud/git-labs/tree/main/LAB03-Branching-Basics',
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
        url: 'https://github.com/study-ORCATech-cloud/git-labs/tree/main/LAB04-Reset-Vs-Revert',
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
        url: 'https://github.com/study-ORCATech-cloud/git-labs/tree/main/LAB05-Stashing-And-Tagging',
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
        url: 'https://github.com/study-ORCATech-cloud/git-labs/tree/main/LAB06-Clone-And-Push',
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
        url: 'https://github.com/study-ORCATech-cloud/git-labs/tree/main/LAB07-Branches-And-Pull-Requests',
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
        url: 'https://github.com/study-ORCATech-cloud/git-labs/tree/main/LAB08-Forks-And-Upstream',
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
        url: 'https://github.com/study-ORCATech-cloud/git-labs/tree/main/LAB09-Issues-And-Boards',
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
  }
];
