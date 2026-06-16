import Link from 'next/link';

import { Container } from '@/components/layout';
import { siteConfig } from '@/config';

export function Footer() {
  return (
    <footer className="border-t">
      <Container className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">{siteConfig.name}</p>

          <p className="text-sm text-muted-foreground">
            Backend Engineer • Product Thinker • System Designer
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          <Link
            href={siteConfig.github}
            target="_blank"
            className="text-muted-foreground hover:text-foreground"
          >
            GitHub
          </Link>

          <Link
            href={siteConfig.linkedin}
            target="_blank"
            className="text-muted-foreground hover:text-foreground"
          >
            LinkedIn
          </Link>

          <Link
            href={`mailto:${siteConfig.email}`}
            className="text-muted-foreground hover:text-foreground"
          >
            Email
          </Link>
        </div>
      </Container>

      <Container className="pb-8">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js, TypeScript and
          Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}
