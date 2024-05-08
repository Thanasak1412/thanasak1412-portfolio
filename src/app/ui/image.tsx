import type { ClassValue } from 'clsx';
import { cn } from '@/app/lib/utils';
import { HTMLAttributes } from 'react';

interface Props extends Omit<HTMLAttributes<HTMLSpanElement>, 'className'> {
  src: string;
  alt: string;
  imgContainer?: ClassValue;
  className?: ClassValue;
}

export default function Image({ src, alt, imgContainer, className, ...other }: Readonly<Props>) {
  return (
    <span className={cn('leading-[1] block overflow-hidden rounded-full', imgContainer)} {...other}>
      <span className="inline-block w-full h-full bg-cover">
        <img src={src} alt={alt} className={cn('object-cover w-full h-full', className)} />
      </span>
    </span>
  );
}
