import { cn } from '@/app/lib/utils';
import type { AnchorHTMLAttributes } from 'react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  link: string;
  className?: string;
}

export function ButtonLink({ title, link, className, ...other }: Readonly<Props>) {
  return (
    <a
      className={cn(
        'bg-blue-500 text-white rounded-md uppercase shadow-[0_5px_15px_0_rgba(0, 0, 0, 0.15)] transition-transform',
        'inline-block font-bold mt-2 px-12 py-4 text-sm',
        'cursor-pointer hover:bg-blue-400',
        className
      )}
      href={link}
      {...other}
    >
      {title}
    </a>
  );
}
