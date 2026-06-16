import { Container, Section } from '@/components/layout';
import { Heading } from '@/components/shared';

import { projects } from '@/data/projects';

import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
  return (
    <Section id="projects">
      <Container className="space-y-8">
        <Heading as="h2">Featured Projects</Heading>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </Container>
    </Section>
  );
}
