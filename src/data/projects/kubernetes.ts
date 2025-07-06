
import { Project } from '../../types/project';

export const kubernetesProjects: Project[] = [
  {
    id: 'k8s-microservices',
    title: 'Microservices Deployment on Kubernetes',
    description: 'Deploy and manage a microservices architecture on Kubernetes cluster',
    longDescription: 'Build and deploy a complete microservices application on Kubernetes with service discovery, load balancing, and inter-service communication using Kubernetes native features.',
    difficulty: 'Advanced',
    estimatedHours: 15,
    category: 'Kubernetes',
    tags: ['microservices', 'service-mesh', 'ingress', 'configmap', 'secrets'],
    prerequisites: ['Kubernetes basics', 'Docker knowledge', 'Microservices concepts'],
    objectives: [
      'Deploy microservices on Kubernetes',
      'Configure service discovery and communication',
      'Implement ingress controllers',
      'Manage configuration and secrets'
    ],
    deliverables: [
      'Kubernetes deployment manifests',
      'Service and ingress configurations',
      'ConfigMaps and Secrets setup',
      'Monitoring and logging implementation'
    ],
    resources: [
      {
        id: 'k8s-docs',
        title: 'Kubernetes Documentation',
        description: 'Official Kubernetes documentation',
        type: 'Documentation',
        url: 'https://kubernetes.io/docs/',
        isExternal: true
      }
    ],
    isPopular: true,
    lastUpdated: new Date('2024-01-25')
  },
  {
    id: 'k8s-monitoring',
    title: 'Kubernetes Monitoring Stack',
    description: 'Set up comprehensive monitoring for Kubernetes using Prometheus and Grafana',
    longDescription: 'Implement a complete monitoring and alerting solution for Kubernetes clusters using Prometheus, Grafana, and AlertManager with custom dashboards and alert rules.',
    difficulty: 'Advanced',
    estimatedHours: 12,
    category: 'Kubernetes',
    tags: ['monitoring', 'prometheus', 'grafana', 'alerting', 'metrics'],
    prerequisites: ['Kubernetes administration', 'Monitoring concepts', 'YAML configuration'],
    objectives: [
      'Deploy Prometheus on Kubernetes',
      'Create custom Grafana dashboards',
      'Configure alerting rules',
      'Monitor cluster and application metrics'
    ],
    deliverables: [
      'Prometheus deployment configuration',
      'Grafana dashboards',
      'AlertManager rules',
      'Monitoring best practices guide'
    ],
    resources: [
      {
        id: 'prometheus-docs',
        title: 'Prometheus Documentation',
        description: 'Official Prometheus documentation',
        type: 'Documentation',
        url: 'https://prometheus.io/docs/',
        isExternal: true
      }
    ],
    lastUpdated: new Date('2024-01-28')
  }
];
