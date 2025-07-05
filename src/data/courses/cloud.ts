
import { Course } from '../../types/learningPath';

export const cloudCourses: Course[] = [
  {
    id: 'cloud-beginner',
    title: 'Cloud Computing - Beginner',
    description: 'Cloud fundamentals including AWS/Azure basics, virtual machines, and storage concepts',
    longDescription: 'Start your cloud journey with fundamental concepts. Learn about cloud service models, AWS/Azure basics, virtual machines, storage, and networking in the cloud.',
    icon: '☁️',
    iconColor: 'text-cyan-400',
    difficulty: 'Beginner',
    duration: '6-8 weeks',
    color: 'cyan',
    gradient: 'from-cyan-500 to-blue-500',
    category: 'Cloud',
    prerequisites: ['Basic networking knowledge'],
    estimatedHours: 75,
    tags: ['AWS', 'Azure', 'Virtual Machines', 'Storage', 'Networking'],
    isNew: true,
    lastUpdated: new Date('2024-01-10'),
    resources: [
      {
        id: 'aws-ec2-instance',
        title: 'AWS EC2 Instance',
        description: 'Learn how to create and manage EC2 instances in AWS',
        type: 'Lab',
        url: 'https://github.com/study-ORCATech-cloud/cloud-labs/tree/main/AWS/LAB01-EC2-Instance',
        difficulty: 'Beginner',
        duration: '2 hours',
        estimatedMinutes: 120,
        tags: ['AWS', 'EC2', 'Virtual Machines'],
        prerequisites: [],
        isExternal: true,
        lastUpdated: new Date('2024-01-08'),
        isInteractive: true
      },
      {
        id: 'aws-ebs-volumes',
        title: 'EBS Volumes',
        description: 'Understand and work with AWS EBS volumes for persistent storage',
        type: 'Lab',
        url: 'https://github.com/study-ORCATech-cloud/cloud-labs/tree/main/AWS/LAB01A-EBS-Volumes',
        difficulty: 'Beginner',
        duration: '1.5 hours',
        estimatedMinutes: 90,
        tags: ['AWS', 'EBS', 'Storage'],
        prerequisites: ['AWS EC2 Instance'],
        isExternal: true,
        lastUpdated: new Date('2024-01-08'),
        isInteractive: true
      }
    ]
  },
  {
    id: 'cloud-intermediate',
    title: 'Cloud Computing - Intermediate',
    description: 'Advanced cloud services including databases, networking, security, and automation',
    longDescription: 'Advance your cloud skills with managed databases, advanced networking, security best practices, and infrastructure automation using cloud-native tools.',
    icon: '☁️',
    iconColor: 'text-cyan-500',
    difficulty: 'Intermediate',
    duration: '8-10 weeks',
    color: 'cyan',
    gradient: 'from-cyan-600 to-blue-600',
    category: 'Cloud',
    prerequisites: ['Cloud Beginner'],
    estimatedHours: 95,
    tags: ['Databases', 'Security', 'Automation', 'Networking'],
    lastUpdated: new Date('2024-01-10'),
    resources: []
  },
  {
    id: 'cloud-professional',
    title: 'Cloud Computing - Professional',
    description: 'Enterprise cloud architecture with multi-cloud strategies, cost optimization, and governance',
    longDescription: 'Master enterprise cloud architecture with multi-cloud strategies, advanced security, cost optimization, governance frameworks, and cloud migration strategies.',
    icon: '☁️',
    iconColor: 'text-cyan-600',
    difficulty: 'Advanced',
    duration: '10-12 weeks',
    color: 'cyan',
    gradient: 'from-cyan-700 to-blue-700',
    category: 'Cloud',
    prerequisites: ['Cloud Intermediate'],
    estimatedHours: 115,
    tags: ['Architecture', 'Multi-cloud', 'Cost Optimization', 'Governance'],
    lastUpdated: new Date('2024-01-10'),
    resources: []
  }
];
