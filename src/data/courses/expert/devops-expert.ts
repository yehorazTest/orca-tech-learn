
import { Course } from '../../../types/learningPath';

export const devopsExpertCourses: Course[] = [
  {
    id: 'terraform-expert',
    title: 'Terraform Expert',
    description: 'Infrastructure as Code mastery with Terraform including modules, state management, and enterprise patterns',
    longDescription: 'Master Infrastructure as Code with Terraform. Learn advanced module development, state management, workspace organization, security practices, and enterprise IaC patterns.',
    icon: '🏗️',
    iconColor: 'text-purple-400',
    level: 'Advanced',
    difficulty: 'Advanced',
    duration: '8-10 weeks',
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500',
    category: 'DevOps',
    topics: ['Advanced Modules', 'State Management', 'Workspace Organization', 'Enterprise Patterns'],
    prerequisites: ['Cloud Intermediate', 'Infrastructure fundamentals'],
    estimatedHours: 95,
    tags: ['Terraform', 'IaC', 'Modules', 'State Management', 'Enterprise'],
    lastUpdated: new Date('2024-01-25'),
    resources: []
  },
  {
    id: 'pulumi-expert',
    title: 'Pulumi Expert',
    description: 'Modern Infrastructure as Code with Pulumi using programming languages for cloud infrastructure',
    longDescription: 'Master modern Infrastructure as Code with Pulumi. Learn to define cloud infrastructure using familiar programming languages, advanced deployment patterns, and cloud-native architectures.',
    icon: '💜',
    iconColor: 'text-violet-400',
    level: 'Advanced',
    difficulty: 'Advanced',
    duration: '8-10 weeks',
    color: 'violet',
    gradient: 'from-violet-500 to-purple-500',
    category: 'DevOps',
    topics: ['Programming-based IaC', 'Advanced Deployment Patterns', 'Cloud-native Architectures'],
    prerequisites: ['Cloud Intermediate', 'Programming fundamentals'],
    estimatedHours: 90,
    tags: ['Pulumi', 'IaC', 'Programming', 'Cloud Native', 'Modern DevOps'],
    lastUpdated: new Date('2024-01-25'),
    resources: []
  }
];
