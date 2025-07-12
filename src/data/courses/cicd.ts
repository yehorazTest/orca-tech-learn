
import { Course } from '../../types/learningPath';
import { cicdFundamentalsCourse } from './cicd/cicd-fundamentals';
import { githubActionsCourse } from './cicd/github-actions';
import { jenkinsCourse } from './cicd/jenkins';
import { argoCDFundamentalsCourse } from './cicd/argocd-fundamentals';
import { dockerCICDCourse } from './cicd/docker-cicd';

export const cicdCourses: Course[] = [
  cicdFundamentalsCourse,
  githubActionsCourse,
  jenkinsCourse,
  argoCDFundamentalsCourse,
  dockerCICDCourse
];
