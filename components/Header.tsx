import Image from 'next/image';
import Link from 'next/link';
// import IconMessage from '/public/images/svgs/message-icon.svg';
import { IconMessage, IconPerson } from '@/components/icons/index';

const Header = () => {
  return (
    <header className="w-full overflow-hidden border-b px-8 py-4 lg:flex lg:w-[130px] lg:items-center lg:justify-center lg:border-b-0 lg:border-r lg:p-0">
      <div className="lg:fixed lg:top-5 lg:h-[calc(100vh-50px)]">
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
          <nav className="hidden items-center gap-4 text-lg lg:flex lg:flex-col">
            <Link href={'/chat'} className="flex px-6 py-2">
              <i className="w-10">
                <IconMessage
                  stroke={'#000'}
                  className=" hover:stroke-primary"
                />
              </i>
            </Link>
            <Link href={'/mypage'} className="flex px-6 py-2">
              <i className="w-10">
                <IconPerson className="hover:fill-primary" />
              </i>
            </Link>
          </nav>
          <div className="lg:hidden">
            <button className="flex flex-col lg:hidden">
              <span className="mb-1 h-1 w-6 bg-gray-500"></span>
              <span className="mb-1 h-1 w-6 bg-gray-500"></span>
              <span className="mb-1 h-1 w-6 bg-gray-500"></span>
            </button>
          </div>
          <Link href={'/signin'} className="hidden lg:block">
            <span className="rounded-lg border p-4">LOGIN</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
