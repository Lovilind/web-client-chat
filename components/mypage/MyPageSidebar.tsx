'use client';

import Link from 'next/link';
import { IconCustomerService, IconPerson, IconUserBook } from '../icons';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/cn';

const sidebarData = [
  { href: '/mypage/profile', label: '프로필', icon: <IconPerson /> },
  {
    href: '/mypage/userform',
    label: '나의성향',
    icon: <IconUserBook className="stroke-black" />,
  },
  {
    href: '/mypage/customer-service',
    label: '고객센터',
    icon: <IconCustomerService className="fill-black" />,
  },
];

const MyPageSidebarItem = (props: {
  item: { href: string; label: string; icon: React.ReactNode };
}) => {
  const pathName = usePathname();
  return (
    <li>
      <Link
        href={props.item.href}
        className={cn(
          `flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 ${pathName === props.item.href ? 'bg-gray-100' : ''}`,
        )}
      >
        <i className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900  ">
          {props.item.icon}
        </i>
        <span className="ml-3">{props.item.label}</span>
      </Link>
    </li>
  );
};

const MyPageSidebar = () => {
  return (
    <aside className="mx-auto w-full flex-1" aria-label="Sidebar">
      <div className="h-full overflow-hidden rounded-3xl bg-white px-3 py-4 ">
        <ul className="space-y-2">
          {sidebarData.map((item, index) => (
            <MyPageSidebarItem key={index} item={item} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default MyPageSidebar;
