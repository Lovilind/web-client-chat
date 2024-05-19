'use client';
import { useRouter } from 'next/navigation';

interface SocialLoginButtonType {
  buttonType: string;
}

const SocialLoginButton = ({ buttonType }: SocialLoginButtonType) => {
  const router = useRouter();
  const signInSocial = () => {
    router.push(`/auth/${buttonType}`);
  };

  return (
    <button
      className="font-Arial hover:border-primary border-gray-600bg-white flex h-[60px] w-full cursor-pointer items-center rounded-[5px] border px-4 text-base font-medium transition-all duration-300 ease-in-out "
      data-item={buttonType}
      onClick={signInSocial}
    >
      {buttonType}
    </button>
  );
};

export default SocialLoginButton;
