import MyChatList from '@/components/chat/MyChatList';
import ThreeColumnContainer from '@/components/layout/ThreeColumnContainer';
import AvatarBox from '@/components/mypage/AvatarBox';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <ThreeColumnContainer
      pageTitleText={'Chatting'}
      firstBoxChildren={
        <>
          <AvatarBox />
          <MyChatList />
        </>
      }
    >
      {children}
    </ThreeColumnContainer>
  );
}
