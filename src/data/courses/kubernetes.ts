
import { Course } from '../../types/learningPath';
import { kubernetesBeginner } from './kubernetes-beginner';
import { kubernetesIntermediate } from './kubernetes-intermediate';
import { kubernetesProfessional } from './kubernetes-professional';

export const kubernetesCourses: Course[] = [
  kubernetesBeginner,
  kubernetesIntermediate,
  kubernetesProfessional
];
