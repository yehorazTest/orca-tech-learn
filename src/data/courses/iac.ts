
import { Course } from '../../types/learningPath';

export const iacCourses: Course[] = [
  {
    id: 'iac-fundamentals',
    title: 'Infrastructure as Code Fundamentals',
    description: 'Master infrastructure automation with Terraform, CloudFormation, and modern IaC practices',
    longDescription: 'Learn to manage infrastructure programmatically using Infrastructure as Code principles. Master Terraform, AWS CloudFormation, and best practices for versioned, repeatable infrastructure deployment.',
    level: 'Intermediate',
    duration: '45 hours',
    topics: [
      'Infrastructure as Code principles',
      'Terraform fundamentals and syntax',
      'AWS CloudFormation basics',
      'State management strategies',
      'Module design and reusability',
      'Version control for infrastructure',
      'Environment management patterns',
      'Security and compliance in IaC',
      'Testing infrastructure code',
      'CI/CD for infrastructure',
      'Multi-cloud strategies',
      'Troubleshooting and debugging'
    ],
    prerequisites: ['Cloud Beginner completion', 'Basic understanding of cloud services'],
    tags: ['Infrastructure as Code', 'Terraform', 'CloudFormation', 'Automation'],
    resources: [
      {
        id: 'iac-principles',
        title: 'Infrastructure as Code Principles',
        description: 'Understanding the fundamentals and benefits of IaC',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/iac-labs/Fundamentals/LAB01-IaC-Principles',
        tags: ['principles', 'concepts'],
        difficulty: 'Beginner',
        duration: '45 minutes',
        estimatedMinutes: 45
      },
      {
        id: 'terraform-basics',
        title: 'Terraform Fundamentals',
        description: 'Learn Terraform syntax and create your first infrastructure',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/iac-labs/Terraform/LAB01-Terraform-Basics',
        tags: ['terraform', 'fundamentals'],
        difficulty: 'Beginner',
        duration: '1.5 hours',
        estimatedMinutes: 90
      },
      {
        id: 'terraform-state',
        title: 'Terraform State Management',
        description: 'Master Terraform state files and remote backends',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/iac-labs/Terraform/LAB02-State-Management',
        tags: ['terraform', 'state'],
        difficulty: 'Intermediate',
        duration: '1.25 hours',
        estimatedMinutes: 75
      },
      {
        id: 'cloudformation-intro',
        title: 'AWS CloudFormation Introduction',
        description: 'Create and manage AWS resources with CloudFormation',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/iac-labs/CloudFormation/LAB01-CloudFormation-Intro',
        tags: ['cloudformation', 'aws'],
        difficulty: 'Intermediate',
        duration: '1.33 hours',
        estimatedMinutes: 80
      },
      {
        id: 'iac-modules',
        title: 'IaC Modules and Reusability',
        description: 'Design reusable infrastructure modules and patterns',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/iac-labs/Modules/LAB01-Module-Design',
        tags: ['modules', 'reusability'],
        difficulty: 'Intermediate',
        duration: '1.67 hours',
        estimatedMinutes: 100
      }
    ],
    icon: '🏗️',
    iconColor: 'text-cyan-400',
    difficulty: 'Intermediate',
    color: 'cyan',
    gradient: 'from-cyan-500 to-blue-500',
    category: 'Infrastructure',
    estimatedHours: 45,
    lastUpdated: new Date('2024-01-25')
  }
];
