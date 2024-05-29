import SignUpFormWrapper from '@/components/auth/signup/SignUpFormWrapper';
import Image from 'next/image';
import Link from 'next/link';

const SignUpPage = () => {
  return (
    <div>
      <div className="mb-8">
        <Link href={'/signin'} className="text-sm text-gray-500">
          {'<'} LOGIN
        </Link>
      </div>
      <div className="mb-10 flex justify-center">
        <Image src="/images/logo.png" alt="logo" width={200} height={150} />
      </div>
      <div>
        <SignUpFormWrapper />
      </div>
    </div>
  );
};

export default SignUpPage;
