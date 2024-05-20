import Link from 'next/link';

export default function Header() {
  return (
    <header className="min-h-50 flex flex-row items-start justify-start ps-12 pt-12">
      <Link href={'/'}>홈</Link>
    </header>
  );
}
