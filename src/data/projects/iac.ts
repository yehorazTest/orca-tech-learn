
import { Project } from '../../types/project';

export const iacProjects: Project[] = [
  {
    id: 'terraform-aws-infrastructure',
    title: 'AWS Infrastructure with Terraform',
    description: 'Provision complete AWS infrastructure using Terraform with best practices',
    longDescription: 'Design and implement a scalable AWS infrastructure using Terraform, including VPC, EC2, RDS, and S3 with proper state management and modular design.',
    difficulty: 'Advanced',
    estimatedHours: 16,
    category: 'IaC',
    tags: ['terraform', 'aws', 'vpc', 'ec2', 'rds', 's3', 'modules'],
    prerequisites: ['AWS fundamentals', 'Terraform basics', 'Networking concepts'],
    objectives: [
      'Design modular Terraform configurations',
      'Implement AWS best practices',
      'Manage Terraform state effectively',
      'Create reusable infrastructure modules'
    ],
    deliverables: [
      'Terraform configuration files',
      'AWS infrastructure modules',
      'State management setup',
      'Infrastructure documentation'
    ],
    resources: [
      {
        id: 'terraform-docs',
        title: 'Terraform Documentation',
        description: 'Official Terraform documentation',
        type: 'Documentation',
        url: 'https://developer.hashicorp.com/terraform/docs',
        isExternal: true
      }
    ],
    isPopular: true,
    lastUpdated: new Date('2024-01-26')
  },
  {
    id: 'pulumi-multi-cloud',
    title: 'Multi-Cloud Infrastructure with Pulumi',
    description: 'Deploy resources across multiple cloud providers using Pulumi',
    longDescription: 'Create a multi-cloud infrastructure setup using Pulumi with TypeScript, deploying resources on AWS, Azure, and GCP while maintaining consistency and best practices.',
    difficulty: 'Advanced',
    estimatedHours: 18,
    category: 'IaC',
    tags: ['pulumi', 'multi-cloud', 'typescript', 'aws', 'azure', 'gcp'],
    prerequisites: ['Cloud platforms knowledge', 'TypeScript/JavaScript', 'Infrastructure concepts'],
    objectives: [
      'Master Pulumi with TypeScript',
      'Deploy across multiple cloud providers',
      'Implement cross-cloud networking',
      'Manage multi-cloud state and resources'
    ],
    deliverables: [
      'Pulumi TypeScript programs',
      'Multi-cloud resource configurations',
      'Cross-cloud networking setup',
      'Deployment automation scripts'
    ],
    resources: [
      {
        id: 'pulumi-docs',
        title: 'Pulumi Documentation',
        description: 'Official Pulumi documentation',
        type: 'Documentation',
        url: 'https://www.pulumi.com/docs/',
        isExternal: true
      }
    ],
    isNew: true,
    lastUpdated: new Date('2024-01-30')
  }
];
