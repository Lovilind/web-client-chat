import ProfilePageContainer from '@/components/mypage/profile/ProfilePageContainer';
import UserFormPageContainer from '@/components/mypage/userform/UserFormPageContainer';
import { notFound } from 'next/navigation';

interface SettingPageParams {
  params: { setting: 'profile' | 'userform' | 'customer-service' };
}
const SettingPage = ({ params }: SettingPageParams) => {
  switch (params.setting) {
    case 'profile':
      return <ProfilePageContainer />;
    case 'userform':
      return <UserFormPageContainer />;
    case 'customer-service':
      return <div>userinfo</div>;
    default:
      return notFound();
  }
};

export default SettingPage;
