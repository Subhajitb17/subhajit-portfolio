export interface Project {
  id: string;

  title: string;

  role: string;

  summary: string;

  problem: string;

  solution: string;

  impact: string;

  technologies: string[];

  architecture: string[];

  featured: boolean;

  githubUrl?: string;

  liveUrl?: string;

  caseStudySlug?: string;
}
