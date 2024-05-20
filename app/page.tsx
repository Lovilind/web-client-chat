import Link from 'next/link';
import { CounterStoreProvider } from './_store/providers/sample-store-provider';

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-start">
      <Link href={'/login'}>
        <button>로그인하기</button>
      </Link>
      <Link href={'/chat'}>
        <button>채팅하기</button>
      </Link>
      <Link href={'/register'}>
        <button>회원가입하기</button>
      </Link>
    </main>
  );
}
