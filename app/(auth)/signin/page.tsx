import SocialLoginButton from '@/components/auth/SocialLoginButton';
import SignInFormContainer from '@/components/auth/signin/SignInFormContainer';
import Image from 'next/image';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <Link href={'/'} className="text-sm text-gray-500">
          {'<'} HOME
        </Link>
      </div>
      <Image
        src={'/images/logo.png'}
        alt="logo"
        width={200}
        height={150}
        className="mx-auto"
      />
      <div className="flex flex-col gap-2">
        <SignInFormContainer />
        <div className="flex items-center space-x-4">
          <hr className="w-full border border-gray-300" />
          <div className="font-semibold text-gray-400">OR</div>
          <hr className="w-full border border-gray-300" />
        </div>
        <div className="flex flex-col gap-2">
          <SocialLoginButton buttonType={'kakao'} />
          <SocialLoginButton buttonType={'naver'} />
          <SocialLoginButton buttonType={'google'} />
        </div>
      </div>
    </div>
  );
}
