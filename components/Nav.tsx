'use client';
import Link from 'next/link';
import { IconHome, IconMessage, IconPerson } from '@/components/icons/index';
import { cn } from '@/utils/cn';
import { usePathname } from 'next/navigation';

const navList = [
  {
    href: '/',
    icon: IconHome,
    text: 'Home',
    iconClassName: 'fill-[#000] group-hover:fill-primary',
    hoverClassName: 'fill-primary',
  },
  {
    href: '/chat',
    icon: IconMessage,
    text: 'Chatting',
    iconClassName: 'stroke-[#000] group-hover:stroke-primary',
    hoverClassName: 'stroke-primary',
  },
  {
    href: '/mypage',
    icon: IconPerson,
    text: 'Mypage',
    iconClassName: 'fill-[#000] group-hover:fill-primary',
    hoverClassName: 'fill-primary',
  },
];

const Nav = () => {
  const pathName = usePathname();

  return (
    <nav className="flex lg:flex-col lg:gap-4">
      {navList.map((nav, index) => (
        <Link
          key={index}
          href={nav.href}
          className={cn(
            `group mx-auto flex w-full flex-col items-center justify-center rounded-lg px-4 py-2 text-center text-gray-400 hover:bg-gray-100 ${pathName.startsWith(nav.href) && nav.href !== '/' ? 'bg-gray-100' : ''}`,
          )}
        >
          <i className="w-8">
            <nav.icon
              className={cn(
                `${nav.iconClassName} ${pathName.startsWith(nav.href) && nav.href !== '/' ? nav.hoverClassName : ''}`,
              )}
            />
          </i>
          <span
            className={cn(
              `block text-xs group-hover:text-primary-medium ${pathName.startsWith(nav.href) && nav.href !== '/' ? 'text-primary-medium' : ''}`,
            )}
          >
            {nav.text}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
