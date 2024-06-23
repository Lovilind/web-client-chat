import ThreeColumnContainer from '@/components/layout/ThreeColumnContainer';
import AvatarBox from '@/components/mypage/AvatarBox';
import MyPageSidebar from '@/components/mypage/MyPageSidebar';

interface MyPageLayoutProps {
  children: React.ReactNode;
}

const MyPageLayout = ({ children }: MyPageLayoutProps) => {
  return (
    <ThreeColumnContainer
      pageTitleText="My page"
      firstBoxChildren={
        <>
          <AvatarBox />
          <MyPageSidebar />
        </>
      }
    >
      {children}
    </ThreeColumnContainer>
  );
};

export default MyPageLayout;
