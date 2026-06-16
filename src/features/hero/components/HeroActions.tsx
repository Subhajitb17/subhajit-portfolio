import Link from 'next/link';

import { Button } from '@/components/ui/button';

export function HeroActions() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button asChild>
        <Link href="/projects">View Projects</Link>
      </Button>

      <Button variant="outline" asChild>
        <Link href="/case-studies">Architecture Case Studies</Link>
      </Button>
    </div>
  );
}
