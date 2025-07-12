
import { Course } from '../../types/learningPath';
import { cicdFundamentalsCourse } from './cicd/cicd-fundamentals';
import { githubActionsCourse } from './cicd/github-actions';
import { jenkinsCourse } from './cicd/jenkins';

export const cicdCourses: Course[] = [
  cicdFundamentalsCourse,
  githubActionsCourse,
  jenkinsCourse
];
