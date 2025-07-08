
import { Course } from '../../types/learningPath';
import { devOpsCourses } from './devops';
import { programmingCourses } from './programming';
import { webCourses } from './web';
import { cloudCourses } from './cloud';
import { expertCourses } from './expert';
import { kubernetesCourses } from './kubernetes';

// All courses including both core and expert courses
export const courses: Course[] = [
  ...devOpsCourses,
  ...programmingCourses,
  ...webCourses,
  ...cloudCourses,
  ...kubernetesCourses,
  ...expertCourses
];

// Core courses (excluding expert courses)
export const coreCourses: Course[] = [
  ...devOpsCourses,
  ...programmingCourses,
  ...webCourses,
  ...cloudCourses,
  ...kubernetesCourses
];

// Expert courses
export { expertCourses };

// Legacy export for backwards compatibility
export { courses as default };
