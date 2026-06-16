import { Container, Section } from '@/components/layout';
import { Heading } from '@/components/shared';

export function ExperienceSection() {
  return (
    <Section id="experience">
      <Container className="space-y-10">
        <Heading as="h2">Professional Experience</Heading>

        <div className="space-y-8">
          <article className="rounded-xl border p-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h3 className="text-2xl font-semibold">Technical Lead</h3>

              <span className="text-sm text-muted-foreground">Nov 2024 &mdash; Present</span>
            </div>

            <p className="mt-1 font-medium text-muted-foreground">
              Yatiken Software Solutions Pvt. Ltd.
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-5 text-muted-foreground">
              <li>
                Designed scalable backend microservices using Node.js, Docker and Google Cloud
                Platform.
              </li>

              <li>
                Built CI/CD pipelines using GitHub Actions and improved engineering delivery
                processes.
              </li>

              <li>Implemented JWT and OTP authentication with secure API design.</li>

              <li>Mentored a team of 7+ developers and established code review standards.</li>

              <li>
                Collaborated with product teams to align technical architecture with business goals.
              </li>
            </ul>
          </article>

          <article className="rounded-xl border p-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h3 className="text-2xl font-semibold">Node.js Backend Developer</h3>

              <span className="text-sm text-muted-foreground">May 2022 &mdash; Oct 2024</span>
            </div>

            <p className="mt-1 font-medium text-muted-foreground">
              Waterdrop Hydrastations Pvt. Ltd.
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-5 text-muted-foreground">
              <li>Architected backend systems for IoT-based water management platforms.</li>

              <li>Integrated Razorpay, Stripe and Paytm payment gateways.</li>

              <li>Optimized MongoDB queries and indexing to improve API performance.</li>

              <li>Enabled real-time telemetry synchronization across distributed IoT stations.</li>
            </ul>
          </article>
        </div>
      </Container>
    </Section>
  );
}
