const technologies = ['Node.js', 'TypeScript', 'Next.js', 'MongoDB', 'Docker'];

export function TechStack() {
  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech) => (
        <span key={tech} className="rounded-full border px-3 py-1 text-sm text-muted-foreground">
          {tech}
        </span>
      ))}
    </div>
  );
}
