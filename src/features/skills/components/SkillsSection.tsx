import { Container, Section } from '@/components/layout';
import { Heading } from '@/components/shared';

import { skills } from '@/data/skills';

export function SkillsSection() {
  return (
    <Section id="skills">
      <Container className="space-y-8">
        <Heading as="h2">Core Technologies</Heading>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-full border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              {skill}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
