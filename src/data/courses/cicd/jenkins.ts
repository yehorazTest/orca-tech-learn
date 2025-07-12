
import { Course } from '../../../types/learningPath';

export const jenkinsCourse: Course = {
  id: 'jenkins-fundamentals',
  title: 'Jenkins Fundamentals',
  description: 'Master Jenkins automation server with hands-on labs covering jobs, pipelines, and CI/CD workflows',
  longDescription: 'Learn Jenkins from the ground up with practical labs covering freestyle jobs, declarative pipelines, Docker integration, security, and deployment automation. Build real-world CI/CD skills through hands-on exercises.',
  level: 'Intermediate',
  duration: '40 hours',
  topics: [
    'Jenkins installation and setup',
    'Freestyle and pipeline jobs',
    'Declarative pipeline syntax',
    'SCM integration and webhooks',
    'Docker image building',
    'Parallel and conditional execution',
    'Shared libraries',
    'Security and credentials',
    'Notifications and integrations',
    'Remote deployment strategies'
  ],
  prerequisites: ['Basic understanding of CI/CD concepts', 'Command line experience'],
  tags: ['Jenkins', 'CI/CD', 'Automation', 'DevOps', 'Pipelines'],
  resources: [
    {
      id: 'installation-setup',
      title: 'Installation and Setup',
      description: 'Get started with Jenkins by learning installation and initial setup requirements',
      type: 'article',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/blob/main/Jenkins/install-and-setup.md',
      tags: ['installation', 'setup', 'getting-started'],
      difficulty: 'Beginner',
      duration: '45 minutes',
      estimatedMinutes: 45
    },
    {
      id: 'lab01-first-job',
      title: 'My First Jenkins Job',
      description: 'Create and configure your first Jenkins job to understand the basics',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/Jenkins/LAB01-My-First-Jenkins-Job',
      tags: ['basics', 'setup', 'first-job'],
      difficulty: 'Beginner',
      duration: '60 minutes',
      estimatedMinutes: 60
    },
    {
      id: 'lab02-freestyle-python',
      title: 'Freestyle Python Job',
      description: 'Build and test a Python application using Jenkins freestyle jobs',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/Jenkins/LAB02-Freestyle-Python-Job',
      tags: ['freestyle', 'python', 'testing'],
      difficulty: 'Beginner',
      duration: '90 minutes',
      estimatedMinutes: 90
    },
    {
      id: 'lab03-declarative-pipeline',
      title: 'Declarative Pipeline',
      description: 'Learn declarative pipeline syntax and create your first pipeline as code',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/Jenkins/LAB03-Declarative-Pipeline',
      tags: ['pipeline', 'declarative', 'pipeline-as-code'],
      difficulty: 'Intermediate',
      duration: '75 minutes',
      estimatedMinutes: 75
    },
    {
      id: 'lab04-scm-polling-webhooks',
      title: 'SCM Polling & Webhooks',
      description: 'Integrate Jenkins with Git repositories using polling and webhook triggers',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/Jenkins/LAB04-SCM-Polling-Webhooks',
      tags: ['scm', 'git', 'webhooks', 'triggers'],
      difficulty: 'Intermediate',
      duration: '80 minutes',
      estimatedMinutes: 80
    },
    {
      id: 'lab05-docker-image-build',
      title: 'Docker Image Build',
      description: 'Build and manage Docker images within Jenkins pipelines',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/Jenkins/LAB05-Docker-Image-Build',
      tags: ['docker', 'containers', 'image-build'],
      difficulty: 'Intermediate',
      duration: '85 minutes',
      estimatedMinutes: 85
    },
    {
      id: 'lab06-parallel-conditional',
      title: 'Parallel & Conditional Execution',
      description: 'Implement parallel stages and conditional logic in Jenkins pipelines',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/Jenkins/LAB06-Parallel-And-Conditional',
      tags: ['parallel', 'conditional', 'optimization'],
      difficulty: 'Intermediate',
      duration: '70 minutes',
      estimatedMinutes: 70
    },
    {
      id: 'lab07-shared-libraries',
      title: 'Shared Libraries',
      description: 'Create and use Jenkins shared libraries for code reusability',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/Jenkins/LAB07-Shared-Libraries',
      tags: ['shared-libraries', 'reusability', 'groovy'],
      difficulty: 'Advanced',
      duration: '90 minutes',
      estimatedMinutes: 90
    },
    {
      id: 'lab08-secure-credentials',
      title: 'Secure Credentials',
      description: 'Manage secrets and credentials securely in Jenkins pipelines',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/Jenkins/LAB08-Secure-Credentials',
      tags: ['security', 'credentials', 'secrets'],
      difficulty: 'Intermediate',
      duration: '65 minutes',
      estimatedMinutes: 65
    },
    {
      id: 'lab09-slack-notifications',
      title: 'Slack Notifications',
      description: 'Integrate Jenkins with Slack for build notifications and alerts',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/Jenkins/LAB09-Slack-Notifications',
      tags: ['notifications', 'slack', 'integrations'],
      difficulty: 'Intermediate',
      duration: '55 minutes',
      estimatedMinutes: 55
    },
    {
      id: 'lab10-ssh-remote-deploy',
      title: 'SSH Remote Deploy',
      description: 'Deploy applications to remote servers using SSH in Jenkins pipelines',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/Jenkins/LAB10-SSH-Remote-Deploy',
      tags: ['deployment', 'ssh', 'remote-servers'],
      difficulty: 'Advanced',
      duration: '95 minutes',
      estimatedMinutes: 95
    }
  ],
  icon: '🔧',
  iconColor: 'text-orange-400',
  difficulty: 'Intermediate',
  color: 'orange',
  gradient: 'from-orange-500 to-red-500',
  category: 'DevOps',
  estimatedHours: 40,
  lastUpdated: new Date('2024-01-25')
};
