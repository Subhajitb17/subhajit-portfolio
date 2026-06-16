import Link from 'next/link';

import { Container } from '@/components/layout';
import { Logo } from '@/components/shared';

const navigationItems = [
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Engineering',
    href: '#projects',
  },
  {
    label: 'Technologies',
    href: '#skills',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
