import { Container, Section } from '@/components/layout';
import { Heading } from '@/components/shared';

export function AboutSection() {
  return (
    <Section>
      <Container className="space-y-8">
        <Heading as="h2" className="text-4xl">
          About
        </Heading>

        <p className="text-lg leading-8 text-muted-foreground">
          I build backend systems with a focus on scalability, maintainability, and long-term
          engineering quality.
        </p>

        <p className="text-lg leading-8 text-muted-foreground">
          My interest goes beyond implementing features. I enjoy designing APIs, making architecture
          decisions, improving performance, and owning products from development to deployment.
        </p>

        <p className="text-lg leading-8 text-muted-foreground">
          I believe good software comes from clear thinking, simple solutions, and continuous
          improvement rather than unnecessary complexity.
        </p>
      </Container>
    </Section>
  );
}
