import { projectsContent } from './placeholder-data';

export function fetchProject(slug: string) {
  return projectsContent.projects.find((proj) => proj.slug === slug);
}
