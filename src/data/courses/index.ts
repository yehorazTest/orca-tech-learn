
import { Course } from '../../types/learningPath';
import { programmingCourses } from './programming';
import { webCourses } from './web';
import { cloudCourses } from './cloud';
import { expertCourses } from './expert';
import { kubernetesCourses } from './kubernetes';
import { dockerCourses } from './docker';
import { gitCourses } from './git';
import { sysadminCourses } from './sysadmin';
import { cicdCourses } from './cicd';
import { iacCourses } from './iac';

// All courses including both core and expert courses
export const courses: Course[] = [
  ...programmingCourses,
  ...webCourses,
  ...cloudCourses,
  ...kubernetesCourses,
  ...dockerCourses,
  ...gitCourses,
  ...sysadminCourses,
  ...cicdCourses,
  ...iacCourses,
  ...expertCourses
];

// Core courses (excluding expert courses)
export const coreCourses: Course[] = [
  ...programmingCourses,
  ...webCourses,
  ...cloudCourses,
  ...kubernetesCourses,
  ...dockerCourses,
  ...gitCourses,
  ...sysadminCourses,
  ...cicdCourses,
  ...iacCourses
];

// Expert courses
export { expertCourses };

// Legacy export for backwards compatibility
export { courses as default };
