
import { pythonProjects } from './python';
import { dockerProjects } from './docker';
import { kubernetesProjects } from './kubernetes';
import { cicdProjects } from './cicd';
import { iacProjects } from './iac';

export const allProjects = [
  ...pythonProjects,
  ...dockerProjects,
  ...kubernetesProjects,
  ...cicdProjects,
  ...iacProjects
];

export const projectsByCategory = {
  Python: pythonProjects,
  Docker: dockerProjects,
  Kubernetes: kubernetesProjects,
  'CI/CD': cicdProjects,
  IaC: iacProjects
};

export { pythonProjects, dockerProjects, kubernetesProjects, cicdProjects, iacProjects };
