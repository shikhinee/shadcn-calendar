import Link from "next/link";

export function Nav() {
  return (
    <nav className="flex space-x-4 mb-4">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      <Link href="/calendar" className="hover:underline">
        Calendar
      </Link>
    </nav>
  );
}
