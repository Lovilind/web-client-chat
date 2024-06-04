import AvatarBox from '@/components/mypage/AvatarBox';
import MyPageSidebar from '@/components/mypage/MyPageSidebar';
import SideContainder from '@/components/mypage/SideContainder';

interface MyPageLayoutProps {
  children: React.ReactNode;
}

const MyPageLayout = ({ children }: MyPageLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <SideContainder>
        <div className="mx-5 flex h-full flex-col gap-1 py-5 shadow-md">
          <AvatarBox />
          <MyPageSidebar />
        </div>
      </SideContainder>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default MyPageLayout;
