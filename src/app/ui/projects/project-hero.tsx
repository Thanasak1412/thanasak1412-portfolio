import { projectContent } from '@/app/lib/placeholder-data';
import { ButtonLink } from '../button';

import type { Project } from '@/app/lib/definitions';

type Props = {
  project?: Project;
};

export default function ProjectHero({ project }: Readonly<Props>) {
  if (!project) {
    return null;
  }

  return (
    <section
      id="project-hero"
      className="w-full h-full bg-center bg-no-repeat bg-cover py-14"
      style={{ background: 'url(/bg-common.webp)' }}
    >
      <div className="container flex flex-col gap-y-6 text-slate-600">
        <h1 className="text-4xl font-bold text-center text-black">{project.title}</h1>
        <p className="text-sm lg:text-lg">{project.desc.split('{.}')[0]}</p>
        <ButtonLink
          link={project.link}
          title={projectContent.projectLink}
          className="mx-auto max-w-fit"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </section>
  );
}
