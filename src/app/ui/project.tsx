import { Fragment } from 'react';
import { cn } from '@/app/lib/utils';
import { projectsContent } from '@/app/lib/placeholder-data';
import Link from 'next/link';
import Image from '@/app/ui/image';
import { ButtonLink } from './button';

export default function Project() {
  return (
    <section id="projects" className="container w-full h-full bg-white">
      <div
        className={cn(
          'min-h-screen py-24',
          'flex flex-col gap-y-8 items-center justify-center',
          'text-slate-600'
        )}
      >
        {/* HEADING SECTION */}
        <div className="text-center max-w-[90%] relative">
          <h2
            className={cn(
              'text-lg lg:text-4xl font-bold uppercase mb-8 text-black',
              'after:w-10 after:h-[5px] after:bg-blue-700 after:rounded-3xl after:absolute after:-translate-x-1/2 after:left-1/2',
              'after:bottom-2/3 after:sm:bottom-1/2'
            )}
          >
            {projectsContent.title}
          </h2>
          <p className="text-sm lg:text-lg">{projectsContent.desc}</p>
        </div>

        {/* PROJECT ITEMS SECTION */}
        {projectsContent.projects.map((proj, index) => (
          <Fragment key={proj.title}>
            <figure className="flex flex-col items-center justify-center gap-y-8 lg:flex-row lg:justify-between lg:gap-x-4">
              <Image src={proj.imageUrl} alt={proj.title} imgContainer="flex-[2]" />
              <div className="flex-1 space-y-8">
                <Link
                  href={proj.link}
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <h3 className="text-lg font-bold text-center text-black lg:text-3xl">
                    {proj.title}
                  </h3>
                </Link>
                <figcaption className="text-sm lg:text-lg">
                  {proj.desc.includes('{.}') ? (
                    <>
                      {proj.desc.split('{.}')[0]}
                      <ul className="mt-3 list-item">
                        {proj.desc.split('{.}').map((text, idx) => {
                          if (idx > 0) {
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
                    proj.desc
                  )}
                </figcaption>
              </div>
            </figure>

            <ButtonLink title="case study" link={`/project/${proj.slug}`} />

            {index !== projectsContent.projects.length - 1 && (
              <hr className="border-b border-b-slate-50 w-2/3 h-[1px]" />
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
