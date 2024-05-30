import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-[1000] w-full overflow-hidden border-b bg-white px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="w-6 lg:hidden"></div>
        <Link href={'/'}>
          <Image width={100} height={100} src={'/images/logo.png'} alt="logo" />
        </Link>
        <nav className="font-sen hidden items-center text-lg uppercase lg:flex">
          <Link
            href={'/'}
            className="flex border-b-2 border-primary px-6 py-2 text-primary"
          >
            소개
          </Link>
          <Link href={'/'} className="flex border-b-2 border-white px-6 py-2">
            채팅
          </Link>
        </nav>
        <div className="lg:hidden">
          <button className="flex flex-col lg:hidden">
            <span className="mb-1 h-1 w-6 bg-gray-500"></span>
            <span className="mb-1 h-1 w-6 bg-gray-500"></span>
            <span className="mb-1 h-1 w-6 bg-gray-500"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
