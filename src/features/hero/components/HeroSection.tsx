import Link from 'next/link';

import { Container, Section } from '@/components/layout';
import { Heading } from '@/components/shared';

const technologies = [
  'Node.js',
  'TypeScript',
  'Express',
  'MongoDB',
  'Docker',
  'GCP',
  'CI/CD',
  'System Design',
];

const stats = [
  {
    value: '4+',
    label: 'Years Experience',
  },
  {
    value: '15+',
    label: 'Production Projects',
  },
  {
    value: '100%',
    label: 'Engineering Focus',
  },
];

export function HeroSection() {
  return (
    <Section className="pt-28 pb-24">
      <Container>
        <div className="max-w-5xl">
          <div className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-600">
            🟢 Open to Backend Engineering Opportunities
          </div>

          <Heading
            as="h1"
            className="mt-8 max-w-5xl text-5xl font-black leading-tight tracking-tight lg:text-7xl"
          >
            BUILDING SCALABLE
            <br />
            BACKEND SYSTEMS
            <br />
            FOR REAL-WORLD PRODUCTS
          </Heading>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-muted-foreground">
            I design and develop production-ready backend systems, REST APIs, scalable
            architectures, and engineering-first products with a focus on maintainability,
            performance, and long-term scalability.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="rounded-xl bg-foreground px-6 py-3 font-semibold text-background transition hover:opacity-90"
            >
              View Engineering Work
            </Link>

            <Link
              href="/resume.pdf"
              className="rounded-xl border px-6 py-3 font-semibold transition hover:bg-muted"
            >
              Download Resume
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <div key={technology} className="rounded-full border bg-muted/30 px-4 py-2 text-sm">
                {technology}
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-6 border-t pt-10 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-5xl font-black">{stat.value}</div>

                <div className="mt-2 text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
