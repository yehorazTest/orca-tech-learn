
import { Course } from '../../types/learningPath';

export const kubernetesIntermediate: Course = {
  id: 'kubernetes-intermediate',
  title: 'Kubernetes Administration',
  description: 'Advanced Kubernetes concepts including GitOps, advanced networking, security, and comprehensive monitoring',
  longDescription: 'Build on your Kubernetes foundation with advanced administration topics including GitOps with ArgoCD, advanced Helm usage, network policies, RBAC, and comprehensive observability practices.',
  level: 'Intermediate',
  difficulty: 'Intermediate',
  duration: '60 hours',
  icon: '☸️',
  iconColor: 'text-yellow-400',
  color: 'yellow',
  gradient: 'from-yellow-500 to-orange-500',
  category: 'DevOps',
  isPopular: true,
  estimatedHours: 60,
  topics: [
    'Advanced Deployments',
    'Persistent Storage',
    'Job Scheduling',
    'Node Management',
    'GitOps with ArgoCD',
    'Advanced Helm',
    'Network Policies',
    'RBAC and Security',
    'Advanced Observability',
    'Debugging and Troubleshooting'
  ],
  prerequisites: [
    'Completed Kubernetes Fundamentals',
    'Basic understanding of Git',
    'Familiarity with YAML and templating'
  ],
  tags: ['Kubernetes', 'GitOps', 'Security', 'Advanced'],
  resourceGroups: [
    {
      title: 'Core Advanced Concepts',
      description: 'Advanced deployment patterns, storage management, and scheduling',
      resources: [
        {
          id: 'k8s-int-rolling-updates',
          title: 'Rolling Updates and Rollbacks',
          description: 'Managing application updates with zero downtime',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Basics/LAB10-Rolling-Updates-and-Rollbacks',
          tags: ['Rolling Updates', 'Rollbacks'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        },
        {
          id: 'k8s-int-persistent-volumes',
          title: 'PersistentVolumes and Claims',
          description: 'Managing persistent storage in Kubernetes',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Basics/LAB11-PersistentVolumes-and-Claims',
          tags: ['Storage', 'PersistentVolumes'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        },
        {
          id: 'k8s-int-jobs',
          title: 'Job and CronJob',
          description: 'Running batch workloads and scheduled tasks',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Basics/LAB12-Job-and-CronJob',
          tags: ['Jobs', 'CronJobs'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        },
        {
          id: 'k8s-int-scheduling',
          title: 'Taint Toleration and Affinity',
          description: 'Advanced pod scheduling and node management',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Basics/LAB13-Taint-Toleration-and-Affinity',
          tags: ['Scheduling', 'Node Management'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        }
      ]
    },
    {
      title: 'GitOps with ArgoCD',
      description: 'Introduction to GitOps methodology and ArgoCD implementation',
      resources: [
        {
          id: 'k8s-int-argocd-install',
          title: 'Install ArgoCD on Minikube',
          description: 'Setting up GitOps with ArgoCD',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB01-Install-ArgoCD-on-Minikube',
          tags: ['ArgoCD', 'GitOps'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        },
        {
          id: 'k8s-int-gitops-intro',
          title: 'Intro to GitOps Model',
          description: 'Understanding GitOps principles and practices',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB02-Intro-to-GitOps-Model',
          tags: ['GitOps', 'Methodology'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        },
        {
          id: 'k8s-int-argocd-git',
          title: 'Connect ArgoCD to Git',
          description: 'Connecting ArgoCD to Git repositories',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB03-Connect-ArgoCD-to-Git',
          tags: ['ArgoCD', 'Git Integration'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        },
        {
          id: 'k8s-int-sync-policies',
          title: 'Sync Policies Manual vs Auto',
          description: 'Understanding different synchronization strategies',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB04-Sync-Policies-Manual-vs-Auto',
          tags: ['Sync Policies', 'Automation'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        }
      ]
    },
    {
      title: 'Advanced Helm',
      description: 'Advanced Helm concepts including templating, custom charts, and lifecycle management',
      resources: [
        {
          id: 'k8s-int-helm-values',
          title: 'Helm Values and Templates',
          description: 'Advanced Helm templating and value management',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Helm/LAB04-Helm-Values-and-Templates',
          tags: ['Helm', 'Templates'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        },
        {
          id: 'k8s-int-helm-functions',
          title: 'Template Functions and Helpers',
          description: 'Using advanced Helm template functions',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Helm/LAB05-Template-Functions-and-Helpers',
          tags: ['Helm', 'Functions'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        },
        {
          id: 'k8s-int-custom-chart',
          title: 'Create Custom Helm Chart',
          description: 'Building your own Helm charts from scratch',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Helm/LAB06-Create-Custom-Helm-Chart',
          tags: ['Helm', 'Custom Charts'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        },
        {
          id: 'k8s-int-helm-hooks',
          title: 'Helm Hooks and Lifecycle',
          description: 'Managing chart lifecycle with hooks',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Helm/LAB07-Helm-Hooks-and-Lifecycle',
          tags: ['Helm', 'Hooks'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        },
        {
          id: 'k8s-int-helm-dependencies',
          title: 'Helm with Dependencies',
          description: 'Managing chart dependencies and sub-charts',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Helm/LAB08-Helm-with-Dependencies',
          tags: ['Helm', 'Dependencies'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        },
        {
          id: 'k8s-int-helm-test',
          title: 'Helm Test and Lint',
          description: 'Testing and validating Helm charts',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Helm/LAB11-Helm-Test-and-Lint',
          tags: ['Helm', 'Testing'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        },
        {
          id: 'k8s-int-helm-debug',
          title: 'Debugging Helm Charts',
          description: 'Troubleshooting and debugging Helm deployments',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Helm/LAB12-Debugging-Helm-Charts',
          tags: ['Helm', 'Debugging'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        }
      ]
    },
    {
      title: 'Advanced Networking',
      description: 'Advanced networking concepts including ingress, network policies, and multi-namespace communication',
      resources: [
        {
          id: 'k8s-int-ingress',
          title: 'Ingress vs Services',
          description: 'Advanced networking with Ingress controllers',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Networking/LAB03-Ingress-vs-Services',
          tags: ['Ingress', 'Networking'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        },
        {
          id: 'k8s-int-network-policies',
          title: 'NetworkPolicies with Calico',
          description: 'Implementing network security with policies',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Networking/LAB04-NetworkPolicies-with-Calico',
          tags: ['Network Policies', 'Security'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        },
        {
          id: 'k8s-int-multi-namespace',
          title: 'Multi-Namespace Networking',
          description: 'Cross-namespace communication and isolation',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Networking/LAB05-Multi-Namespace-Networking',
          tags: ['Namespaces', 'Networking'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        },
        {
          id: 'k8s-int-network-failures',
          title: 'Testing Network Failures',
          description: 'Chaos engineering and network resilience testing',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Networking/LAB08-Testing-Network-Failures',
          tags: ['Network Testing', 'Chaos Engineering'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        },
        {
          id: 'k8s-int-network-debug',
          title: 'Network Debugging with NetworkTools',
          description: 'Advanced network troubleshooting techniques',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Networking/LAB10-Network-Debugging-with-NetworkTools',
          tags: ['Network Debugging', 'Tools'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        },
        {
          id: 'k8s-int-tcp-udp',
          title: 'TCP vs UDP Services',
          description: 'Understanding different service protocols',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Networking/LAB11-TCP-vs-UDP-Services',
          tags: ['TCP', 'UDP'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        }
      ]
    },
    {
      title: 'Observability & Monitoring',
      description: 'Advanced monitoring, logging, and debugging techniques',
      resources: [
        {
          id: 'k8s-int-custom-metrics',
          title: 'Exporters and Custom Metrics',
          description: 'Creating custom metrics and exporters',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Observability/LAB04-Exporters-and-Custom-Metrics',
          tags: ['Metrics', 'Exporters'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        },
        {
          id: 'k8s-int-kubectl-debug',
          title: 'Use kubectl debug and Ephemeral Containers',
          description: 'Advanced debugging with ephemeral containers',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Observability/LAB06-Use-kubectl-debug-and-Ephemeral-Containers',
          tags: ['Debugging', 'Ephemeral Containers'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        },
        {
          id: 'k8s-int-loki',
          title: 'Loki Logging Basics',
          description: 'Log aggregation with Loki',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Observability/LAB08-Loki-Logging-Basics',
          tags: ['Logging', 'Loki'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        },
        {
          id: 'k8s-int-fluentbit',
          title: 'Centralized Logs with FluentBit',
          description: 'Log collection and forwarding with FluentBit',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Observability/LAB09-Centralized-Logs-with-FluentBit',
          tags: ['Logging', 'FluentBit'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        },
        {
          id: 'k8s-int-observability-types',
          title: 'Logging vs Metrics vs Tracing',
          description: 'Understanding different observability approaches',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Observability/LAB10-Logging-vs-Metrics-vs-Tracing',
          tags: ['Observability', 'Monitoring'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        }
      ]
    },
    {
      title: 'Security & RBAC',
      description: 'Security practices, RBAC, and vulnerability management',
      resources: [
        {
          id: 'k8s-int-rbac',
          title: 'RBAC Create and Bind Roles',
          description: 'Implementing role-based access control',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Security/LAB01-RBAC-Create-and-Bind-Roles',
          tags: ['RBAC', 'Security'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        },
        {
          id: 'k8s-int-pod-security',
          title: 'Use PodSecurityAdmission Policies',
          description: 'Implementing pod security standards',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Security/LAB03-Use-PodSecurityAdmission-Policies',
          tags: ['Pod Security', 'Policies'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        },
        {
          id: 'k8s-int-secrets-mgmt',
          title: 'Secrets Management and Encryption',
          description: 'Advanced secrets management practices',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Security/LAB06-Secrets-Management-and-Encryption',
          tags: ['Secrets', 'Encryption'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        },
        {
          id: 'k8s-int-trivy',
          title: 'Scan Images with Trivy',
          description: 'Container image vulnerability scanning',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Security/LAB07-Scan-Images-with-Trivy',
          tags: ['Security Scanning', 'Trivy'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        },
        {
          id: 'k8s-int-service-accounts',
          title: 'ServiceAccount Tokens and Usage',
          description: 'Managing service account authentication',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Security/LAB09-ServiceAccount-Tokens-and-Usage',
          tags: ['ServiceAccounts', 'Authentication'],
          difficulty: 'Intermediate',
          duration: '3 hours',
          estimatedMinutes: 180
        }
      ]
    }
  ],
  lastUpdated: new Date('2024-01-15')
};
