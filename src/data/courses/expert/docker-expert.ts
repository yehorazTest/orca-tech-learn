
import { Course } from '../../../types/learningPath';

export const dockerExpertCourse: Course = {
  id: 'docker-expert',
  title: 'Docker Expert',
  description: 'Master enterprise-grade Docker deployments with advanced security, high availability, and multi-region strategies',
  longDescription: 'Achieve expert-level proficiency in Docker with advanced enterprise patterns, security hardening, high availability configurations, and multi-region deployment strategies. Perfect for senior engineers and architects designing resilient containerized systems.',
  level: 'Expert',
  duration: '70 hours',
  topics: [
    'Enterprise security hardening',
    'High availability and failover',
    'Multi-region deployments',
    'Advanced troubleshooting',
    'Vulnerability management',
    'Disaster recovery',
    'Performance optimization at scale',
    'Compliance and governance'
  ],
  prerequisites: ['Docker Professional completion', 'Enterprise architecture experience', 'Advanced Linux administration'],
  tags: ['Docker', 'Expert', 'Enterprise', 'Security', 'High Availability', 'Multi-Region'],
  resources: [
    {
      id: 'vulnerability-scanning-images',
      title: 'Vulnerability Scanning Images',
      description: 'Implement comprehensive vulnerability scanning for container images',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/docker-labs/tree/main/Registry/LAB08-Vulnerability-Scanning-Images',
      tags: ['registry', 'security', 'scanning'],
      difficulty: 'Advanced',
      duration: '1.5 hours',
      estimatedMinutes: 90
    },
    {
      id: 'registry-backup-restore',
      title: 'Registry Backup And Restore',
      description: 'Design and implement registry backup and disaster recovery strategies',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/docker-labs/tree/main/Registry/LAB09-Registry-Backup-And-Restore',
      tags: ['registry', 'backup', 'disaster-recovery'],
      difficulty: 'Advanced',
      duration: '2 hours',
      estimatedMinutes: 120
    },
    {
      id: 'multi-region-registry',
      title: 'Multi-Region Registry Deployment',
      description: 'Deploy and manage Docker registries across multiple regions',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/docker-labs/tree/main/Registry/LAB10-Multi-Region-Registry-Deployment',
      tags: ['registry', 'multi-region', 'architecture'],
      difficulty: 'Advanced',
      duration: '2.5 hours',
      estimatedMinutes: 150
    },
    {
      id: 'swarm-high-availability',
      title: 'High Availability And Failover',
      description: 'Implement high availability and automatic failover for Docker Swarm',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/docker-labs/tree/main/Swarm/LAB08-High-Availability-And-Failover',
      tags: ['swarm', 'high-availability', 'failover'],
      difficulty: 'Advanced',
      duration: '2.25 hours',
      estimatedMinutes: 135
    },
    {
      id: 'overlay-networks-swarm',
      title: 'Overlay Networks In Swarm',
      description: 'Advanced overlay network configurations and optimization in Swarm',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/docker-labs/tree/main/Swarm/LAB09-Overlay-Networks-In-Swarm',
      tags: ['swarm', 'networking', 'overlay'],
      difficulty: 'Advanced',
      duration: '2 hours',
      estimatedMinutes: 120
    },
    {
      id: 'troubleshooting-swarm',
      title: 'Troubleshooting Swarm Deployments',
      description: 'Master advanced troubleshooting techniques for complex Swarm issues',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/docker-labs/tree/main/Swarm/LAB10-Troubleshooting-Swarm-Deployments',
      tags: ['swarm', 'troubleshooting', 'debugging'],
      difficulty: 'Advanced',
      duration: '1.75 hours',
      estimatedMinutes: 105
    }
  ],
  icon: '🐳',
  iconColor: 'text-blue-400',
  difficulty: 'Professional',
  color: 'blue',
  gradient: 'from-blue-500 to-cyan-500',
  category: 'Containerization',
  estimatedHours: 70,
  lastUpdated: new Date('2024-01-25')
};
