import Image from '@/app/ui/image';
import Link from 'next/link';
import { cn } from '../lib/utils';
import { homeHeroContent, homeHeroSocial } from '@/app/lib/placeholder-data';

export default function HomeHero() {
  return (
    <section
      id="home-hero"
      className={cn(
        'container bg-center bg-cover bg-repeat text-gray-700 relative',
        'flex flex-col items-center justify-center h-screen gap-y-8 bg-slate-300'
      )}
      style={{ background: "url('/bg-home-hero.webp')" }}
    >
      <div className="text-center text-gray-900">
        <h1 className="text-4xl font-bold uppercase">{homeHeroContent.title}</h1>
        <h2 className="text-3xl font-semibold">{homeHeroContent.subtitle}</h2>
      </div>
      <div className="max-w-3xl">
        <p className="w-full text-lg leading-8 text-center whitespace-pre-line">
          {homeHeroContent.desc}
        </p>
      </div>
      <a
        className={cn(
          'bg-blue-500 text-white rounded-md uppercase shadow-[0_5px_15px_0_rgba(0, 0, 0, 0.15)] transition-transform',
          'inline-block font-bold mt-2 px-12 py-3 text-sm',
          'cursor-pointer hover:bg-blue-400'
        )}
        href="#projects"
      >
        Projects
      </a>

      <div
        className={cn(
          'relative w-[18px] border-2 h-8 border-gray-600 rounded-3xl',
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
              imgContainer="max-w-12 max-h-12"
              className="p-2"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
