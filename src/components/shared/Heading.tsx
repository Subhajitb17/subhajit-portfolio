import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';
import { typography } from '@/constants/typography';

type HeadingElement = 'h1' | 'h2' | 'h3';

interface HeadingProps extends ComponentPropsWithoutRef<HeadingElement> {
  as?: HeadingElement;
}

export function Heading({ as: Component = 'h1', className, children, ...props }: HeadingProps) {
  const variants = {
    h1: typography.h1,
    h2: typography.h2,
    h3: typography.h3,
  };

  return (
    <Component className={cn(variants[Component], className)} {...props}>
      {children}{' '}
    </Component>
  );
}
