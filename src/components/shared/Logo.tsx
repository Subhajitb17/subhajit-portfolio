import Link from 'next/link';

export function Logo() {
  return (
    <Link
      href="/"
      className="text-xl font-black tracking-tight transition-opacity hover:opacity-80"
    >
      SB
    </Link>
  );
}
