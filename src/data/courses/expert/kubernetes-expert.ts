
import { Course } from '../../../types/learningPath';

export const kubernetesExpert: Course = {
  id: 'kubernetes-expert',
  title: 'Kubernetes Expert',
  description: 'Deep dive into Kubernetes architecture, advanced features, and enterprise deployment patterns',
  longDescription: 'Master Kubernetes with advanced topics including custom controllers, operators, service mesh integration, security hardening, and multi-cluster management.',
  icon: '☸️',
  iconColor: 'text-blue-400',
  level: 'Advanced',
  difficulty: 'Advanced',
  duration: '8-10 weeks',
  color: 'blue',
  gradient: 'from-blue-500 to-indigo-500',
  category: 'DevOps',
  topics: ['Custom Controllers', 'Operators', 'Service Mesh', 'Security Hardening', 'Multi-cluster Management'],
  prerequisites: ['DevOps Intermediate', 'Container fundamentals'],
  estimatedHours: 100,
  tags: ['Kubernetes', 'Operators', 'Service Mesh', 'Security', 'Multi-cluster'],
  isPopular: true,
  lastUpdated: new Date('2024-01-25'),
  resourceGroups: [
    {
      title: 'Multi-Cluster & Enterprise Management',
      description: 'Advanced multi-cluster management, enterprise scaling, and cluster orchestration',
      resources: [
        {
          id: 'k8s-expert-multi-cluster-admiralty',
          title: 'Multi-Cluster Management with Admiralty',
          description: 'Implement multi-cluster workload distribution and management with Admiralty',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Advanced-Topics/LAB01-Multi-Cluster-Management-with-Admiralty',
          tags: ['Multi-cluster', 'Admiralty', 'Workload Distribution'],
          difficulty: 'Advanced',
          duration: '5 hours',
          estimatedMinutes: 300,
          prerequisites: ['Kubernetes Professional'],
          isExternal: true,
          lastUpdated: new Date('2024-01-25'),
          isInteractive: true
        },
        {
          id: 'k8s-expert-cluster-api',
          title: 'Kubernetes Cluster API Management',
          description: 'Manage Kubernetes clusters declaratively using Cluster API',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Advanced-Topics/LAB04-Kubernetes-Cluster-API-Management',
          tags: ['Cluster API', 'Infrastructure Management', 'Declarative'],
          difficulty: 'Advanced',
          duration: '5 hours',
          estimatedMinutes: 300,
          prerequisites: ['Multi-Cluster Management with Admiralty'],
          isExternal: true,
          lastUpdated: new Date('2024-01-25'),
          isInteractive: true
        },
        {
          id: 'k8s-expert-disaster-recovery',
          title: 'Advanced Disaster Recovery with Velero',
          description: 'Implement comprehensive disaster recovery strategies with Velero',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Advanced-Topics/LAB06-Advanced-Disaster-Recovery-with-Velero',
          tags: ['Disaster Recovery', 'Velero', 'Backup', 'Restore'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240,
          prerequisites: ['Kubernetes Cluster API Management'],
          isExternal: true,
          lastUpdated: new Date('2024-01-25'),
          isInteractive: true
        }
      ]
    },
    {
      title: 'Custom Controllers & Operators',
      description: 'Build custom Kubernetes controllers, operators, and extend the Kubernetes API',
      resources: [
        {
          id: 'k8s-expert-kubebuilder-operators',
          title: 'Custom Kubernetes Operators with Kubebuilder',
          description: 'Build production-ready Kubernetes operators using Kubebuilder framework',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Advanced-Topics/LAB02-Custom-Kubernetes-Operators-with-Kubebuilder',
          tags: ['Operators', 'Kubebuilder', 'Custom Controllers'],
          difficulty: 'Advanced',
          duration: '6 hours',
          estimatedMinutes: 360,
          prerequisites: ['Advanced Disaster Recovery with Velero'],
          isExternal: true,
          lastUpdated: new Date('2024-01-25'),
          isInteractive: true
        },
        {
          id: 'k8s-expert-admission-controllers',
          title: 'Custom Admission Controllers with Validating Webhooks',
          description: 'Implement custom admission controllers using validating and mutating webhooks',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Advanced-Topics/LAB05-Custom-Admission-Controllers-with-Validating-Webhooks',
          tags: ['Admission Controllers', 'Webhooks', 'Policy Enforcement'],
          difficulty: 'Advanced',
          duration: '5 hours',
          estimatedMinutes: 300,
          prerequisites: ['Custom Kubernetes Operators with Kubebuilder'],
          isExternal: true,
          lastUpdated: new Date('2024-01-25'),
          isInteractive: true
        },
        {
          id: 'k8s-expert-crd-controllers',
          title: 'Custom Resource Definitions and Controllers',
          description: 'Create custom resources and controllers to extend Kubernetes functionality',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Advanced-Topics/LAB10-Custom-Resource-Definitions-and-Controllers',
          tags: ['CRD', 'Custom Resources', 'Controllers'],
          difficulty: 'Advanced',
          duration: '5 hours',
          estimatedMinutes: 300,
          prerequisites: ['Custom Admission Controllers with Validating Webhooks'],
          isExternal: true,
          lastUpdated: new Date('2024-01-25'),
          isInteractive: true
        },
        {
          id: 'k8s-expert-api-aggregation',
          title: 'Kubernetes Extensions and API Aggregation',
          description: 'Extend Kubernetes API with custom API servers and aggregation layers',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Advanced-Topics/LAB12-Kubernetes-Extensions-and-API-Aggregation',
          tags: ['API Aggregation', 'Custom API', 'Extensions'],
          difficulty: 'Advanced',
          duration: '5 hours',
          estimatedMinutes: 300,
          prerequisites: ['Custom Resource Definitions and Controllers'],
          isExternal: true,
          lastUpdated: new Date('2024-01-25'),
          isInteractive: true
        }
      ]
    },
    {
      title: 'Advanced Networking & Service Mesh',
      description: 'Advanced networking patterns, multi-CNI setups, and service mesh implementations',
      resources: [
        {
          id: 'k8s-expert-istio-multi-cluster',
          title: 'Advanced Service Mesh with Istio Multi-Cluster',
          description: 'Implement multi-cluster service mesh with Istio for enterprise environments',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Advanced-Topics/LAB03-Advanced-Service-Mesh-with-Istio-Multi-Cluster',
          tags: ['Service Mesh', 'Istio', 'Multi-cluster', 'Enterprise'],
          difficulty: 'Advanced',
          duration: '6 hours',
          estimatedMinutes: 360,
          prerequisites: ['Kubernetes Extensions and API Aggregation'],
          isExternal: true,
          lastUpdated: new Date('2024-01-25'),
          isInteractive: true
        },
        {
          id: 'k8s-expert-multus-cni',
          title: 'Multi-CNI Networking with Multus',
          description: 'Configure multiple network interfaces and CNI plugins with Multus',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Advanced-Topics/LAB08-Multi-CNI-Networking-with-Multus',
          tags: ['CNI', 'Multus', 'Multi-Network', 'Advanced Networking'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240,
          prerequisites: ['Advanced Service Mesh with Istio Multi-Cluster'],
          isExternal: true,
          lastUpdated: new Date('2024-01-25'),
          isInteractive: true
        }
      ]
    },
    {
      title: 'Advanced GitOps & Progressive Delivery',
      description: 'Advanced GitOps patterns with Flux and progressive delivery strategies',
      resources: [
        {
          id: 'k8s-expert-flux-progressive',
          title: 'Advanced GitOps with Flux and Progressive Delivery',
          description: 'Implement advanced GitOps patterns with Flux and progressive delivery strategies',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Advanced-Topics/LAB09-Advanced-GitOps-with-Flux-and-Progressive-Delivery',
          tags: ['GitOps', 'Flux', 'Progressive Delivery', 'Canary Deployments'],
          difficulty: 'Advanced',
          duration: '5 hours',
          estimatedMinutes: 300,
          prerequisites: ['Multi-CNI Networking with Multus'],
          isExternal: true,
          lastUpdated: new Date('2024-01-25'),
          isInteractive: true
        }
      ]
    },
    {
      title: 'Performance & Security Optimization',
      description: 'Advanced performance tuning, security compliance, and monitoring',
      resources: [
        {
          id: 'k8s-expert-performance-tuning',
          title: 'Kubernetes Performance Tuning and Optimization',
          description: 'Advanced techniques for optimizing Kubernetes cluster and application performance',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Advanced-Topics/LAB07-Kubernetes-Performance-Tuning-and-Optimization',
          tags: ['Performance', 'Optimization', 'Tuning', 'Resource Management'],
          difficulty: 'Advanced',
          duration: '5 hours',
          estimatedMinutes: 300,
          prerequisites: ['Advanced GitOps with Flux and Progressive Delivery'],
          isExternal: true,
          lastUpdated: new Date('2024-01-25'),
          isInteractive: true
        },
        {
          id: 'k8s-expert-falco-security',
          title: 'Advanced Security Compliance with Falco',
          description: 'Implement runtime security monitoring and compliance with Falco',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Advanced-Topics/LAB11-Advanced-Security-Compliance-with-Falco',
          tags: ['Security', 'Falco', 'Runtime Security', 'Compliance'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240,
          prerequisites: ['Kubernetes Performance Tuning and Optimization'],
          isExternal: true,
          lastUpdated: new Date('2024-01-25'),
          isInteractive: true
        }
      ]
    }
  ]
};
