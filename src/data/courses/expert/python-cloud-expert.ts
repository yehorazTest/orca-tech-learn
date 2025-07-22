
import { Course } from '../../../types/learningPath';

export const pythonCloudExpert: Course = {
  id: 'python-cloud-expert',
  title: 'Python Cloud Expert',
  description: 'Advanced Python development for cloud-native applications with serverless, microservices, and cloud platforms',
  longDescription: 'Master Python for cloud environments with serverless functions, microservices architecture, cloud SDKs, container orchestration, and cloud-native development patterns.',
  icon: '🐍',
  iconColor: 'text-yellow-400',
  level: 'Advanced',
  difficulty: 'Advanced',
  duration: '10-12 weeks',
  color: 'yellow',
  gradient: 'from-yellow-500 to-orange-500',
  category: 'Programming',
  topics: ['Serverless Functions', 'Microservices Architecture', 'Cloud SDKs', 'Container Orchestration'],
  prerequisites: ['Python Professional', 'Cloud Intermediate'],
  estimatedHours: 110,
  tags: ['Python', 'Cloud Native', 'Serverless', 'Microservices', 'Cloud SDKs'],
  lastUpdated: new Date('2024-01-25'),
  resources: [
    {
      id: 'python-custom-linters-analyzers',
      title: 'Building Custom Python Linters and Analyzers',
      description: 'Create custom code analysis tools, linters, and static analyzers for Python codebases',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB15-Building-Custom-Python-Linters-and-Analyzers',
      difficulty: 'Advanced',
      duration: '4 hours',
      estimatedMinutes: 240,
      tags: ['Python', 'Static Analysis', 'Linters', 'Code Quality'],
      prerequisites: ['Python Professional'],
      isExternal: true,
      lastUpdated: new Date('2024-01-18'),
      isInteractive: true
    },
    {
      id: 'python-performance-optimization-profiling',
      title: 'Performance Optimization and Profiling at Scale',
      description: 'Advanced performance optimization techniques, profiling, and scaling Python applications',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB16-Performance-Optimization-and-Profiling-at-Scale',
      difficulty: 'Advanced',
      duration: '5 hours',
      estimatedMinutes: 300,
      tags: ['Python', 'Performance', 'Optimization', 'Profiling', 'Scaling'],
      prerequisites: ['Building Custom Python Linters and Analyzers'],
      isExternal: true,
      lastUpdated: new Date('2024-01-18'),
      isInteractive: true
    },
    {
      id: 'python-security-automation',
      title: 'Security Automation with Python',
      description: 'Build security automation tools, vulnerability scanners, and security monitoring systems with Python',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB17-Security-Automation-with-Python',
      difficulty: 'Advanced',
      duration: '4 hours',
      estimatedMinutes: 240,
      tags: ['Python', 'Security', 'Automation', 'Vulnerability Scanning'],
      prerequisites: ['Performance Optimization and Profiling at Scale'],
      isExternal: true,
      lastUpdated: new Date('2024-01-18'),
      isInteractive: true
    },
    {
      id: 'python-plugin-extension-architectures',
      title: 'Designing Python Plugin and Extension Architectures',
      description: 'Design and implement extensible plugin systems and modular architectures in Python applications',
      type: 'lab',
      url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB18-Designing-Python-Plugin-and-Extension-Architectures',
      difficulty: 'Advanced',
      duration: '5 hours',
      estimatedMinutes: 300,
      tags: ['Python', 'Plugin Architecture', 'Extension Systems', 'Modular Design'],
      prerequisites: ['Security Automation with Python'],
      isExternal: true,
      lastUpdated: new Date('2024-01-18'),
      isInteractive: true
    }
  ]
};
