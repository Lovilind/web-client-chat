'use client';
import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';
import { IconArrow } from '../icons';
import { useRouter } from 'next/navigation';
import { useCallback, useLayoutEffect } from 'react';
import useGetLogout from '@/hooks/react-query/auth/useGetLogout';
import useUserStore from '@/store/useUserStore';

const Header = () => {
  const { isLogin, setIsLogin } = useUserStore();
  const router = useRouter();
  const { refetch } = useGetLogout();
  const loginCheck = useCallback(() => {
    if (localStorage.getItem('accessToken')) {
      return setIsLogin(true);
    }
    return setIsLogin(false);
  }, [setIsLogin]);

  const handleLogout = async () => {
    await refetch();
    router.push('/signin');
  };

  useLayoutEffect(() => {
    loginCheck();
  }, [loginCheck]);
  return (
    <header className="sticky top-0 z-2 w-full overflow-hidden border-b bg-white px-8 py-4 lg:relative lg:flex lg:w-[130px] lg:items-center lg:justify-center lg:border-b-0 lg:border-r lg:p-0">
      <div className="lg:fixed lg:top-5 lg:h-[calc(100vh-50px)]">
        <button
          onClick={() => router.back()}
          className="absolute left-[3%] top-[35%]"
        >
          <i className="inline-block h-5 w-5">
            <IconArrow className="inline-block fill-gray-600 lg:hidden" />
          </i>
        </button>
        <div className="flex h-[80%] items-center justify-between lg:flex-col">
          <div className="w-6 lg:hidden"></div>
          <Link href={'/'}>
            <Image
              width={100}
              height={100}
              src={'/images/logo.png'}
              alt="logo"
            />
          </Link>
          <div className="hidden lg:block">
            <Nav />
          </div>
          <div className="w-6 lg:hidden"></div>
          {isLogin ? (
            <button onClick={handleLogout} className="hidden lg:block">
              <span className="rounded-lg border p-4">LOGOUT</span>
            </button>
          ) : (
            <Link href={'/signin'} className="hidden lg:block">
              <span className="rounded-lg border p-4">LOGIN</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
