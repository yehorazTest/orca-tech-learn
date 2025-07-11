
import { Course } from '../../types/learningPath';

export const kubernetesBeginner: Course = {
  id: 'kubernetes-beginner',
  title: 'Kubernetes Fundamentals',
  description: 'Learn the basics of Kubernetes container orchestration, including pods, services, and deployments',
  longDescription: 'Master Kubernetes fundamentals with hands-on labs covering pods, deployments, services, namespaces, and basic networking. Perfect for getting started with container orchestration.',
  level: 'Beginner',
  difficulty: 'Beginner',
  duration: '40 hours',
  icon: '☸️',
  iconColor: 'text-blue-400',
  color: 'blue',
  gradient: 'from-blue-500 to-cyan-500',
  category: 'DevOps',
  isPopular: true,
  estimatedHours: 40,
  topics: [
    'Kubernetes Architecture',
    'Pods and Containers',
    'Deployments and ReplicaSets',
    'Services and LoadBalancers',
    'Namespaces and Resource Quotas',
    'ConfigMaps and Secrets',
    'Health Checks and Probes',
    'Labels and Selectors',
    'Helm Basics',
    'Networking Fundamentals',
    'Observability Basics'
  ],
  prerequisites: [
    'Basic understanding of containers and Docker',
    'Command line experience',
    'Basic networking knowledge'
  ],
  tags: ['Kubernetes', 'Container Orchestration', 'DevOps', 'Cloud Native'],
  resourceGroups: [
    {
      title: 'Core Concepts',
      description: 'Essential Kubernetes concepts and architecture',
      resources: [
        {
          id: 'k8s-beginner-architecture',
          title: 'Kubernetes Architecture',
          description: 'Understanding the core components and architecture of Kubernetes',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Basics/LAB01-Kubernetes-Architecture',
          tags: ['Architecture', 'Components'],
          difficulty: 'Beginner',
          duration: '2 hours',
          estimatedMinutes: 120
        },
        {
          id: 'k8s-beginner-pods-yaml',
          title: 'Create Pods with YAML',
          description: 'Learn to create and manage pods using YAML manifests',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Basics/LAB02-Create-Pods-with-YAML',
          tags: ['Pods', 'YAML'],
          difficulty: 'Beginner',
          duration: '2 hours',
          estimatedMinutes: 120
        },
        {
          id: 'k8s-beginner-deployments',
          title: 'Deployments and ReplicaSets',
          description: 'Understanding deployments and replica sets for scaling applications',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Basics/LAB03-Deployments-and-ReplicaSets',
          tags: ['Deployments', 'ReplicaSets'],
          difficulty: 'Beginner',
          duration: '2 hours',
          estimatedMinutes: 120
        }
      ]
    },
    {
      title: 'Services and Networking',
      description: 'Learn how to expose and connect applications',
      resources: [
        {
          id: 'k8s-beginner-services',
          title: 'Services and LoadBalancers',
          description: 'Learn to expose applications using services and load balancers',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Basics/LAB04-Services-and-LoadBalancers',
          tags: ['Services', 'LoadBalancers'],
          difficulty: 'Beginner',
          duration: '2 hours',
          estimatedMinutes: 120
        },
        {
          id: 'k8s-beginner-dns',
          title: 'DNS and Service Discovery',
          description: 'Understanding DNS and service discovery in Kubernetes',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Networking/LAB01-DNS-and-Service-Discovery',
          tags: ['DNS', 'Service Discovery'],
          difficulty: 'Beginner',
          duration: '2 hours',
          estimatedMinutes: 120
        },
        {
          id: 'k8s-beginner-service-types',
          title: 'ClusterIP vs NodePort vs LB',
          description: 'Understanding different service types in Kubernetes',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Networking/LAB02-ClusterIP-vs-NodePort-vs-LB',
          tags: ['Services', 'Networking'],
          difficulty: 'Beginner',
          duration: '2 hours',
          estimatedMinutes: 120
        },
        {
          id: 'k8s-beginner-port-forwarding',
          title: 'K8s Port Forwarding and Proxy',
          description: 'Accessing applications using port forwarding and proxy',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Networking/LAB06-K8s-Port-Forwarding-and-Proxy',
          tags: ['Port Forwarding', 'Proxy'],
          difficulty: 'Beginner',
          duration: '2 hours',
          estimatedMinutes: 120
        },
        {
          id: 'k8s-beginner-external-name',
          title: 'ExternalName Services',
          description: 'Using ExternalName services to connect to external resources',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Networking/LAB07-ExternalName-Services',
          tags: ['ExternalName', 'Services'],
          difficulty: 'Beginner',
          duration: '2 hours',
          estimatedMinutes: 120
        }
      ]
    },
    {
      title: 'Configuration Management',
      description: 'Managing configuration and resource organization',
      resources: [
        {
          id: 'k8s-beginner-namespaces',
          title: 'Namespace Resource Quotas',
          description: 'Understanding namespaces and resource management',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Basics/LAB05-Namespace-Resource-Quotas',
          tags: ['Namespaces', 'Resource Quotas'],
          difficulty: 'Beginner',
          duration: '2 hours',
          estimatedMinutes: 120
        },
        {
          id: 'k8s-beginner-configmaps',
          title: 'ConfigMaps and Secrets',
          description: 'Managing configuration and sensitive data in Kubernetes',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Basics/LAB06-ConfigMaps-and-Secrets',
          tags: ['ConfigMaps', 'Secrets'],
          difficulty: 'Beginner',
          duration: '2 hours',
          estimatedMinutes: 120
        },
        {
          id: 'k8s-beginner-labels',
          title: 'Use Labels and Selectors',
          description: 'Organizing and selecting resources with labels',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Basics/LAB09-Use-Labels-and-Selectors',
          tags: ['Labels', 'Selectors'],
          difficulty: 'Beginner',
          duration: '2 hours',
          estimatedMinutes: 120
        }
      ]
    },
    {
      title: 'Health Checks and Debugging',
      description: 'Monitoring and troubleshooting applications',
      resources: [
        {
          id: 'k8s-beginner-probes',
          title: 'Liveness Readiness Probes',
          description: 'Implementing health checks for your applications',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Basics/LAB07-Liveness-Readiness-Probes',
          tags: ['Health Checks', 'Probes'],
          difficulty: 'Beginner',
          duration: '2 hours',
          estimatedMinutes: 120
        },
        {
          id: 'k8s-beginner-debug',
          title: 'Inspect and Debug Pods',
          description: 'Debugging techniques for troubleshooting pod issues',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Basics/LAB08-Inspect-and-Debug-Pods',
          tags: ['Debugging', 'Troubleshooting'],
          difficulty: 'Beginner',
          duration: '2 hours',
          estimatedMinutes: 120
        }
      ]
    },
    {
      title: 'Package Management with Helm',
      description: 'Introduction to Helm package manager',
      resources: [
        {
          id: 'k8s-beginner-helm-vs-kubectl',
          title: 'Helm vs Kubectl',
          description: 'Understanding the differences between Helm and kubectl',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Helm/LAB01-Helm-vs-Kubectl',
          tags: ['Helm', 'kubectl'],
          difficulty: 'Beginner',
          duration: '2 hours',
          estimatedMinutes: 120
        },
        {
          id: 'k8s-beginner-helm-install',
          title: 'Helm Install Bitnami NGINX',
          description: 'Installing applications using Helm charts',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Helm/LAB02-Helm-Install-Bitnami-NGINX',
          tags: ['Helm', 'NGINX'],
          difficulty: 'Beginner',
          duration: '2 hours',
          estimatedMinutes: 120
        },
        {
          id: 'k8s-beginner-helm-upgrade',
          title: 'Helm Upgrade and Rollback',
          description: 'Managing application lifecycle with Helm',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Helm/LAB03-Helm-Upgrade-and-Rollback',
          tags: ['Helm', 'Upgrades'],
          difficulty: 'Beginner',
          duration: '2 hours',
          estimatedMinutes: 120
        }
      ]
    },
    {
      title: 'Observability Fundamentals',
      description: 'Basic monitoring and observability practices',
      resources: [
        {
          id: 'k8s-beginner-metrics',
          title: 'Kubernetes Metrics and APIs',
          description: 'Understanding metrics and API server capabilities',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Observability/LAB01-Kubernetes-Metrics-and-APIs',
          tags: ['Metrics', 'APIs'],
          difficulty: 'Beginner',
          duration: '2 hours',
          estimatedMinutes: 120
        },
        {
          id: 'k8s-beginner-prometheus',
          title: 'Install Prometheus with Helm',
          description: 'Setting up monitoring with Prometheus',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Observability/LAB02-Install-Prometheus-with-Helm',
          tags: ['Prometheus', 'Monitoring'],
          difficulty: 'Beginner',
          duration: '2 hours',
          estimatedMinutes: 120
        },
        {
          id: 'k8s-beginner-grafana',
          title: 'Install Grafana and Connect to Prometheus',
          description: 'Setting up dashboards and visualization with Grafana',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Observability/LAB03-Install-Grafana-and-Connect-to-Prometheus',
          tags: ['Grafana', 'Visualization'],
          difficulty: 'Beginner',
          duration: '2 hours',
          estimatedMinutes: 120
        }
      ]
    }
  ],
  lastUpdated: new Date('2024-01-10')
};
