
import { Course } from '../../types/learningPath';
import { devopsCourses } from './devops';
import { programmingCourses } from './programming';
import { webCourses } from './web';
import { cloudCourses } from './cloud';
import { expertCourses } from './expert';

// All courses including both core and expert courses
export const courses: Course[] = [
  ...devopsCourses,
  ...programmingCourses,
  ...webCourses,
  ...cloudCourses,
  ...expertCourses
];

// Core courses (excluding expert courses)
export const coreCourses: Course[] = [
  ...devopsCourses,
  ...programmingCourses,
  ...webCourses,
  ...cloudCourses
];

// Expert courses
export { expertCourses };

// Legacy export for backwards compatibility
export { courses as default };
