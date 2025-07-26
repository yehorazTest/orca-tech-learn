
import { Course } from '../../types/learningPath';
import { kubernetesExpert } from './expert/kubernetes-expert';
import { pythonCloudExpert } from './expert/python-cloud-expert';
import { devopsExpertCourses } from './expert/devops-expert';
import { cicdExpertCourses } from './expert/cicd-expert';
import { programmingExpertCourses } from './expert/programming-expert';
import { gitExpertCourses } from './expert/git-expert';
import { dockerExpertCourse } from './expert/docker-expert';

export const expertCourses: Course[] = [
  kubernetesExpert,
  ...devopsExpertCourses,
  ...cicdExpertCourses,
  pythonCloudExpert,
  ...programmingExpertCourses,
  ...gitExpertCourses,
  dockerExpertCourse
];
