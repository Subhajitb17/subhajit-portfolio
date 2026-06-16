import Link from 'next/link';

import type { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Header */}

      <div className="space-y-3">
        <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>

        <p className="text-sm font-medium text-primary">{project.role}</p>

        <p className="leading-7 text-muted-foreground">{project.summary}</p>
      </div>

      {/* Problem */}

      <div className="mt-8">
        <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Problem
        </h4>

        <p className="text-sm leading-7 text-muted-foreground">{project.problem}</p>
      </div>

      {/* Solution */}

      <div className="mt-6">
        <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Engineering Solution
        </h4>

        <p className="text-sm leading-7 text-muted-foreground">{project.solution}</p>
      </div>

      {/* Tech Stack */}

      <div className="mt-8 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border bg-muted/30 px-3 py-1 text-xs font-medium"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Footer */}

      <div className="mt-auto pt-8">
        <Link
          href={`/case-studies/${project.caseStudySlug}`}
          className="inline-flex items-center font-semibold transition-colors hover:text-primary"
        >
          View Architecture →
        </Link>
      </div>
    </article>
  );
}
