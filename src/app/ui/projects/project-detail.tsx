import Link from 'next/link';

import Image from '@/app/ui/image';

import { projectContent } from '@/app/lib/placeholder-data';

import type { Project } from '@/app/lib/definitions';
import { cn } from '@/app/lib/utils';
import { ButtonLink } from '../button';

type Props = {
  project: Project;
};

export default function ProjectDetail({ project }: Readonly<Props>) {
  return (
    <section id="project-detail" className="bg-white">
      <div className="container flex flex-col gap-y-8 py-14">
        {/* IMAGE PROJECT */}
        <Image src={project.imageUrl} alt={project.title} imgContainer="max-w-md" />

        {/* OVERVIEW PROJECT */}
        <div className="text-slate-600">
          <h2 className="mb-2 text-lg font-bold text-black whitespace-pre-line lg:text-3xl">
            {projectContent.overviewTitle}
          </h2>
          {project.overview.includes('{.}') ? (
            <>
              <p className="mb-1 text-lg font-semibold">{project.overview.split('{.}')[0]}</p>
              <ul className="list-item">
                {project.overview.split('{.}').map((text, index) => {
                  if (index !== 0) {
                    return (
                      <li className="ml-3 list-disc list-inside" key={text}>
                        {text}
                      </li>
                    );
                  }
                })}
              </ul>
            </>
          ) : (
            <p className="text-sm lg:text-lg text-slate-600">{project.overview.split('{.}')}</p>
          )}
        </div>

        {/* TOOLS PROJECT */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-black lg:text-3xl">{projectContent.tools}</h2>
          <ul className="flex flex-wrap gap-3">
            {project.tools.map((tool) => (
              <li key={tool} className="px-5 py-2 bg-gray-300 rounded-md">
                <span className="text-sm font-semibold lg:text-base text-slate-600">{tool}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* SEE LIVE PROJECT */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-black lg:text-3xl">{projectContent.seeLive}</h2>
          <div className="flex flex-col w-full gap-y-4 md:flex-row md:gap-x-4">
            <ButtonLink
              link={project.githubLink}
              title={projectContent.sourceCodeButton}
              className="w-full mt-0 text-center uppercase md:max-w-fit"
              target="_blank"
              rel="noopener noreferrer"
            />

            <Link
              href="/#projects"
              passHref
              className={cn(
                'w-full uppercase text-center border-2 border-blue-500 text-black font-bold bg-white rounded-md',
                'py-3 px-12 hover:bg-blue-400 hover:text-white md:max-w-fit'
              )}
            >
              {projectContent.backButton}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
