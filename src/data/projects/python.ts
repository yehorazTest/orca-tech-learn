
import { Project } from '../../types/project';

export const pythonProjects: Project[] = [
  {
    id: 'python-web-scraper',
    title: 'Web Scraper with Beautiful Soup',
    description: 'Build a web scraper to extract data from websites and save to CSV/JSON',
    longDescription: 'Create a comprehensive web scraping application using Python, Beautiful Soup, and requests library. Learn to handle different HTML structures, manage rate limiting, and export data in various formats.',
    difficulty: 'Intermediate',
    estimatedHours: 8,
    category: 'Python',
    tags: ['web-scraping', 'beautifulsoup', 'requests', 'csv', 'json'],
    prerequisites: ['Basic Python knowledge', 'HTML fundamentals', 'HTTP concepts'],
    objectives: [
      'Master web scraping techniques with Beautiful Soup',
      'Handle different data formats and structures',
      'Implement error handling and rate limiting',
      'Export data to CSV and JSON formats'
    ],
    deliverables: [
      'Functional web scraper script',
      'Data export functionality',
      'Error handling implementation',
      'Documentation and usage examples'
    ],
    resources: [
      {
        id: 'bs4-docs',
        title: 'Beautiful Soup Documentation',
        description: 'Official documentation for Beautiful Soup library',
        type: 'Documentation',
        url: 'https://www.crummy.com/software/BeautifulSoup/bs4/doc/',
        isExternal: true
      }
    ],
    isPopular: true,
    lastUpdated: new Date('2024-01-15')
  },
  {
    id: 'python-api-project',
    title: 'REST API with FastAPI',
    description: 'Build a RESTful API using FastAPI with database integration',
    longDescription: 'Develop a complete REST API using FastAPI framework with SQLAlchemy ORM, authentication, and comprehensive documentation. Perfect for backend development practice.',
    difficulty: 'Advanced',
    estimatedHours: 12,
    category: 'Python',
    tags: ['fastapi', 'rest-api', 'sqlalchemy', 'authentication', 'swagger'],
    prerequisites: ['Python OOP concepts', 'Database fundamentals', 'HTTP/REST knowledge'],
    objectives: [
      'Build RESTful APIs with FastAPI',
      'Implement database models with SQLAlchemy',
      'Add authentication and authorization',
      'Create comprehensive API documentation'
    ],
    deliverables: [
      'Complete FastAPI application',
      'Database models and migrations',
      'Authentication system',
      'API documentation with Swagger'
    ],
    resources: [
      {
        id: 'fastapi-docs',
        title: 'FastAPI Documentation',
        description: 'Official FastAPI documentation and tutorials',
        type: 'Documentation',
        url: 'https://fastapi.tiangolo.com/',
        isExternal: true
      }
    ],
    isNew: true,
    lastUpdated: new Date('2024-01-20')
  }
];
