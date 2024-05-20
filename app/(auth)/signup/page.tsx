import SignUpFormWrapper from '@/components/auth/signup/SignUpFormWrapper';
import Link from 'next/link';

const SignUpPage = () => {
  return (
    <div>
      <div className="mb-8">
        <Link href={'/signin'} className="text-sm text-gray-500">
          {'<'} BACK
        </Link>
      </div>

      <div>
        <SignUpFormWrapper />
      </div>
    </div>
  );
};

export default SignUpPage;
