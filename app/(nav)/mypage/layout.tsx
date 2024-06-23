import ThreeColumnLayout from '@/components/layout/ThreeColumnLayout';
import AvatarBox from '@/components/mypage/AvatarBox';
import MyPageSidebar from '@/components/mypage/MyPageSidebar';

interface MyPageLayoutProps {
  children: React.ReactNode;
}

const MyPageLayout = ({ children }: MyPageLayoutProps) => {
  return (
    <ThreeColumnLayout
      firstBoxChildren={
        <>
          <AvatarBox />
          <MyPageSidebar />
        </>
      }
    >
      {children}
    </ThreeColumnLayout>
  );
};

export default MyPageLayout;
