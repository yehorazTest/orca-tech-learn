
import { Course } from '../../types/learningPath';
import { devopsCourses } from './devops';
import { programmingCourses } from './programming';
import { webCourses } from './web';
import { cloudCourses } from './cloud';
import { expertCourses } from './expert';

export const courses: Course[] = [
  ...devopsCourses,
  ...programmingCourses,
  ...webCourses,
  ...cloudCourses
];

export const coreCourses: Course[] = courses;
export { expertCourses };

// Legacy export for backwards compatibility
export { courses as default };
