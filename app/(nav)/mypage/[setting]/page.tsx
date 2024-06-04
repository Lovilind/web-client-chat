import { notFound } from 'next/navigation';

interface SettingPageParams {
  params: { setting: 'profile' | 'userform' | 'customer-service' };
}
const SettingPage = ({ params }: SettingPageParams) => {
  switch (params.setting) {
    case 'profile':
      return <div>profile</div>;
    case 'userform':
      return <div>userinfo</div>;
    case 'customer-service':
      return <div>userinfo</div>;
    default:
      return notFound();
  }
};

export default SettingPage;
