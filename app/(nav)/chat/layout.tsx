import ThreeColumnLayout from '@/components/layout/ThreeColumnLayout';
import MyChatList from '../../../components/chat/ChatList/MyChatList';
import AvatarBox from '@/components/mypage/AvatarBox';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ThreeColumnLayout
        firstBoxChildren={
          <>
            <AvatarBox />
            <MyChatList />
          </>
        }
      >
        {children}
      </ThreeColumnLayout>
    </div>
  );
}
