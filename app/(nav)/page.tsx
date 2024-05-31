import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-start p-24">
      <Link href={'/signin'}>
        <button>로그인하기</button>
      </Link>
      <Link href={'/signup'}>
        <button>회원가입</button>
      </Link>
      <Link href={'/zustand'}>
        <button>zuatand store test</button>
      </Link>
      <Link href={'/chat'}>
        <button>채팅방 입장</button>
      </Link>
      <Link href={'/mypage'}>
        <button>마이페이지</button>
      </Link>
    </main>
  );
}
