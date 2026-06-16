import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type SectionProps = ComponentPropsWithoutRef<'section'>;

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn('py-20', className)} {...props}>
      {children}
    </section>
  );
}
