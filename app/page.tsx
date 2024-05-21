import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={'/signin'}>
        <button>로그인하기</button>
      </Link>
      <Link href={'/signup'}>
        <button>회원가입</button>
      </Link>
      <Link href={'/login'}>
        <button>zuatand store test</button>
      </Link>
    </main>
  );
}
