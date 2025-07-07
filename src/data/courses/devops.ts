import { Course } from '../../types/learningPath';

export const devOpsCourses: Course[] = [
  {
    id: 'devops-beginner',
    title: 'DevOps Fundamentals',
    description: 'Learn the basics of DevOps practices, tools, and methodologies',
    longDescription: 'This comprehensive course introduces you to DevOps fundamentals, covering essential concepts like version control, continuous integration, containerization with Docker, and basic Kubernetes operations. Perfect for beginners looking to start their DevOps journey.',
    level: 'Beginner',
    duration: '6 weeks',
    topics: [
      'DevOps Culture and Practices',
      'Git and Version Control',
      'CI/CD Basics',
      'Docker Containerization',
      'Kubernetes Fundamentals',
      'Infrastructure as Code Basics'
    ],
    prerequisites: [
      'Basic Linux command line knowledge',
      'Understanding of software development lifecycle',
      'Familiarity with any programming language'
    ],
    tags: ['devops', 'docker', 'kubernetes', 'ci-cd', 'git', 'beginner'],
    resources: [],
    resourceCategories: [
      {
        title: 'Python Labs',
        defaultOpen: true,
        resources: [
          {
            id: 'python-lab-01',
            title: 'Python Basics',
            description: 'Introduction to Python programming language fundamentals',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/LAB01-Python-Basics',
            tags: ['python', 'basics', 'programming']
          },
          {
            id: 'python-lab-02',
            title: 'Python Functions and Modules',
            description: 'Learn about functions, modules, and code organization in Python',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/LAB02-Python-Functions-and-Modules',
            tags: ['python', 'functions', 'modules']
          },
          {
            id: 'python-lab-03',
            title: 'Python File I/O',
            description: 'Work with files and data persistence in Python',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/LAB03-Python-File-IO',
            tags: ['python', 'file', 'io']
          }
        ]
      },
      {
        title: 'Docker Labs',
        defaultOpen: true,
        resources: [
          {
            id: 'docker-lab-01',
            title: 'Docker Installation and Setup',
            description: 'Install Docker and set up your first container',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/docker-labs/tree/main/LAB01-Docker-Installation-and-Setup',
            tags: ['docker', 'installation', 'containers']
          },
          {
            id: 'docker-lab-02',
            title: 'Docker Images and Containers',
            description: 'Learn to build and manage Docker images and containers',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/docker-labs/tree/main/LAB02-Docker-Images-and-Containers',
            tags: ['docker', 'images', 'containers']
          },
          {
            id: 'docker-lab-03',
            title: 'Docker Networking Basics',
            description: 'Understand Docker networking and container communication',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/docker-labs/tree/main/LAB03-Docker-Networking-Basics',
            tags: ['docker', 'networking', 'containers']
          }
        ]
      },
      {
        title: 'Kubernetes - Basics',
        defaultOpen: false,
        resources: [
          {
            id: 'k8s-basics-01',
            title: 'Kubernetes Architecture',
            description: 'Understand Kubernetes cluster architecture and core components',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Basics/LAB01-Kubernetes-Architecture',
            tags: ['kubernetes', 'architecture', 'cluster']
          },
          {
            id: 'k8s-basics-02',
            title: 'Create Pods with YAML',
            description: 'Learn to create and manage Kubernetes Pods using YAML manifests',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Basics/LAB02-Create-Pods-with-YAML',
            tags: ['kubernetes', 'pods', 'yaml']
          },
          {
            id: 'k8s-basics-03',
            title: 'Deployments and ReplicaSets',
            description: 'Master Kubernetes Deployments and ReplicaSets for application management',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Basics/LAB03-Deployments-and-ReplicaSets',
            tags: ['kubernetes', 'deployments', 'replicasets']
          },
          {
            id: 'k8s-basics-04',
            title: 'Services and LoadBalancers',
            description: 'Configure Kubernetes Services and LoadBalancers for network access',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Basics/LAB04-Services-and-LoadBalancers',
            tags: ['kubernetes', 'services', 'loadbalancer']
          },
          {
            id: 'k8s-basics-05',
            title: 'Namespace Resource Quotas',
            description: 'Implement resource quotas and limits using Kubernetes Namespaces',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Basics/LAB05-Namespace-Resource-Quotas',
            tags: ['kubernetes', 'namespaces', 'quotas']
          },
          {
            id: 'k8s-basics-06',
            title: 'ConfigMaps and Secrets',
            description: 'Manage application configuration with ConfigMaps and Secrets',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Basics/LAB06-ConfigMaps-and-Secrets',
            tags: ['kubernetes', 'configmaps', 'secrets']
          },
          {
            id: 'k8s-basics-07',
            title: 'Liveness Readiness Probes',
            description: 'Configure health checks with liveness and readiness probes',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Basics/LAB07-Liveness-Readiness-Probes',
            tags: ['kubernetes', 'probes', 'health-checks']
          },
          {
            id: 'k8s-basics-08',
            title: 'Inspect and Debug Pods',
            description: 'Learn debugging techniques for Kubernetes Pods',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Basics/LAB08-Inspect-and-Debug-Pods',
            tags: ['kubernetes', 'debugging', 'troubleshooting']
          },
          {
            id: 'k8s-basics-09',
            title: 'Use Labels and Selectors',
            description: 'Organize resources with Kubernetes labels and selectors',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Basics/LAB09-Use-Labels-and-Selectors',
            tags: ['kubernetes', 'labels', 'selectors']
          }
        ]
      },
      {
        title: 'Helm - Package Manager',
        defaultOpen: false,
        resources: [
          {
            id: 'helm-01',
            title: 'Helm vs Kubectl',
            description: 'Compare Helm and kubectl for Kubernetes application management',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Helm/LAB01-Helm-vs-Kubectl',
            tags: ['helm', 'kubectl', 'comparison']
          },
          {
            id: 'helm-02',
            title: 'Helm Install Bitnami NGINX',
            description: 'Install NGINX using Helm and Bitnami charts',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Helm/LAB02-Helm-Install-Bitnami-NGINX',
            tags: ['helm', 'nginx', 'bitnami']
          },
          {
            id: 'helm-03',
            title: 'Helm Upgrade and Rollback',
            description: 'Manage application lifecycle with Helm upgrades and rollbacks',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Helm/LAB03-Helm-Upgrade-and-Rollback',
            tags: ['helm', 'upgrade', 'rollback']
          }
        ]
      },
      {
        title: 'Networking',
        defaultOpen: false,
        resources: [
          {
            id: 'k8s-net-01',
            title: 'DNS and Service Discovery',
            description: 'Understand Kubernetes DNS and service discovery mechanisms',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Networking/LAB01-DNS-and-Service-Discovery',
            tags: ['kubernetes', 'networking', 'dns']
          },
          {
            id: 'k8s-net-02',
            title: 'ClusterIP vs NodePort vs LoadBalancer',
            description: 'Compare different Kubernetes service types',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Networking/LAB02-ClusterIP-vs-NodePort-vs-LB',
            tags: ['kubernetes', 'services', 'networking']
          },
          {
            id: 'k8s-net-06',
            title: 'Port Forwarding and Proxy',
            description: 'Access applications using port forwarding and proxy',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Networking/LAB06-K8s-Port-Forwarding-and-Proxy',
            tags: ['kubernetes', 'port-forwarding', 'proxy']
          },
          {
            id: 'k8s-net-07',
            title: 'ExternalName Services',
            description: 'Configure ExternalName services for external resource access',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Networking/LAB07-ExternalName-Services',
            tags: ['kubernetes', 'externalname', 'services']
          }
        ]
      },
      {
        title: 'Observability',
        defaultOpen: false,
        resources: [
          {
            id: 'k8s-obs-01',
            title: 'Kubernetes Metrics and APIs',
            description: 'Explore Kubernetes metrics and monitoring APIs',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Observability/LAB01-Kubernetes-Metrics-and-APIs',
            tags: ['kubernetes', 'monitoring', 'metrics']
          },
          {
            id: 'k8s-obs-02',
            title: 'Install Prometheus with Helm',
            description: 'Set up Prometheus monitoring using Helm charts',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Observability/LAB02-Install-Prometheus-with-Helm',
            tags: ['prometheus', 'monitoring', 'helm']
          },
          {
            id: 'k8s-obs-03',
            title: 'Install Grafana and Connect to Prometheus',
            description: 'Set up Grafana dashboards with Prometheus integration',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Observability/LAB03-Install-Grafana-and-Connect-to-Prometheus',
            tags: ['grafana', 'prometheus', 'dashboards']
          }
        ]
      }
    ]
  },
  {
    id: 'devops-intermediate',
    title: 'DevOps Engineering',
    description: 'Intermediate DevOps practices with advanced automation and monitoring',
    longDescription: 'Build upon your DevOps foundation with advanced topics including GitOps with ArgoCD, advanced Helm templating, network policies, security practices, and comprehensive observability. This course prepares you for real-world DevOps engineering roles.',
    level: 'Intermediate',
    duration: '8 weeks',
    topics: [
      'GitOps with ArgoCD',
      'Advanced Helm and Templating',
      'Kubernetes Security',
      'Network Policies and Service Mesh',
      'Advanced Monitoring and Logging',
      'Infrastructure Automation'
    ],
    prerequisites: [
      'Completion of DevOps Fundamentals or equivalent knowledge',
      'Experience with Docker and Kubernetes basics',
      'Understanding of YAML and basic templating',
      'Familiarity with Git workflows'
    ],
    tags: ['devops', 'kubernetes', 'gitops', 'argocd', 'helm', 'security', 'intermediate'],
    resources: [],
    resourceCategories: [
      {
        title: 'Kubernetes - Advanced Basics',
        defaultOpen: false,
        resources: [
          {
            id: 'k8s-basics-10',
            title: 'Rolling Updates and Rollbacks',
            description: 'Master application updates with rolling deployments and rollbacks',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Basics/LAB10-Rolling-Updates-and-Rollbacks',
            tags: ['kubernetes', 'deployments', 'rollbacks']
          },
          {
            id: 'k8s-basics-11',
            title: 'PersistentVolumes and Claims',
            description: 'Manage stateful applications with persistent storage',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Basics/LAB11-PersistentVolumes-and-Claims',
            tags: ['kubernetes', 'storage', 'persistent-volumes']
          },
          {
            id: 'k8s-basics-12',
            title: 'Job and CronJob',
            description: 'Run batch workloads with Kubernetes Jobs and CronJobs',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Basics/LAB12-Job-and-CronJob',
            tags: ['kubernetes', 'jobs', 'cronjobs']
          },
          {
            id: 'k8s-basics-13',
            title: 'Taint Toleration and Affinity',
            description: 'Control pod scheduling with taints, tolerations, and affinity',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Basics/LAB13-Taint-Toleration-and-Affinity',
            tags: ['kubernetes', 'scheduling', 'affinity']
          }
        ]
      },
      {
        title: 'GitOps with ArgoCD',
        defaultOpen: false,
        resources: [
          {
            id: 'argocd-01',
            title: 'Install ArgoCD on Minikube',
            description: 'Set up ArgoCD for GitOps workflows on Minikube',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB01-Install-ArgoCD-on-Minikube',
            tags: ['argocd', 'gitops', 'minikube']
          },
          {
            id: 'argocd-02',
            title: 'Intro to GitOps Model',
            description: 'Understand GitOps principles and implementation patterns',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB02-Intro-to-GitOps-Model',
            tags: ['gitops', 'principles', 'workflows']
          },
          {
            id: 'argocd-03',
            title: 'Connect ArgoCD to Git',
            description: 'Configure ArgoCD to sync with Git repositories',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB03-Connect-ArgoCD-to-Git',
            tags: ['argocd', 'git', 'synchronization']
          },
          {
            id: 'argocd-04',
            title: 'Sync Policies Manual vs Auto',
            description: 'Configure automatic and manual synchronization policies',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB04-Sync-Policies-Manual-vs-Auto',
            tags: ['argocd', 'sync-policies', 'automation']
          }
        ]
      },
      {
        title: 'Helm - Advanced',
        defaultOpen: false,
        resources: [
          {
            id: 'helm-04',
            title: 'Helm Values and Templates',
            description: 'Master Helm templating with values and template functions',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Helm/LAB04-Helm-Values-and-Templates',
            tags: ['helm', 'templates', 'values']
          },
          {
            id: 'helm-05',
            title: 'Template Functions and Helpers',
            description: 'Use advanced Helm template functions and helper templates',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Helm/LAB05-Template-Functions-and-Helpers',
            tags: ['helm', 'functions', 'templates']
          },
          {
            id: 'helm-06',
            title: 'Create Custom Helm Chart',
            description: 'Build custom Helm charts for your applications',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Helm/LAB06-Create-Custom-Helm-Chart',
            tags: ['helm', 'custom-charts', 'development']
          },
          {
            id: 'helm-07',
            title: 'Helm Hooks and Lifecycle',
            description: 'Implement Helm hooks for advanced deployment workflows',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Helm/LAB07-Helm-Hooks-and-Lifecycle',
            tags: ['helm', 'hooks', 'lifecycle']
          },
          {
            id: 'helm-08',
            title: 'Helm with Dependencies',
            description: 'Manage chart dependencies and subcharts',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Helm/LAB08-Helm-with-Dependencies',
            tags: ['helm', 'dependencies', 'subcharts']
          },
          {
            id: 'helm-11',
            title: 'Helm Test and Lint',
            description: 'Test and validate Helm charts with built-in tools',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Helm/LAB11-Helm-Test-and-Lint',
            tags: ['helm', 'testing', 'validation']
          },
          {
            id: 'helm-12',
            title: 'Debugging Helm Charts',
            description: 'Debug and troubleshoot Helm chart issues',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Helm/LAB12-Debugging-Helm-Charts',
            tags: ['helm', 'debugging', 'troubleshooting']
          }
        ]
      },
      {
        title: 'Networking - Advanced',
        defaultOpen: false,
        resources: [
          {
            id: 'k8s-net-03',
            title: 'Ingress vs Services',
            description: 'Compare Ingress controllers and Services for traffic management',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Networking/LAB03-Ingress-vs-Services',
            tags: ['kubernetes', 'ingress', 'services']
          },
          {
            id: 'k8s-net-04',
            title: 'NetworkPolicies with Calico',
            description: 'Implement network security with Calico NetworkPolicies',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Networking/LAB04-NetworkPolicies-with-Calico',
            tags: ['kubernetes', 'network-policies', 'calico']
          },
          {
            id: 'k8s-net-05',
            title: 'Multi-Namespace Networking',
            description: 'Configure networking across multiple Kubernetes namespaces',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Networking/LAB05-Multi-Namespace-Networking',
            tags: ['kubernetes', 'namespaces', 'networking']
          },
          {
            id: 'k8s-net-08',
            title: 'Testing Network Failures',
            description: 'Test network resilience and failure scenarios',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Networking/LAB08-Testing-Network-Failures',
            tags: ['kubernetes', 'networking', 'testing']
          },
          {
            id: 'k8s-net-10',
            title: 'Network Debugging with NetworkTools',
            description: 'Debug network issues using specialized tools',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Networking/LAB10-Network-Debugging-with-NetworkTools',
            tags: ['kubernetes', 'debugging', 'networking']
          },
          {
            id: 'k8s-net-11',
            title: 'TCP vs UDP Services',
            description: 'Configure and manage TCP and UDP services',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Networking/LAB11-TCP-vs-UDP-Services',
            tags: ['kubernetes', 'tcp', 'udp']
          }
        ]
      },
      {
        title: 'Observability - Advanced',
        defaultOpen: false,
        resources: [
          {
            id: 'k8s-obs-04',
            title: 'Exporters and Custom Metrics',
            description: 'Create custom metrics and exporters for Prometheus',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Observability/LAB04-Exporters-and-Custom-Metrics',
            tags: ['prometheus', 'exporters', 'metrics']
          },
          {
            id: 'k8s-obs-06',
            title: 'kubectl debug and Ephemeral Containers',
            description: 'Debug running pods with ephemeral containers',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Observability/LAB06-Use-kubectl-debug-and-Ephemeral-Containers',
            tags: ['kubernetes', 'debugging', 'containers']
          },
          {
            id: 'k8s-obs-08',
            title: 'Loki Logging Basics',
            description: 'Set up centralized logging with Grafana Loki',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Observability/LAB08-Loki-Logging-Basics',
            tags: ['loki', 'logging', 'grafana']
          },
          {
            id: 'k8s-obs-09',
            title: 'Centralized Logs with FluentBit',
            description: 'Implement log aggregation using FluentBit',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Observability/LAB09-Centralized-Logs-with-FluentBit',
            tags: ['fluentbit', 'logging', 'aggregation']
          },
          {
            id: 'k8s-obs-10',
            title: 'Logging vs Metrics vs Tracing',
            description: 'Understand the three pillars of observability',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Observability/LAB10-Logging-vs-Metrics-vs-Tracing',
            tags: ['observability', 'logging', 'metrics', 'tracing']
          }
        ]
      },
      {
        title: 'Security',
        defaultOpen: false,
        resources: [
          {
            id: 'k8s-sec-01',
            title: 'RBAC Create and Bind Roles',
            description: 'Implement Role-Based Access Control in Kubernetes',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Security/LAB01-RBAC-Create-and-Bind-Roles',
            tags: ['kubernetes', 'rbac', 'security']
          },
          {
            id: 'k8s-sec-03',
            title: 'PodSecurityAdmission Policies',
            description: 'Configure Pod Security Standards and admission policies',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Security/LAB03-Use-PodSecurityAdmission-Policies',
            tags: ['kubernetes', 'security', 'policies']
          },
          {
            id: 'k8s-sec-06',
            title: 'Secrets Management and Encryption',
            description: 'Secure secrets management and encryption at rest',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Security/LAB06-Secrets-Management-and-Encryption',
            tags: ['kubernetes', 'secrets', 'encryption']
          },
          {
            id: 'k8s-sec-07',
            title: 'Scan Images with Trivy',
            description: 'Implement container image vulnerability scanning',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Security/LAB07-Scan-Images-with-Trivy',
            tags: ['security', 'trivy', 'scanning']
          },
          {
            id: 'k8s-sec-09',
            title: 'ServiceAccount Tokens and Usage',
            description: 'Manage ServiceAccount tokens and authentication',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Security/LAB09-ServiceAccount-Tokens-and-Usage',
            tags: ['kubernetes', 'serviceaccount', 'authentication']
          }
        ]
      }
    ]
  },
  {
    id: 'devops-professional',
    title: 'DevOps Architecture & Leadership',
    description: 'Advanced DevOps architecture patterns and enterprise practices',
    longDescription: 'Master enterprise-level DevOps practices including advanced GitOps patterns, service mesh architecture, comprehensive security frameworks, and full observability stacks. This course prepares you for senior DevOps and platform engineering roles.',
    level: 'Professional',
    duration: '10 weeks',
    topics: [
      'Advanced GitOps Patterns',
      'Service Mesh with Istio',
      'Enterprise Security Frameworks',
      'Full Observability Stack',
      'Platform Engineering',
      'Multi-Environment Management'
    ],
    prerequisites: [
      'Completion of DevOps Engineering or equivalent experience',
      'Solid understanding of Kubernetes and containerization',
      'Experience with CI/CD pipelines and GitOps',
      'Knowledge of monitoring and security basics'
    ],
    tags: ['devops', 'architecture', 'gitops', 'service-mesh', 'security', 'observability', 'professional'],
    resources: [],
    resourceCategories: [
      {
        title: 'GitOps - Advanced Patterns',
        defaultOpen: false,
        resources: [
          {
            id: 'argocd-05',
            title: 'Kustomize with ArgoCD',
            description: 'Use Kustomize for configuration management with ArgoCD',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB05-Kustomize-with-ArgoCD',
            tags: ['argocd', 'kustomize', 'configuration']
          },
          {
            id: 'argocd-06',
            title: 'Helm Charts with ArgoCD',
            description: 'Deploy Helm charts using ArgoCD GitOps workflows',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB06-Helm-Charts-with-ArgoCD',
            tags: ['argocd', 'helm', 'gitops']
          },
          {
            id: 'argocd-07',
            title: 'App-of-Apps Pattern',
            description: 'Implement the App-of-Apps pattern for multi-application management',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB07-App-of-Apps-Pattern',
            tags: ['argocd', 'app-of-apps', 'patterns']
          },
          {
            id: 'argocd-08',
            title: 'GitOps Promotion Strategy',
            description: 'Design promotion strategies for multi-environment GitOps',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB08-GitOps-Promotion-Strategy',
            tags: ['gitops', 'promotion', 'environments']
          },
          {
            id: 'argocd-09',
            title: 'ArgoCD Notifications and Webhooks',
            description: 'Configure notifications and webhooks for GitOps events',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB09-ArgoCD-Notifications-and-Webhooks',
            tags: ['argocd', 'notifications', 'webhooks']
          },
          {
            id: 'argocd-10',
            title: 'ArgoCD Rollbacks and Revisions',
            description: 'Manage application rollbacks and revision history',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB10-ArgoCD-Rollbacks-and-Revisions',
            tags: ['argocd', 'rollbacks', 'revisions']
          },
          {
            id: 'argocd-11',
            title: 'Sync Waves and Phases',
            description: 'Control deployment order with sync waves and phases',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB11-Sync-Waves-and-Phases',
            tags: ['argocd', 'sync-waves', 'orchestration']
          },
          {
            id: 'argocd-12',
            title: 'Multi-Env Staging to Prod',
            description: 'Implement multi-environment promotion workflows',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB12-Multi-Env-Staging-to-Prod',
            tags: ['argocd', 'multi-environment', 'promotion']
          },
          {
            id: 'argocd-13',
            title: 'SSO and RBAC for ArgoCD',
            description: 'Configure Single Sign-On and RBAC for ArgoCD',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB13-SSO-and-RBAC-for-ArgoCD',
            tags: ['argocd', 'sso', 'rbac']
          },
          {
            id: 'argocd-14',
            title: 'Troubleshoot ArgoCD Apps',
            description: 'Debug and troubleshoot ArgoCD application issues',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB14-Troubleshoot-ArgoCD-Apps',
            tags: ['argocd', 'troubleshooting', 'debugging']
          },
          {
            id: 'argocd-15',
            title: 'ArgoCD and SealedSecrets',
            description: 'Manage secrets securely with SealedSecrets and ArgoCD',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB15-ArgoCD-and-SealedSecrets',
            tags: ['argocd', 'sealed-secrets', 'security']
          }
        ]
      },
      {
        title: 'Helm - Enterprise',
        defaultOpen: false,
        resources: [
          {
            id: 'helm-09',
            title: 'Versioning and Chart Repository',
            description: 'Manage Helm chart versions and repositories',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Helm/LAB09-Versioning-and-Chart-Repository',
            tags: ['helm', 'versioning', 'repositories']
          },
          {
            id: 'helm-10',
            title: 'Helm Secrets and SOPS',
            description: 'Secure secret management with Helm Secrets and SOPS',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Helm/LAB10-Helm-Secrets-and-SOPS',
            tags: ['helm', 'secrets', 'sops']
          },
          {
            id: 'helm-13',
            title: 'Helm GitOps with ArgoCD',
            description: 'Integrate Helm with GitOps workflows using ArgoCD',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Helm/LAB13-Helm-GitOps-with-ArgoCD',
            tags: ['helm', 'gitops', 'argocd']
          }
        ]
      },
      {
        title: 'Service Mesh & Advanced Networking',
        defaultOpen: false,
        resources: [
          {
            id: 'k8s-net-09',
            title: 'Service Mesh Intro with Istio',
            description: 'Introduction to service mesh architecture with Istio',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Networking/LAB09-Service-Mesh-Intro-with-Istio',
            tags: ['istio', 'service-mesh', 'networking']
          },
          {
            id: 'k8s-net-12',
            title: 'Ingress Authentication Mechanisms',
            description: 'Implement authentication at the ingress layer',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Networking/LAB12-Ingress-Authentication-Mechanisms',
            tags: ['kubernetes', 'ingress', 'authentication']
          }
        ]
      },
      {
        title: 'Full Observability Stack',
        defaultOpen: false,
        resources: [
          {
            id: 'k8s-obs-05',
            title: 'Alerting Rules in Prometheus',
            description: 'Configure advanced alerting rules and notifications',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Observability/LAB05-Alerting-Rules-in-Prometheus',
            tags: ['prometheus', 'alerting', 'monitoring']
          },
          {
            id: 'k8s-obs-07',
            title: 'Trace Requests with Jaeger',
            description: 'Implement distributed tracing with Jaeger',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Observability/LAB07-Trace-Requests-with-Jaeger',
            tags: ['jaeger', 'tracing', 'distributed']
          },
          {
            id: 'k8s-obs-11',
            title: 'Tracing with Tempo and Otel',
            description: 'Advanced tracing with Grafana Tempo and OpenTelemetry',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Observability/LAB11-Tracing-with-Tempo-and-Otel',
            tags: ['tempo', 'opentelemetry', 'tracing']
          },
          {
            id: 'k8s-obs-12',
            title: 'Full Observability Stack',
            description: 'Deploy complete observability stack (metrics, logs, traces)',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Observability/LAB12-Full-Observability-Stack',
            tags: ['observability', 'full-stack', 'monitoring']
          }
        ]
      },
      {
        title: 'Enterprise Security',
        defaultOpen: false,
        resources: [
          {
            id: 'k8s-sec-02',
            title: 'API Access with OPA Gatekeeper',
            description: 'Restrict API access using Open Policy Agent Gatekeeper',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Security/LAB02-Restrict-API-Access-with-OPA-Gatekeeper',
            tags: ['kubernetes', 'opa', 'gatekeeper', 'security']
          },
          {
            id: 'k8s-sec-04',
            title: 'NetworkPolicies for Isolation',
            description: 'Implement network isolation with advanced NetworkPolicies',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Security/LAB04-NetworkPolicies-for-Isolation',
            tags: ['kubernetes', 'network-policies', 'isolation']
          },
          {
            id: 'k8s-sec-05',
            title: 'Seccomp and AppArmor Integration',
            description: 'Enhance container security with Seccomp and AppArmor',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Security/LAB05-Seccomp-and-AppArmor-Integration',
            tags: ['security', 'seccomp', 'apparmor']
          },
          {
            id: 'k8s-sec-08',
            title: 'KubeBench and Benchmarks',
            description: 'Security benchmarking with CIS Kubernetes Benchmark',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Security/LAB08-KubeBench-and-Benchmarks',
            tags: ['security', 'benchmarks', 'cis']
          },
          {
            id: 'k8s-sec-10',
            title: 'AuditLogs and API Server',
            description: 'Configure audit logging for Kubernetes API server',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Security/LAB10-AuditLogs-and-API-Server',
            tags: ['kubernetes', 'audit-logs', 'api-server']
          },
          {
            id: 'k8s-sec-11',
            title: 'Admission Controllers and Gatekeeper',
            description: 'Advanced admission control with custom controllers',
            type: 'lab',
            url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Security/LAB11-Admission-Controllers-and-Gatekeeper',
            tags: ['kubernetes', 'admission-controllers', 'gatekeeper']
          }
        ]
      }
    ]
  }
];
