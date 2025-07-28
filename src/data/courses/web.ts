
import { Course } from '../../types/learningPath';

export const webCourses: Course[] = [
  {
    id: 'html-css-fundamentals',
    title: 'HTML & CSS Fundamentals',
    description: 'Learn the building blocks of web development with HTML structure and CSS styling',
    longDescription: 'Master HTML markup and CSS styling to create beautiful, responsive web pages. Learn semantic HTML, CSS Grid, Flexbox, and modern CSS techniques.',
    icon: '🌐',
    iconColor: 'text-blue-400',
    level: 'Beginner',
    difficulty: 'Beginner',
    duration: '4-6 weeks',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
    category: 'Web',
    topics: ['HTML5', 'CSS3', 'Responsive Design', 'Flexbox', 'Grid'],
    prerequisites: ['Basic computer skills'],
    estimatedHours: 60,
    tags: ['HTML', 'CSS', 'Web Development', 'Responsive'],
    lastUpdated: new Date('2024-01-25'),
    resources: [],
    isNew: true,
    isUnderMaintenance: true
  }
];
