
import { Course } from '../../../types/learningPath';

export const argoCDFundamentalsCourse: Course = {
  id: 'argocd-fundamentals',
  title: 'ArgoCD Fundamentals',
  description: 'Learn GitOps with ArgoCD including application deployment, Helm charts, and CI/CD integration',
  longDescription: 'Master the fundamentals of GitOps with ArgoCD. Learn to deploy applications, manage Helm charts, implement rollback strategies, configure sync policies, handle secrets, and integrate with CI/CD pipelines for automated deployments.',
  icon: '🐙',
  iconColor: 'text-orange-400',
  level: 'Beginner',
  difficulty: 'Beginner',
  duration: '4-6 weeks',
  color: 'orange',
  gradient: 'from-orange-500 to-red-500',
  category: 'DevOps',
  topics: ['GitOps', 'Application Deployment', 'Helm Charts', 'CI/CD Integration'],
  prerequisites: ['Kubernetes basics', 'Git fundamentals'],
  estimatedHours: 45,
  tags: ['GitOps', 'ArgoCD', 'Kubernetes', 'Deployment', 'CI/CD'],
  lastUpdated: new Date('2024-01-25'),
  resources: [
    {
      id: 'argocd-install-setup',
      title: 'Installation and Setup',
      description: 'Complete guide to installing and setting up ArgoCD in your Kubernetes cluster',
      type: 'article',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/blob/main/ArgoCD/install-and-setup.md',
      tags: ['installation', 'setup', 'configuration'],
      difficulty: 'Beginner',
      duration: '45 minutes',
      estimatedMinutes: 45
    },
    {
      id: 'lab01-deploy-first-application',
      title: 'Deploy First Application',
      description: 'Deploy your first application using ArgoCD and understand the basic GitOps workflow',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/ArgoCD/LAB01-Deploy-First-Application',
      tags: ['deployment', 'first-app', 'gitops'],
      difficulty: 'Beginner',
      duration: '60 minutes',
      estimatedMinutes: 60
    },
    {
      id: 'lab02-k8s-gitops-deploy',
      title: 'K8s GitOps Deploy',
      description: 'Learn advanced Kubernetes deployment patterns with GitOps methodology',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/ArgoCD/LAB02-K8s-GitOps-Deploy',
      tags: ['kubernetes', 'gitops', 'deployment'],
      difficulty: 'Beginner',
      duration: '75 minutes',
      estimatedMinutes: 75
    },
    {
      id: 'lab03-helm-deployments',
      title: 'Helm Deployments',
      description: 'Deploy applications using Helm charts with ArgoCD for package management',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/ArgoCD/LAB03-Helm-Deployments',
      tags: ['helm', 'charts', 'package-management'],
      difficulty: 'Beginner',
      duration: '90 minutes',
      estimatedMinutes: 90
    },
    {
      id: 'lab04-gitops-rollback',
      title: 'GitOps Rollback',
      description: 'Implement rollback strategies and version control for GitOps deployments',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/ArgoCD/LAB04-GitOps-Rollback',
      tags: ['rollback', 'version-control', 'recovery'],
      difficulty: 'Beginner',
      duration: '70 minutes',
      estimatedMinutes: 70
    },
    {
      id: 'lab05-sync-policy-auto-sync',
      title: 'Sync Policy Auto Sync',
      description: 'Configure sync policies and enable automatic synchronization for continuous deployment',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/ArgoCD/LAB05-Sync-Policy-Auto-Sync',
      tags: ['sync-policy', 'auto-sync', 'automation'],
      difficulty: 'Beginner',
      duration: '65 minutes',
      estimatedMinutes: 65
    },
    {
      id: 'lab06-secrets-integration',
      title: 'Secrets Integration',
      description: 'Manage secrets securely in ArgoCD deployments with proper integration patterns',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/ArgoCD/LAB06-Secrets-Integration',
      tags: ['secrets', 'security', 'integration'],
      difficulty: 'Intermediate',
      duration: '80 minutes',
      estimatedMinutes: 80
    },
    {
      id: 'lab07-staging-to-production',
      title: 'Staging To Production',
      description: 'Implement staging to production deployment workflows with proper promotion strategies',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/ArgoCD/LAB07-Staging-To-Production',
      tags: ['staging', 'production', 'promotion'],
      difficulty: 'Intermediate',
      duration: '95 minutes',
      estimatedMinutes: 95
    },
    {
      id: 'lab08-ci-promote-to-argocd',
      title: 'CI Promote To ArgoCD',
      description: 'Integrate CI pipelines with ArgoCD for automated promotion and deployment workflows',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/ArgoCD/LAB08-CI-Promote-To-ArgoCD',
      tags: ['ci-integration', 'promotion', 'automation'],
      difficulty: 'Intermediate',
      duration: '100 minutes',
      estimatedMinutes: 100
    },
    {
      id: 'lab09-notifications',
      title: 'Notifications',
      description: 'Configure notifications and alerting for ArgoCD deployment events and status changes',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/ArgoCD/LAB09-Notifications',
      tags: ['notifications', 'alerting', 'monitoring'],
      difficulty: 'Intermediate',
      duration: '55 minutes',
      estimatedMinutes: 55
    },
    {
      id: 'lab10-rbac-and-sso-security',
      title: 'RBAC And SSO Security',
      description: 'Implement role-based access control and single sign-on for ArgoCD security',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/tree/main/ArgoCD/LAB10-RBAC-And-SSO-Security',
      tags: ['rbac', 'sso', 'security', 'access-control'],
      difficulty: 'Intermediate',
      duration: '85 minutes',
      estimatedMinutes: 85
    }
  ]
};
