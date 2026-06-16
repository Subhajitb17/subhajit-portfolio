import Link from 'next/link';

import { Container, Section } from '@/components/layout';
import { Heading } from '@/components/shared';

import { contact } from '@/data/contact';

export function ContactSection() {
  return (
    <Section id="contact">
      <Container className="max-w-4xl space-y-8">
        <Heading as="h2">{"Let's Build Something Great"}</Heading>

        <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
          {
            "I'm always interested in backend engineering, scalable systems, and product-focused software development opportunities. If you're building something meaningful, I'd love to connect."
          }
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">Email</h3>

            <Link
              href={`mailto:${contact.email}`}
              className="mt-2 block text-muted-foreground hover:text-foreground"
            >
              {contact.email}
            </Link>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">Phone</h3>

            <Link
              href={`tel:${contact.phone.replace(/\s+/g, '')}`}
              className="mt-2 block text-muted-foreground hover:text-foreground"
            >
              {contact.phone}
            </Link>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">Location</h3>

            <p className="mt-2 text-muted-foreground">{contact.location}</p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">GitHub</h3>

            <Link
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-muted-foreground hover:text-foreground"
            >
              {'View Profile →'}
            </Link>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">LinkedIn</h3>

            <Link
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-muted-foreground hover:text-foreground"
            >
              {'Connect →'}
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
