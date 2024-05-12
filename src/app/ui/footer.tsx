import Link from 'next/link';

import { footerContent } from '@/app/lib/placeholder-data';

import Image from '@/app/ui/image';
import { cn } from '../lib/utils';

export default function Footer() {
  return (
    <footer className="w-full text-white bg-black">
      <div
        className={cn(
          'container flex flex-col gap-y-6 py-14 lg:max-w-5xl',
          'lg:flex-row-reverse lg:justify-between lg:flex-wrap lg:gap-x-8'
        )}
      >
        <div className="flex flex-col gap-y-3 lg:flex-1 lg:items-end">
          <h2 className="text-lg font-bold lg:text-3xl">{footerContent.socialTitle}</h2>
          <ul className="flex gap-x-3">
            {footerContent.socials.map((social) => (
              <li key={social.label}>
                <Link href={social.url} passHref target="_blank" rel="noopener noreferrer">
                  <Image
                    src={social.icon}
                    alt={social.label}
                    imgContainer="max-w-6 max-h-6"
                    className="hover:scale-110"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-y-3 lg:flex-1">
          <h1 className="text-xl font-bold lg:text-4xl">{footerContent.name}</h1>
          <p className="text-sm lg:text-lg">{footerContent.desc}</p>
        </div>

        <hr className="w-full h-[1px] border-slate-500" />

        <div className="space-x-1 text-center lg:mx-auto">
          <span className="text-xs leading-6 tracking-normal">
            {footerContent.copyright.replace('{date}', new Date().getFullYear().toString())}
          </span>
          <span className="text-xs leading-6 tracking-normal text-left underline">
            {footerContent.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
