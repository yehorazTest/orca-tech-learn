import { LearningPath } from '../types/learningPath';

export const learningPaths: LearningPath[] = [
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    description: 'Complete learning path to become a DevOps Engineer with containerization, orchestration, and automation skills',
    longDescription: 'Master the complete DevOps workflow from fundamental tools to enterprise-level automation. This comprehensive path combines essential development tools, system administration, containerization, orchestration, and cloud technologies to build complete DevOps expertise.',
    icon: '🥷',
    iconColor: 'text-blue-400',
    gradient: 'from-blue-500 to-cyan-500',
    category: 'DevOps',
    estimatedHours: 520,
    courseIds: [
      'git-github-fundamentals',
      'sysadmin-beginner',
      'docker-beginner',
      'python-beginner',
      'docker-intermediate',
      'kubernetes-beginner',
      'cicd-fundamentals',
      'sysadmin-intermediate',
      'cloud-beginner',
      'kubernetes-intermediate',
      'iac-fundamentals',
      'sysadmin-professional',
      'docker-professional',
      'cloud-intermediate',
      'kubernetes-professional',
      'cloud-professional'
    ],
    courseGroups: [
      {
        title: 'DevOps Fundamentals',
        description: 'Essential tools and practices every DevOps engineer needs to know',
        courseIds: ['git-github-fundamentals', 'sysadmin-beginner', 'docker-beginner', 'python-beginner']
      },
      {
        title: 'DevOps Engineering',
        description: 'Intermediate DevOps practices with automation, orchestration, and cloud integration',
        courseIds: [
          'docker-intermediate', 
          'kubernetes-beginner', 
          'cicd-fundamentals', 
          'sysadmin-intermediate', 
          'cloud-beginner', 
          'kubernetes-intermediate', 
          'iac-fundamentals'
        ]
      },
      {
        title: 'DevOps Architecture & Leadership',
        description: 'Advanced DevOps architecture patterns, enterprise practices, and leadership skills',
        courseIds: [
          'sysadmin-professional', 
          'docker-professional', 
          'cloud-intermediate', 
          'kubernetes-professional', 
          'cloud-professional'
        ]
      }
    ],
    tags: ['Git', 'Linux', 'Docker', 'Kubernetes', 'Python', 'CI/CD', 'Cloud', 'IaC', 'Automation'],
    isPopular: true,
    lastUpdated: new Date('2024-01-25')
  },
  {
    id: 'python-developer',
    title: 'Python Developer',
    description: 'Complete Python development path from fundamentals to professional-level applications',
    longDescription: 'Master Python programming from basics to advanced enterprise development. Learn core Python, web frameworks, database integration, testing, and deployment strategies for building professional applications.',
    icon: '🐍',
    iconColor: 'text-green-400',
    gradient: 'from-green-500 to-emerald-500',
    category: 'Programming',
    estimatedHours: 270,
    courseIds: ['python-beginner', 'python-intermediate', 'python-professional'],
    tags: ['Python', 'Web Development', 'APIs', 'Databases', 'Testing'],
    isPopular: true,
    lastUpdated: new Date('2024-01-20')
  },
  {
    id: 'java-developer',
    title: 'Java Developer',
    description: 'Complete Java development path from fundamentals to enterprise-level applications',
    longDescription: 'Master Java programming from basics to advanced enterprise development. Learn core Java, Spring framework, microservices, database integration, and scalable system design.',
    icon: '☕',
    iconColor: 'text-orange-400',
    gradient: 'from-orange-500 to-red-500',
    category: 'Programming',
    estimatedHours: 280,
    courseIds: ['java-beginner', 'java-intermediate', 'java-professional'],
    tags: ['Java', 'Spring', 'Microservices', 'Enterprise', 'Scalability'],
    lastUpdated: new Date('2024-01-25')
  },
  {
    id: 'cloud-architect',
    title: 'Cloud Architect',
    description: 'End-to-end cloud architecture path with DevOps integration and enterprise solutions',
    longDescription: 'Design and implement scalable cloud solutions. This comprehensive path combines cloud computing fundamentals with DevOps practices to create enterprise-ready architectures.',
    icon: '🏗️',
    iconColor: 'text-cyan-400',
    gradient: 'from-cyan-500 to-blue-500',
    category: 'Cloud',
    estimatedHours: 550,
    courseIds: ['python-beginner', 'cloud-beginner', 'cloud-intermediate', 'kubernetes-beginner', 'kubernetes-intermediate', 'cloud-professional'],
    tags: ['Cloud Architecture', 'AWS', 'Azure', 'DevOps', 'Enterprise', 'Kubernetes'],
    isPopular: true,
    lastUpdated: new Date('2024-01-05')
  },
  {
    id: 'fullstack-developer',
    title: 'Full-Stack Developer',
    description: 'Complete full-stack development journey with Python backend, React frontend, and cloud deployment',
    longDescription: 'Master both frontend and backend development with Python, React, and cloud deployment. Perfect for building modern, scalable web applications with professional deployment practices.',
    icon: '🌐',
    iconColor: 'text-emerald-400',
    gradient: 'from-emerald-500 to-teal-500',
    category: 'Programming',
    estimatedHours: 355,
    courseIds: ['python-beginner', 'python-intermediate', 'react-beginner', 'react-intermediate', 'cloud-beginner'],
    tags: ['Python', 'React', 'Full-Stack', 'Cloud', 'Web Development'],
    lastUpdated: new Date('2024-01-20')
  },
  {
    id: 'cloud-infrastructure-specialist',
    title: 'Cloud Infrastructure Specialist',
    description: 'Comprehensive path combining system administration skills with cloud technologies for infrastructure management',
    longDescription: 'Become a cloud infrastructure specialist by mastering system administration fundamentals and advanced cloud technologies. Perfect for managing enterprise cloud infrastructure and hybrid environments.',
    icon: '🖥️',
    iconColor: 'text-purple-400',
    gradient: 'from-purple-500 to-violet-500',
    category: 'Cloud',
    estimatedHours: 395,
    courseIds: ['sysadmin-beginner', 'sysadmin-intermediate', 'sysadmin-professional', 'cloud-beginner', 'cloud-intermediate'],
    tags: ['System Administration', 'Cloud Infrastructure', 'Linux', 'Enterprise', 'Hybrid Cloud'],
    isNew: true,
    lastUpdated: new Date('2024-01-25')
  },
  {
    id: 'kubernetes-specialist',
    title: 'Kubernetes Specialist',
    description: 'Complete Kubernetes mastery from fundamentals to expert-level enterprise operations',
    longDescription: 'Master Kubernetes from basic concepts to expert-level operations. Learn container orchestration, GitOps, service mesh, advanced security, and production-grade observability for enterprise environments.',
    icon: '☸️',
    iconColor: 'text-blue-400',
    gradient: 'from-blue-500 to-purple-500',
    category: 'DevOps',
    estimatedHours: 180,
    courseIds: ['kubernetes-beginner', 'kubernetes-intermediate', 'kubernetes-professional'],
    tags: ['Kubernetes', 'Container Orchestration', 'GitOps', 'Service Mesh', 'Enterprise'],
    isNew: true,
    lastUpdated: new Date('2024-01-25')
  }
];
