import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="min-h-50 flex flex-row items-start justify-start ps-12 pt-12">
      <Link href={'/'}>copyright @ 를 빙자한 홈으로 가기</Link>
    </footer>
  );
}
