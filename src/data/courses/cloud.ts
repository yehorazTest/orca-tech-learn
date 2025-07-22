
import { Course } from '../../types/learningPath';
import { awsCourses } from './cloud/aws';
import { gcpCourses } from './cloud/gcp';
import { azureCourses } from './cloud/azure';

export const cloudCourses: Course[] = [
  ...awsCourses,
  ...gcpCourses,
  ...azureCourses
];
