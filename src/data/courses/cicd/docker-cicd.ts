
import { Course } from '../../../types/learningPath';

export const dockerCICDCourse: Course = {
  id: 'docker-cicd',
  title: 'Docker CI/CD',
  description: 'Master Docker continuous integration and deployment with automated testing, multi-stage builds, and cloud deployments',
  longDescription: 'Learn advanced Docker CI/CD practices including automated testing pipelines, multi-stage builds, secrets management, and deployment to cloud platforms like AWS ECS. Perfect for DevOps engineers looking to implement robust containerized deployment workflows.',
  level: 'Intermediate',
  duration: '45 hours',
  topics: [
    'Docker CI/CD pipelines',
    'Multi-stage builds optimization',
    'Container testing strategies',
    'Secrets and configuration management',
    'Health checks and monitoring',
    'Microservices deployment patterns',
    'Cloud platform deployment (ECS)',
    'Container security and linting',
    'Log aggregation and monitoring'
  ],
  prerequisites: ['Docker Intermediate', 'Basic CI/CD knowledge', 'Git fundamentals'],
  tags: ['Docker', 'CI/CD', 'DevOps', 'AWS ECS', 'Testing', 'Deployment'],
  resources: [
    {
      id: 'docker-cd-setup',
      title: 'Installation and Setup',
      description: 'Set up Docker CI/CD development environment and tools',
      type: 'article',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/blob/main/Docker-CD/install-and-setup.md',
      tags: ['setup', 'installation'],
      difficulty: 'Beginner',
      duration: '30 minutes',
      estimatedMinutes: 30
    },
    {
      id: 'dockerfile-build-lab',
      title: 'LAB01: Dockerfile Build Optimization',
      description: 'Learn advanced Dockerfile techniques and build optimization strategies',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/blob/main/Docker-CD/LAB01-Dockerfile-Build',
      tags: ['dockerfile', 'optimization'],
      difficulty: 'Intermediate',
      duration: '1 hour',
      estimatedMinutes: 60
    },
    {
      id: 'compose-ci-integration-lab',
      title: 'LAB02: Compose CI Integration',
      description: 'Integrate Docker Compose with continuous integration pipelines',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/blob/main/Docker-CD/LAB02-Compose-CI-Integration',
      tags: ['docker-compose', 'ci-integration'],
      difficulty: 'Intermediate',
      duration: '1.25 hours',
      estimatedMinutes: 75
    },
    {
      id: 'compose-dev-environments-lab',
      title: 'LAB03: Compose Development Environments',
      description: 'Create consistent development environments using Docker Compose',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/blob/main/Docker-CD/LAB03-Compose-Dev-Environments',
      tags: ['development', 'environments'],
      difficulty: 'Intermediate',
      duration: '1 hour',
      estimatedMinutes: 60
    },
    {
      id: 'multi-stage-builds-lab',
      title: 'LAB04: Multi-Stage Dockerfile Builds',
      description: 'Implement efficient multi-stage Docker builds for production',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/blob/main/Docker-CD/LAB04-Multi-Stage-Dockerfile-Builds',
      tags: ['multi-stage', 'optimization'],
      difficulty: 'Intermediate',
      duration: '1.5 hours',
      estimatedMinutes: 90
    },
    {
      id: 'secrets-volumes-lab',
      title: 'LAB05: Secrets and Volumes Management',
      description: 'Secure secrets management and data persistence in Docker containers',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/blob/main/Docker-CD/LAB05-Secrets-And-Volumes',
      tags: ['secrets', 'security', 'volumes'],
      difficulty: 'Intermediate',
      duration: '1.25 hours',
      estimatedMinutes: 75
    },
    {
      id: 'health-checks-lab',
      title: 'LAB06: Service Health Checks',
      description: 'Implement comprehensive health checks for containerized services',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/blob/main/Docker-CD/LAB06-Service-Health-Checks',
      tags: ['health-checks', 'monitoring'],
      difficulty: 'Intermediate',
      duration: '1 hour',
      estimatedMinutes: 60
    },
    {
      id: 'microservices-pipeline-lab',
      title: 'LAB07: Microservices CI Pipeline',
      description: 'Build CI pipelines for microservices architecture with Docker',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/blob/main/Docker-CD/LAB07-Microservices-CI-Pipeline',
      tags: ['microservices', 'pipeline'],
      difficulty: 'Advanced',
      duration: '2 hours',
      estimatedMinutes: 120
    },
    {
      id: 'deploy-ecs-lab',
      title: 'LAB08: Deploy to AWS ECS',
      description: 'Deploy containerized applications to Amazon Elastic Container Service',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/blob/main/Docker-CD/LAB08-Deploy-To-ECS',
      tags: ['aws', 'ecs', 'deployment'],
      difficulty: 'Advanced',
      duration: '2.5 hours',
      estimatedMinutes: 150
    },
    {
      id: 'dockerfile-linting-lab',
      title: 'LAB09: Dockerfile Linting and Security',
      description: 'Implement Dockerfile linting and security scanning in CI/CD',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/blob/main/Docker-CD/LAB09-Dockerfile-Linting',
      tags: ['linting', 'security', 'best-practices'],
      difficulty: 'Intermediate',
      duration: '1 hour',
      estimatedMinutes: 60
    },
    {
      id: 'logs-aggregation-lab',
      title: 'LAB10: Logs Aggregation in CD',
      description: 'Set up centralized logging and monitoring for containerized deployments',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/cicd-labs/blob/main/Docker-CD/LAB10-Logs-Aggregation-CD',
      tags: ['logging', 'monitoring', 'aggregation'],
      difficulty: 'Advanced',
      duration: '1.75 hours',
      estimatedMinutes: 105
    }
  ],
  icon: '🐳',
  iconColor: 'text-blue-400',
  difficulty: 'Intermediate',
  color: 'blue',
  gradient: 'from-blue-500 to-cyan-500',
  category: 'CI/CD',
  estimatedHours: 45,
  lastUpdated: new Date('2024-01-25')
};
