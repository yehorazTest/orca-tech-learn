
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
    resources: [
      {
        id: 'lab11-advanced-security-oidc',
        title: 'Advanced Security OIDC',
        description: 'Implement advanced security patterns with OpenID Connect (OIDC) in GitHub Actions',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/GitHub-Actions/LAB11-Advanced-Security-OIDC',
        tags: ['security', 'oidc', 'authentication', 'advanced'],
        difficulty: 'Advanced',
        duration: '120 minutes',
        estimatedMinutes: 120
      },
      {
        id: 'lab12-self-hosted-runners-enterprise',
        title: 'Self-Hosted Runners Enterprise',
        description: 'Deploy and manage self-hosted runners for enterprise GitHub Actions workflows',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/GitHub-Actions/LAB12-Self-Hosted-Runners-Enterprise',
        tags: ['self-hosted', 'runners', 'enterprise', 'infrastructure'],
        difficulty: 'Advanced',
        duration: '135 minutes',
        estimatedMinutes: 135
      },
      {
        id: 'lab13-cross-repository-reusable-workflows',
        title: 'Cross-Repository Reusable Workflows',
        description: 'Create and manage reusable workflows across multiple repositories and organizations',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/GitHub-Actions/LAB13-Cross-Repository-Reusable-Workflows',
        tags: ['reusable-workflows', 'cross-repo', 'organization', 'sharing'],
        difficulty: 'Advanced',
        duration: '110 minutes',
        estimatedMinutes: 110
      },
      {
        id: 'lab14-performance-optimization-monitoring',
        title: 'Performance Optimization Monitoring',
        description: 'Optimize GitHub Actions performance and implement comprehensive monitoring',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/GitHub-Actions/LAB14-Performance-Optimization-Monitoring',
        tags: ['performance', 'optimization', 'monitoring', 'metrics'],
        difficulty: 'Advanced',
        duration: '100 minutes',
        estimatedMinutes: 100
      },
      {
        id: 'lab15-advanced-cloud-integrations',
        title: 'Advanced Cloud Integrations',
        description: 'Integrate GitHub Actions with advanced cloud services (AWS, Azure, GCP) for complex workflows',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/GitHub-Actions/LAB15-Advanced-Cloud-Integrations',
        tags: ['cloud', 'aws', 'azure', 'gcp', 'integration'],
        difficulty: 'Advanced',
        duration: '125 minutes',
        estimatedMinutes: 125
      },
      {
        id: 'lab16-advanced-deployment-strategies',
        title: 'Advanced Deployment Strategies',
        description: 'Implement sophisticated deployment patterns like blue-green, canary, and feature flags',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/GitHub-Actions/LAB16-Advanced-Deployment-Strategies',
        tags: ['deployment', 'blue-green', 'canary', 'feature-flags'],
        difficulty: 'Advanced',
        duration: '140 minutes',
        estimatedMinutes: 140
      },
      {
        id: 'lab17-custom-actions-development',
        title: 'Custom Actions Development',
        description: 'Develop, test, and publish custom GitHub Actions using JavaScript, Docker, and composite actions',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/GitHub-Actions/LAB17-Custom-Actions-Development',
        tags: ['custom-actions', 'javascript', 'docker', 'development'],
        difficulty: 'Advanced',
        duration: '150 minutes',
        estimatedMinutes: 150
      },
      {
        id: 'lab18-workflow-monitoring-observability',
        title: 'Workflow Monitoring Observability',
        description: 'Implement comprehensive monitoring and observability for GitHub Actions workflows',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/GitHub-Actions/LAB18-Workflow-Monitoring-Observability',
        tags: ['monitoring', 'observability', 'logging', 'analytics'],
        difficulty: 'Advanced',
        duration: '130 minutes',
        estimatedMinutes: 130
      }
    ]
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
        title: 'Scripted Pipelines',
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
        title: 'Jenkins Architecture & Admin',
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
        title: 'Advanced Security & RBAC',
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
        title: 'Performance Optimization',
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
        title: 'Cloud Integrations',
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
        title: 'Advanced Pipeline Patterns',
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
