
import { Course } from '../../types/learningPath';

export const programmingCourses: Course[] = [
  {
    id: 'python-beginner',
    title: 'Python Development - Beginner',
    description: 'Python fundamentals including syntax, data structures, and basic programming concepts',
    longDescription: 'Master Python programming from scratch. Learn Python syntax, data types, control structures, functions, and object-oriented programming basics.',
    icon: '🐍',
    iconColor: 'text-green-400',
    level: 'Beginner',
    difficulty: 'Beginner',
    duration: '6-8 weeks',
    color: 'green',
    gradient: 'from-green-500 to-emerald-500',
    category: 'Programming',
    topics: ['Python Syntax', 'Data Types', 'Control Structures', 'Functions', 'OOP Basics'],
    prerequisites: ['Basic programming knowledge (helpful but not required)'],
    estimatedHours: 70,
    tags: ['Python', 'Programming Basics', 'OOP', 'Data Structures'],
    isPopular: true,
    lastUpdated: new Date('2024-01-20'),
    resources: [
      {
        id: 'python-environment-setup',
        title: 'Python Environment Setup',
        description: 'Set up your Python development environment and learn essential tools',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB00-Python-Environment-Setup',
        difficulty: 'Beginner',
        duration: '1 hour',
        estimatedMinutes: 60,
        tags: ['Python', 'Environment', 'Setup'],
        prerequisites: [],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-basics-variables',
        title: 'Basics Variables',
        description: 'Learn Python variables, data types, and basic operations',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB01-Basics-Variables',
        difficulty: 'Beginner',
        duration: '2 hours',
        estimatedMinutes: 120,
        tags: ['Python', 'Variables', 'Data Types'],
        prerequisites: ['Python Environment Setup'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-string-manipulation',
        title: 'String Manipulation',
        description: 'Master advanced string operations, formatting, and text processing techniques',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB01A-String-Manipulation',
        difficulty: 'Beginner',
        duration: '1.5 hours',
        estimatedMinutes: 90,
        tags: ['Python', 'Strings', 'Text Processing'],
        prerequisites: ['Basics Variables'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-collections-deep-dive',
        title: 'Collections Deep Dive',
        description: 'Explore Python collections: lists, tuples, sets, and dictionaries in detail',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB01B-Collections-Deep-Dive',
        difficulty: 'Beginner',
        duration: '2 hours',
        estimatedMinutes: 120,
        tags: ['Python', 'Collections', 'Data Structures'],
        prerequisites: ['Basics Variables'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-data-types',
        title: 'Data Types',
        description: 'Comprehensive understanding of Python data types and type conversion',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB01C-Data-Types',
        difficulty: 'Beginner',
        duration: '1.5 hours',
        estimatedMinutes: 90,
        tags: ['Python', 'Data Types', 'Type Conversion'],
        prerequisites: ['Basics Variables'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-loops-conditions',
        title: 'Loops and Conditions',
        description: 'Master Python control flow with loops, conditionals, and decision structures',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB02-Loops-and-Conditions',
        difficulty: 'Beginner',
        duration: '2.5 hours',
        estimatedMinutes: 150,
        tags: ['Python', 'Loops', 'Conditionals', 'Control Flow'],
        prerequisites: ['Basics Variables'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-advanced-control-flow',
        title: 'Advanced Control Flow',
        description: 'Master advanced control flow patterns and complex decision structures',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB02A-Advanced-Control-Flow',
        difficulty: 'Beginner',
        duration: '2 hours',
        estimatedMinutes: 120,
        tags: ['Python', 'Control Flow', 'Advanced Patterns'],
        prerequisites: ['Loops and Conditions'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-built-in-functions',
        title: 'Built-in Functions',
        description: 'Explore Python\'s powerful built-in functions and their practical applications',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB02B-Built-in-Functions',
        difficulty: 'Beginner',
        duration: '2.5 hours',
        estimatedMinutes: 150,
        tags: ['Python', 'Built-in Functions', 'Functional Programming'],
        prerequisites: ['Loops and Conditions'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-functions-modules',
        title: 'Functions and Modules',
        description: 'Learn to create reusable code with functions and organize code into modules',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB03-Functions-and-Modules',
        difficulty: 'Beginner',
        duration: '3 hours',
        estimatedMinutes: 180,
        tags: ['Python', 'Functions', 'Modules', 'Code Organization'],
        prerequisites: ['Built-in Functions'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-advanced-functions',
        title: 'Advanced Functions',
        description: 'Deep dive into advanced function concepts: decorators, closures, and higher-order functions',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB03A-Advanced-Functions',
        difficulty: 'Beginner',
        duration: '3 hours',
        estimatedMinutes: 180,
        tags: ['Python', 'Advanced Functions', 'Decorators', 'Closures'],
        prerequisites: ['Functions and Modules'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-date-time',
        title: 'Date and Time',
        description: 'Master date and time manipulation, formatting, and timezone handling in Python',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB03B-Date-and-Time',
        difficulty: 'Beginner',
        duration: '2 hours',
        estimatedMinutes: 120,
        tags: ['Python', 'DateTime', 'Time Zones', 'Formatting'],
        prerequisites: ['Functions and Modules'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-shell-commands',
        title: 'Shell Commands',
        description: 'Learn to execute and interact with shell commands from Python applications',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB03C-Shell-Commands',
        difficulty: 'Beginner',
        duration: '2 hours',
        estimatedMinutes: 120,
        tags: ['Python', 'Shell Commands', 'System Integration'],
        prerequisites: ['Functions and Modules'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-file-handling',
        title: 'File Handling',
        description: 'Master file operations: reading, writing, and manipulating files in Python',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB04-File-Handling',
        difficulty: 'Beginner',
        duration: '2 hours',
        estimatedMinutes: 120,
        tags: ['Python', 'File I/O', 'File Operations'],
        prerequisites: ['Advanced Functions'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-advanced-file-operations',
        title: 'Advanced File Operations',
        description: 'Advanced file handling techniques including binary files, file systems, and path manipulation',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB04A-Advanced-File-Operations',
        difficulty: 'Beginner',
        duration: '2.5 hours',
        estimatedMinutes: 150,
        tags: ['Python', 'File Operations', 'Binary Files', 'Path Manipulation'],
        prerequisites: ['File Handling'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-regular-expressions',
        title: 'Regular Expressions',
        description: 'Master pattern matching and text processing with Python regular expressions',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB04B-Regular-Expressions',
        difficulty: 'Beginner',
        duration: '3 hours',
        estimatedMinutes: 180,
        tags: ['Python', 'RegEx', 'Pattern Matching', 'Text Processing'],
        prerequisites: ['File Handling'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-error-handling-logging',
        title: 'Error Handling and Logging',
        description: 'Learn exception handling and logging for robust Python applications',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB05-Error-Handling-and-Logging',
        difficulty: 'Beginner',
        duration: '2.5 hours',
        estimatedMinutes: 150,
        tags: ['Python', 'Error Handling', 'Logging', 'Debugging'],
        prerequisites: ['Advanced File Operations'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-input-output-interaction',
        title: 'Input Output Interaction',
        description: 'Advanced I/O operations and user interaction techniques in Python',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB05A-Input-Output-Interaction',
        difficulty: 'Beginner',
        duration: '2 hours',
        estimatedMinutes: 120,
        tags: ['Python', 'I/O Operations', 'User Interaction'],
        prerequisites: ['Error Handling and Logging'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      }
    ]
  },
  {
    id: 'python-intermediate',
    title: 'Python Development - Intermediate',
    description: 'Advanced Python concepts including frameworks, APIs, database integration, and web development',
    longDescription: 'Advance your Python skills with web frameworks like Flask/Django, API development, database integration, testing, and advanced Python features.',
    icon: '🐍',
    iconColor: 'text-green-500',
    level: 'Intermediate',
    difficulty: 'Intermediate',
    duration: '8-10 weeks',
    color: 'green',
    gradient: 'from-green-600 to-emerald-600',
    category: 'Programming',
    topics: ['Flask', 'Django', 'API Development', 'Database Integration', 'Testing'],
    prerequisites: ['Python Beginner'],
    estimatedHours: 90,
    tags: ['Flask', 'Django', 'APIs', 'Databases', 'Testing'],
    lastUpdated: new Date('2024-01-20'),
    resources: [
      {
        id: 'python-oop-classes',
        title: 'OOP and Classes',
        description: 'Master object-oriented programming concepts and class design in Python',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB06-OOP-and-Classes',
        difficulty: 'Intermediate',
        duration: '4 hours',
        estimatedMinutes: 240,
        tags: ['Python', 'OOP', 'Classes', 'Inheritance'],
        prerequisites: ['Python Beginner'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-advanced-oop',
        title: 'Advanced OOP',
        description: 'Advanced object-oriented programming concepts, design patterns, and architectural principles',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB06A-Advanced-OOP',
        difficulty: 'Intermediate',
        duration: '4 hours',
        estimatedMinutes: 240,
        tags: ['Python', 'Advanced OOP', 'Design Patterns', 'Architecture'],
        prerequisites: ['OOP and Classes'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-virtualenv-packaging',
        title: 'Virtualenv and Packaging',
        description: 'Learn environment management and package distribution for Python projects',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB07-Virtualenv-and-Packaging',
        difficulty: 'Intermediate',
        duration: '2.5 hours',
        estimatedMinutes: 150,
        tags: ['Python', 'Virtual Environments', 'Packaging', 'pip'],
        prerequisites: ['Advanced OOP'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-virtual-environments',
        title: 'Virtual Environments',
        description: 'Deep dive into Python virtual environments and dependency isolation',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB07A-Virtual-Environments',
        difficulty: 'Intermediate',
        duration: '2 hours',
        estimatedMinutes: 120,
        tags: ['Python', 'Virtual Environments', 'venv', 'conda'],
        prerequisites: ['Virtualenv and Packaging'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-package-management',
        title: 'Package Management',
        description: 'Master Python package management with pip, poetry, and dependency resolution',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB07B-Package-Management',
        difficulty: 'Intermediate',
        duration: '2 hours',
        estimatedMinutes: 120,
        tags: ['Python', 'Package Management', 'pip', 'poetry'],
        prerequisites: ['Virtual Environments'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-creating-packages',
        title: 'Creating Python Packages',
        description: 'Learn to create, distribute, and publish your own Python packages',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB07C-Creating-Python-Packages',
        difficulty: 'Intermediate',
        duration: '3 hours',
        estimatedMinutes: 180,
        tags: ['Python', 'Package Creation', 'PyPI', 'setuptools'],
        prerequisites: ['Package Management'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-unit-testing-basics',
        title: 'Unit Testing Basics',
        description: 'Introduction to testing methodologies and unit testing frameworks in Python',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB08-Unit-Testing-Basics',
        difficulty: 'Intermediate',
        duration: '3 hours',
        estimatedMinutes: 180,
        tags: ['Python', 'Unit Testing', 'pytest', 'TDD'],
        prerequisites: ['Creating Python Packages'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-assertions-test-functions',
        title: 'Assertions and Test Functions',
        description: 'Master assertions, test functions, and testing best practices',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB08A-Assertions-and-Test-Functions',
        difficulty: 'Intermediate',
        duration: '2 hours',
        estimatedMinutes: 120,
        tags: ['Python', 'Assertions', 'Test Functions', 'Testing'],
        prerequisites: ['Unit Testing Basics'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-unittest-framework',
        title: 'Unittest Framework',
        description: 'Deep dive into Python\'s unittest framework and test organization',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB08B-Unittest-Framework',
        difficulty: 'Intermediate',
        duration: '2.5 hours',
        estimatedMinutes: 150,
        tags: ['Python', 'unittest', 'Test Organization', 'Test Fixtures'],
        prerequisites: ['Assertions and Test Functions'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-test-driven-development',
        title: 'Test Driven Development',
        description: 'Learn TDD methodology and red-green-refactor development cycle',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB08C-Test-Driven-Development',
        difficulty: 'Intermediate',
        duration: '3 hours',
        estimatedMinutes: 180,
        tags: ['Python', 'TDD', 'Red-Green-Refactor', 'Development Methodology'],
        prerequisites: ['Unittest Framework'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-data-formats',
        title: 'Data Formats',
        description: 'Work with various data formats and serialization techniques',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB09-Data-Formats',
        difficulty: 'Intermediate',
        duration: '2 hours',
        estimatedMinutes: 120,
        tags: ['Python', 'Data Formats', 'Serialization'],
        prerequisites: ['Test Driven Development'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-working-with-json',
        title: 'Working with JSON',
        description: 'Master JSON data manipulation, parsing, and generation in Python',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB09A-Working-with-JSON',
        difficulty: 'Intermediate',
        duration: '1.5 hours',
        estimatedMinutes: 90,
        tags: ['Python', 'JSON', 'Data Processing'],
        prerequisites: ['Data Formats'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-working-with-yaml',
        title: 'Working with YAML',
        description: 'Learn YAML processing and configuration management in Python',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB09B-Working-with-YAML',
        difficulty: 'Intermediate',
        duration: '1.5 hours',
        estimatedMinutes: 90,
        tags: ['Python', 'YAML', 'Configuration'],
        prerequisites: ['Working with JSON'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-working-with-xml',
        title: 'Working with XML',
        description: 'Parse, manipulate, and generate XML documents using Python',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB09C-Working-with-XML',
        difficulty: 'Intermediate',
        duration: '2 hours',
        estimatedMinutes: 120,
        tags: ['Python', 'XML', 'Document Processing'],
        prerequisites: ['Working with YAML'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-api-interaction',
        title: 'API Interaction',
        description: 'Learn to interact with REST APIs and web services using Python',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB10-API-Interaction',
        difficulty: 'Intermediate',
        duration: '3 hours',
        estimatedMinutes: 180,
        tags: ['Python', 'APIs', 'REST', 'Web Services'],
        prerequisites: ['Working with XML'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-http-requests-basics',
        title: 'HTTP Requests Basics',
        description: 'Master HTTP request handling and response processing in Python',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB10A-HTTP-Requests-Basics',
        difficulty: 'Intermediate',
        duration: '2 hours',
        estimatedMinutes: 120,
        tags: ['Python', 'HTTP', 'Requests', 'Web APIs'],
        prerequisites: ['API Interaction'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-parsing-api-responses',
        title: 'Parsing API Responses',
        description: 'Learn to parse and handle various API response formats and error handling',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB10B-Parsing-API-Responses',
        difficulty: 'Intermediate',
        duration: '2 hours',
        estimatedMinutes: 120,
        tags: ['Python', 'API Responses', 'Parsing', 'Error Handling'],
        prerequisites: ['HTTP Requests Basics'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-api-authentication',
        title: 'API Authentication',
        description: 'Master various API authentication methods and security best practices',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB10C-API-Authentication',
        difficulty: 'Intermediate',
        duration: '2.5 hours',
        estimatedMinutes: 150,
        tags: ['Python', 'API Authentication', 'Security', 'OAuth'],
        prerequisites: ['Parsing API Responses'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      }
    ]
  },
  {
    id: 'python-professional',
    title: 'Python Development - Professional',
    description: 'Enterprise Python development with advanced patterns, performance optimization, and deployment strategies',
    longDescription: 'Master enterprise-level Python development with design patterns, performance optimization, scalable architectures, and professional deployment practices.',
    icon: '🐍',
    iconColor: 'text-green-600',
    level: 'Advanced',
    difficulty: 'Advanced',
    duration: '10-12 weeks',
    color: 'green',
    gradient: 'from-green-700 to-emerald-700',
    category: 'Programming',
    topics: ['Design Patterns', 'Performance Optimization', 'Scalable Architecture', 'Deployment'],
    prerequisites: ['Python Intermediate'],
    estimatedHours: 110,
    tags: ['Design Patterns', 'Performance', 'Architecture', 'Deployment'],
    lastUpdated: new Date('2024-01-20'),
    resources: [
      {
        id: 'python-cli-development',
        title: 'CLI Development',
        description: 'Build command-line interfaces and tools using Python',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB11-CLI-Development',
        difficulty: 'Advanced',
        duration: '3 hours',
        estimatedMinutes: 180,
        tags: ['Python', 'CLI', 'Command Line', 'argparse'],
        prerequisites: ['Python Intermediate'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-argparse-basics',
        title: 'Argparse Basics',
        description: 'Master command-line argument parsing with Python\'s argparse module',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB11A-Argparse-Basics',
        difficulty: 'Advanced',
        duration: '2 hours',
        estimatedMinutes: 120,
        tags: ['Python', 'argparse', 'Command Line Arguments'],
        prerequisites: ['CLI Development'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-subcommands-help',
        title: 'Subcommands and Help',
        description: 'Implement complex CLI applications with subcommands and comprehensive help systems',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB11B-Subcommands-and-Help',
        difficulty: 'Advanced',
        duration: '2.5 hours',
        estimatedMinutes: 150,
        tags: ['Python', 'Subcommands', 'Help Systems', 'CLI Design'],
        prerequisites: ['Argparse Basics'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-cli-ux-enhancements',
        title: 'CLI UX Enhancements',
        description: 'Enhance CLI user experience with progress bars, colors, and interactive elements',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB11C-CLI-UX-Enhancements',
        difficulty: 'Advanced',
        duration: '2.5 hours',
        estimatedMinutes: 150,
        tags: ['Python', 'CLI UX', 'Progress Bars', 'Interactive CLI'],
        prerequisites: ['Subcommands and Help'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-async-programming',
        title: 'Async Programming',
        description: 'Introduction to asynchronous programming with asyncio and async/await',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB12-Async-Programming',
        difficulty: 'Advanced',
        duration: '4 hours',
        estimatedMinutes: 240,
        tags: ['Python', 'Async', 'asyncio', 'Concurrency'],
        prerequisites: ['CLI UX Enhancements'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-asyncio-basics',
        title: 'Asyncio Basics',
        description: 'Fundamentals of asyncio event loop and asynchronous programming patterns',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB12A-Asyncio-Basics',
        difficulty: 'Advanced',
        duration: '3 hours',
        estimatedMinutes: 180,
        tags: ['Python', 'asyncio', 'Event Loop', 'Async Patterns'],
        prerequisites: ['Async Programming'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-async-http-requests',
        title: 'Async HTTP Requests',
        description: 'Advanced asynchronous HTTP client programming and concurrent request handling',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB12B-Async-HTTP-Requests',
        difficulty: 'Advanced',
        duration: '3 hours',
        estimatedMinutes: 180,
        tags: ['Python', 'Async HTTP', 'aiohttp', 'Concurrent Requests'],
        prerequisites: ['Asyncio Basics'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-concurrency-patterns',
        title: 'Concurrency Patterns',
        description: 'Master advanced concurrency patterns, threading, and parallel processing in Python',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB12C-Concurrency-Patterns',
        difficulty: 'Advanced',
        duration: '4 hours',
        estimatedMinutes: 240,
        tags: ['Python', 'Concurrency', 'Threading', 'Parallel Processing'],
        prerequisites: ['Async HTTP Requests'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-distributed-systems',
        title: 'Distributed Systems with Python',
        description: 'Build scalable distributed systems using Python with message queues, microservices, and distributed databases',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB13-Distributed-Systems-with-Python',
        difficulty: 'Advanced',
        duration: '6 hours',
        estimatedMinutes: 360,
        tags: ['Python', 'Distributed Systems', 'Microservices', 'Message Queues'],
        prerequisites: ['Concurrency Patterns'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      },
      {
        id: 'python-advanced-metaprogramming',
        title: 'Advanced Metaprogramming and Reflection',
        description: 'Master Python metaprogramming, decorators, metaclasses, and reflection for dynamic code generation',
        type: 'lab',
        url: 'https://github.com/study-ORCATech-cloud/python-labs/tree/main/Core-Python/LAB14-Advanced-Metaprogramming-and-Reflection',
        difficulty: 'Advanced',
        duration: '5 hours',
        estimatedMinutes: 300,
        tags: ['Python', 'Metaprogramming', 'Metaclasses', 'Reflection'],
        prerequisites: ['Distributed Systems with Python'],
        isExternal: true,
        lastUpdated: new Date('2024-01-18'),
        isInteractive: true
      }
    ]
  },
  {
    id: 'java-beginner',
    title: 'Java Development - Beginner',
    description: 'Java fundamentals including syntax, OOP concepts, and basic application development',
    longDescription: 'Learn Java programming from the ground up. Master Java syntax, object-oriented programming principles, collections, and basic application development.',
    icon: '☕',
    iconColor: 'text-orange-400',
    level: 'Beginner',
    difficulty: 'Beginner',
    duration: '6-8 weeks',
    color: 'orange',
    gradient: 'from-orange-500 to-red-500',
    category: 'Programming',
    topics: ['Java Syntax', 'OOP Principles', 'Collections', 'Basic Applications'],
    prerequisites: ['Basic programming knowledge (helpful but not required)'],
    estimatedHours: 75,
    tags: ['Java', 'OOP', 'Collections', 'Programming Basics'],
    isUnderMaintenance: true,
    lastUpdated: new Date('2024-01-25'),
    resources: []
  },
  {
    id: 'java-intermediate',
    title: 'Java Development - Intermediate',
    description: 'Advanced Java including Spring framework, databases, web services, and enterprise patterns',
    longDescription: 'Advance your Java skills with Spring framework, database integration, RESTful web services, testing frameworks, and enterprise development patterns.',
    icon: '☕',
    iconColor: 'text-orange-500',
    level: 'Intermediate',
    difficulty: 'Intermediate',
    duration: '8-10 weeks',
    color: 'orange',
    gradient: 'from-orange-600 to-red-600',
    category: 'Programming',
    topics: ['Spring Framework', 'Database Integration', 'RESTful Services', 'Testing'],
    prerequisites: ['Java Beginner'],
    estimatedHours: 95,
    tags: ['Spring', 'REST APIs', 'Databases', 'Testing'],
    isUnderMaintenance: true,
    lastUpdated: new Date('2024-01-25'),
    resources: []
  },
  {
    id: 'java-professional',
    title: 'Java Development - Professional',
    description: 'Enterprise Java development with microservices, performance tuning, and scalable architectures',
    longDescription: 'Master enterprise Java development with microservices architecture, performance optimization, advanced Spring features, and scalable system design.',
    icon: '☕',
    iconColor: 'text-orange-600',
    level: 'Advanced',
    difficulty: 'Advanced',
    duration: '10-12 weeks',
    color: 'orange',
    gradient: 'from-orange-700 to-red-700',
    category: 'Programming',
    topics: ['Microservices Architecture', 'Performance Optimization', 'Advanced Spring', 'System Design'],
    prerequisites: ['Java Intermediate'],
    estimatedHours: 110,
    tags: ['Microservices', 'Performance', 'Architecture', 'Scalability'],
    isUnderMaintenance: true,
    lastUpdated: new Date('2024-01-25'),
    resources: []
  }
];
