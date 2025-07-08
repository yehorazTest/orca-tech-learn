
import { Course } from '../../types/learningPath';

export const sysadminCourses: Course[] = [
  {
    id: 'sysadmin-beginner',
    title: 'System Administration Beginner',
    description: 'Linux fundamentals, command line basics, and essential system administration concepts',
    longDescription: 'Start your journey in system administration with Linux fundamentals. Learn command line navigation, file system management, user administration, and basic networking concepts essential for any system administrator.',
    level: 'Beginner',
    duration: '45 hours',
    topics: [
      'Linux distribution overview',
      'Command line fundamentals',
      'File system navigation and management',
      'User and group management',
      'Permission and ownership concepts',
      'Package management basics',
      'Process management',
      'Basic networking concepts',
      'System monitoring fundamentals',
      'Log file basics'
    ],
    prerequisites: ['Basic computer literacy'],
    tags: ['Linux', 'System Administration', 'Command Line', 'Fundamentals'],
    resources: [
      {
        id: 'linux-intro',
        title: 'Introduction to Linux',
        description: 'Overview of Linux distributions and basic concepts',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/sysadmin-labs/Basics/LAB01-Linux-Introduction',
        tags: ['linux', 'overview'],
        estimatedMinutes: 60
      },
      {
        id: 'command-line-basics',
        title: 'Command Line Fundamentals',
        description: 'Master essential command line operations and navigation',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/sysadmin-labs/Basics/LAB02-Command-Line-Basics',
        tags: ['command-line', 'navigation'],
        estimatedMinutes: 90
      },
      {
        id: 'file-management',
        title: 'File System Management',
        description: 'Learn file operations, permissions, and directory structures',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/sysadmin-labs/Basics/LAB03-File-Management',
        tags: ['filesystem', 'permissions'],
        estimatedMinutes: 75
      }
    ],
    icon: '🖥️',
    iconColor: 'text-green-400',
    difficulty: 'Beginner',
    color: 'green',
    gradient: 'from-green-500 to-emerald-500',
    category: 'System Administration',
    estimatedHours: 45,
    lastUpdated: new Date('2024-01-25')
  },
  {
    id: 'sysadmin-intermediate',
    title: 'System Administration Intermediate',
    description: 'Advanced Linux administration, automation, security, and network services management',
    longDescription: 'Advance your system administration skills with complex Linux environments. Learn advanced networking, security hardening, automation with shell scripting, and service management for production systems.',
    level: 'Intermediate',
    duration: '55 hours',
    topics: [
      'Advanced networking configuration',
      'Security hardening practices',
      'Shell scripting and automation',
      'Service management with systemd',
      'Advanced file systems and storage',
      'Backup and recovery strategies',
      'Performance monitoring and tuning',
      'Firewall configuration',
      'SSH and remote administration',
      'Log analysis and troubleshooting'
    ],
    prerequisites: ['System Administration Beginner completion', 'Basic networking knowledge'],
    tags: ['Linux', 'Security', 'Automation', 'Networking'],
    resources: [
      {
        id: 'advanced-networking',
        title: 'Advanced Linux Networking',
        description: 'Configure complex network scenarios and troubleshooting',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/sysadmin-labs/Intermediate/LAB01-Advanced-Networking',
        tags: ['networking', 'troubleshooting'],
        estimatedMinutes: 120
      },
      {
        id: 'security-hardening',
        title: 'Linux Security Hardening',
        description: 'Implement security best practices and hardening techniques',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/sysadmin-labs/Intermediate/LAB02-Security-Hardening',
        tags: ['security', 'hardening'],
        estimatedMinutes: 105
      },
      {
        id: 'automation-scripting',
        title: 'Automation with Shell Scripts',
        description: 'Create automation scripts for common administrative tasks',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/sysadmin-labs/Intermediate/LAB03-Automation-Scripting',
        tags: ['automation', 'scripting'],
        estimatedMinutes: 90
      }
    ],
    icon: '🖥️',
    iconColor: 'text-green-400',
    difficulty: 'Intermediate',
    color: 'green',
    gradient: 'from-green-500 to-emerald-500',
    category: 'System Administration',
    estimatedHours: 55,
    lastUpdated: new Date('2024-01-25')
  },
  {
    id: 'sysadmin-professional',
    title: 'System Administration Professional',
    description: 'Enterprise system administration, high availability, disaster recovery, and infrastructure at scale',
    longDescription: 'Master enterprise-level system administration with focus on high availability, disaster recovery, infrastructure at scale, and advanced automation. Perfect for senior system administrators and infrastructure engineers.',
    level: 'Professional',
    duration: '65 hours',
    topics: [
      'High availability system design',
      'Disaster recovery planning and implementation',
      'Infrastructure as Code principles',
      'Configuration management systems',
      'Enterprise monitoring solutions',
      'Capacity planning and scaling',
      'Advanced troubleshooting methodologies',
      'Compliance and auditing',
      'Multi-datacenter management',
      'Performance optimization strategies'
    ],
    prerequisites: ['System Administration Intermediate completion', 'Production environment experience'],
    tags: ['Enterprise', 'High Availability', 'Disaster Recovery', 'Scale'],
    resources: [
      {
        id: 'high-availability',
        title: 'High Availability System Design',
        description: 'Design and implement highly available Linux systems',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/sysadmin-labs/Professional/LAB01-High-Availability',
        tags: ['high-availability', 'design'],
        estimatedMinutes: 150
      },
      {
        id: 'disaster-recovery',
        title: 'Disaster Recovery Implementation',
        description: 'Plan and implement comprehensive disaster recovery solutions',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/sysadmin-labs/Professional/LAB02-Disaster-Recovery',
        tags: ['disaster-recovery', 'planning'],
        estimatedMinutes: 135
      },
      {
        id: 'enterprise-monitoring',
        title: 'Enterprise Monitoring Solutions',
        description: 'Implement enterprise-grade monitoring and alerting systems',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/sysadmin-labs/Professional/LAB03-Enterprise-Monitoring',
        tags: ['monitoring', 'enterprise'],
        estimatedMinutes: 120
      }
    ],
    icon: '🖥️',
    iconColor: 'text-green-400',
    difficulty: 'Professional',
    color: 'green',
    gradient: 'from-green-500 to-emerald-500',
    category: 'System Administration',
    estimatedHours: 65,
    lastUpdated: new Date('2024-01-25')
  }
];
