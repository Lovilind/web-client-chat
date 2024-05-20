import SignUpFormContainer from '@/components/auth/signup/SignUpFormContainer';
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
        <SignUpFormContainer />
      </div>
    </div>
  );
};

export default SignUpPage;
