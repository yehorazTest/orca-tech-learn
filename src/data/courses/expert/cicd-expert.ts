
import { Course } from '../../../types/learningPath';

export const cicdExpertCourses: Course[] = [
  {
    id: 'github-actions-expert',
    title: 'GitHub Actions Expert',
    description: 'Advanced CI/CD with GitHub Actions including custom workflows, marketplace actions, and enterprise automation',
    longDescription: 'Master GitHub Actions with advanced workflow patterns, custom action development, self-hosted runners, security best practices, and enterprise-scale automation strategies.',
    icon: '🚀',
    iconColor: 'text-gray-400',
    level: 'Advanced',
    difficulty: 'Advanced',
    duration: '6-8 weeks',
    color: 'gray',
    gradient: 'from-gray-500 to-slate-500',
    category: 'DevOps',
    topics: ['Advanced Workflows', 'Custom Actions', 'Self-hosted Runners', 'Enterprise Automation'],
    prerequisites: ['Git fundamentals', 'CI/CD basics'],
    estimatedHours: 70,
    tags: ['GitHub Actions', 'CI/CD', 'Automation', 'Custom Actions', 'Enterprise'],
    lastUpdated: new Date('2024-01-25'),
    resources: []
  },
  {
    id: 'jenkins-expert',
    title: 'Jenkins Expert',
    description: 'Enterprise Jenkins mastery with pipeline as code, plugin development, and scalable CI/CD architectures',
    longDescription: 'Deep dive into Jenkins with advanced pipeline development, custom plugin creation, distributed builds, security configurations, and enterprise CI/CD architectures.',
    icon: '🔧',
    iconColor: 'text-blue-600',
    level: 'Advanced',
    difficulty: 'Advanced',
    duration: '8-10 weeks',
    color: 'blue',
    gradient: 'from-blue-600 to-indigo-600',
    category: 'DevOps',
    topics: ['Pipeline as Code', 'Plugin Development', 'Distributed Builds', 'Enterprise Architecture'],
    prerequisites: ['CI/CD fundamentals', 'Groovy basics'],
    estimatedHours: 90,
    tags: ['Jenkins', 'Pipeline as Code', 'Plugins', 'Distributed Builds', 'Enterprise'],
    lastUpdated: new Date('2024-01-25'),
    resources: [
      {
        id: 'lab11-scripted-pipelines',
        title: 'LAB11 - Scripted Pipelines',
        description: 'Master Jenkins scripted pipelines with advanced Groovy programming techniques',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/Jenkins/LAB11-Scripted-Pipelines',
        tags: ['scripted', 'groovy', 'advanced-pipelines'],
        difficulty: 'Advanced',
        duration: '120 minutes',
        estimatedMinutes: 120
      },
      {
        id: 'lab12-jenkins-architecture-admin',
        title: 'LAB12 - Jenkins Architecture & Admin',
        description: 'Design and manage enterprise Jenkins architecture with master-agent setups',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/Jenkins/LAB12-Jenkins-Architecture-Admin',
        tags: ['architecture', 'administration', 'master-agent', 'enterprise'],
        difficulty: 'Advanced',
        duration: '135 minutes',
        estimatedMinutes: 135
      },
      {
        id: 'lab13-advanced-security-rbac',
        title: 'LAB13 - Advanced Security & RBAC',
        description: 'Implement role-based access control and advanced security policies in Jenkins',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/Jenkins/LAB13-Advanced-Security-RBAC',
        tags: ['security', 'rbac', 'access-control', 'policies'],
        difficulty: 'Advanced',
        duration: '110 minutes',
        estimatedMinutes: 110
      },
      {
        id: 'lab14-performance-optimization',
        title: 'LAB14 - Performance Optimization',
        description: 'Optimize Jenkins performance, monitoring, and resource management',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/Jenkins/LAB14-Performance-Optimization',
        tags: ['performance', 'optimization', 'monitoring', 'resources'],
        difficulty: 'Advanced',
        duration: '100 minutes',
        estimatedMinutes: 100
      },
      {
        id: 'lab15-cloud-integrations',
        title: 'LAB15 - Cloud Integrations',
        description: 'Integrate Jenkins with cloud platforms (AWS, Azure, GCP) for scalable CI/CD',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/Jenkins/LAB15-Cloud-Integrations',
        tags: ['cloud', 'aws', 'azure', 'gcp', 'integration'],
        difficulty: 'Advanced',
        duration: '125 minutes',
        estimatedMinutes: 125
      },
      {
        id: 'lab16-advanced-pipeline-patterns',
        title: 'LAB16 - Advanced Pipeline Patterns',
        description: 'Implement complex pipeline patterns, multi-branch strategies, and GitOps workflows',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/Jenkins/LAB16-Advanced-Pipeline-Patterns',
        tags: ['pipeline-patterns', 'multi-branch', 'gitops', 'workflows'],
        difficulty: 'Advanced',
        duration: '140 minutes',
        estimatedMinutes: 140
      }
    ]
  }
];
