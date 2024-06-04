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
      <section className="flex-1 py-10 pr-5">
        <div className="min-h-full rounded-3xl border p-5 shadow-md">
          {children}
        </div>
      </section>
    </div>
  );
};

export default MyPageLayout;
