import ThreeColumnContainer from '@/components/layout/ThreeColumnContainer';
import MyChatList from '../../../components/chat/ChatList/MyChatList';
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
