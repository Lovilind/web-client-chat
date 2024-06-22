'use client';

import Link from 'next/link';
import {
  IconChevron,
  // IconCustomerService,
  IconPerson,
  IconUserBook,
} from '../icons';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/cn';
import { useState } from 'react';

const sidebarData = [
  { href: '/mypage/profile', label: '프로필', icon: <IconPerson /> },
  {
    href: '/mypage/userform',
    label: '나의성향',
    icon: <IconUserBook className="stroke-black" />,
  },
  // {
  //   href: '/mypage/customer-service',
  //   label: '고객센터',
  //   icon: <IconCustomerService className="fill-black" />,
  // },
];

const groupHoverClassName =
  'group-hover:border-black group-hover:transition-colors group-hover:duration-500 group-hover:ease-in-out';

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
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const handleIsOpenSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };
  return (
    <div className="relative">
      <aside
        className={`relative mx-auto w-full flex-1 overflow-hidden transition-all duration-500 ease-in-out ${!isOpenSidebar ? 'max-h-screen' : 'max-h-0'} lg:max-h-max`}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-hidden rounded-3xl bg-white px-3 py-4 ">
          <ul className="space-y-2">
            {sidebarData.map((item, index) => (
              <MyPageSidebarItem key={index} item={item} />
            ))}
          </ul>
        </div>
      </aside>
      <button onClick={handleIsOpenSidebar} className="group">
        <i
          className={`absolute -bottom-4 right-1/2 inline-block h-8 w-8 translate-x-1/2 rounded-full border-2 bg-white group-hover:border-primary lg:hidden  ${groupHoverClassName}`}
        >
          <IconChevron
            className={`fill-gray-300 group-hover:fill-primary ${groupHoverClassName}  ${!isOpenSidebar ? 'rotate-180' : 'rotate-0'}`}
          />
        </i>
      </button>
    </div>
  );
};

export default MyPageSidebar;
