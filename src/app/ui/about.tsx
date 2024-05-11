import { aboutContent } from '@/app/lib/placeholder-data';
import { cn } from '@/app/lib/utils';
import { ButtonLink } from '@/app/ui/button';

export default function About() {
  return (
    <section id="about" className="w-full h-full pt-32 bg-zinc-50">
      <div className="container mb-24 text-slate-600">
        <div className="relative text-center">
          <h2
            className={cn(
              'text-lg lg:text-4xl font-bold uppercase mb-8 text-black',
              'after:bottom-2/3 after:lg:bottom-1/2 after:md:bottom-2/3',
              'after:w-10 after:h-[5px] after:bg-blue-700 after:rounded-3xl after:absolute after:-translate-x-1/2 after:left-1/2'
            )}
          >
            {aboutContent.title}
          </h2>
          <p className="text-sm whitespace-pre-line lg:text-xl">{aboutContent.desc}</p>
        </div>
        <div className="flex flex-col justify-between my-10 gap-8 lg:flex-row">
          {/* GET TO KNOW ME */}
          <div className="flex flex-col flex-1 gap-y-4 lg:gap-y-8">
            <h3 className="text-lg font-bold text-black lg:text-3xl">
              {aboutContent.getToKnowTitle}
            </h3>
            <p className="text-sm lg:text-lg">{aboutContent.getToKnowDesc}</p>
          </div>

          {/* MY SKILLS */}
          <div className="flex flex-col flex-wrap flex-1 gap-y-4 lg:gap-y-8">
            <h3 className="text-lg font-bold text-black lg:text-3xl">{aboutContent.skillTitle}</h3>
            <div className="flex flex-wrap gap-4">
              {aboutContent.skills.map((skill) => (
                <span
                  className="px-4 py-2 text-sm font-medium bg-gray-300 rounded-md lg:px-6 lg:py-4"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <ButtonLink link="#contact" title="contact" className="max-w-fit" />
      </div>
    </section>
  );
}
