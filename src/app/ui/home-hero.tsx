import Image from '@/app/ui/image';
import Link from 'next/link';
import { ButtonLink } from '@/app/ui/button';
import { cn } from '../lib/utils';
import { homeHeroContent, homeHeroSocial } from '@/app/lib/placeholder-data';

export default function HomeHero() {
  return (
    <section
      id="home-hero"
      className={cn(
        'container bg-center bg-cover bg-repeat text-gray-700 relative',
        'flex flex-col items-center justify-center h-screen min-h-[64rem] sm:min-h-[unset] gap-y-8 bg-slate-300'
      )}
      style={{ background: "url('/bg-common.webp')" }}
    >
      <div className="absolute flex flex-col items-center justify-center -translate-y-1/2 top-1/2 gap-y-8">
        <div className="text-center text-gray-900">
          <h1 className="text-4xl font-bold uppercase">{homeHeroContent.title}</h1>
          <h2 className="text-3xl font-semibold">{homeHeroContent.subtitle}</h2>
        </div>
        <div className="max-w-[90%] lg:max-w-3xl">
          <p className="w-full text-lg leading-8 text-center whitespace-pre-line">
            {homeHeroContent.desc}
          </p>
        </div>

        <ButtonLink title="projects" link="#projects" />
      </div>

      <div className="flex-grow" />

      {/* MOUSE ITEM */}
      <div
        className={cn(
          'relative w-[18px] border-2 h-8 border-gray-600 rounded-3xl -mb-5',
          'before:absolute before:top-2 before:w-[5px] before:h-[5px] before:left-1/2 before:opacity-100 before:rounded-full before:animate-wheel',
          'before:bg-gray-600 before:-translate-x-1/2'
        )}
      />

      {/* HOME HERO SOCIAL SECTION */}
      <div className="absolute left-0 flex flex-col -translate-y-1/2 top-1/2 bg-white shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]">
        {homeHeroSocial.map((social) => (
          <Link
            key={social.label}
            href={social.url}
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={social.icon}
              alt={social.label}
              imgContainer="max-w-12 max-h-12 rounded-full"
              className="p-2"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
