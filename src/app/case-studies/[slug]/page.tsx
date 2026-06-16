interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;

  return (
    <main className="mx-auto max-w-5xl py-20">
      <h1 className="text-5xl font-bold">{slug}</h1>

      <p className="mt-6 text-muted-foreground">Architecture case study coming soon.</p>
    </main>
  );
}
