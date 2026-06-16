import { HeroSection } from '@/features/hero';
import { AboutSection } from '@/features/about';
import { ExperienceSection } from '@/features/experience';
import { ProjectsSection } from '@/features/projects';
import { SkillsSection } from '@/features/skills';
import { ContactSection } from '@/features/contact';

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <AboutSection />

      <ExperienceSection />

      <ProjectsSection />

      <SkillsSection />

      <ContactSection />
    </>
  );
}
