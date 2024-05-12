import ProjectHero from '@/app/ui/projects/project-hero';
import ProjectDetail from '@/app/ui/projects/project-detail';

import { fetchProject } from '@/app/lib/data';

type Props = {
  params: {
    slug: string;
  };
};

export default function Project({ params }: Readonly<Props>) {
  const project = fetchProject(params.slug);

  return (
    <main className="w-full h-full">
      <ProjectHero project={project} />
      <ProjectDetail project={project} />
    </main>
  );
}
