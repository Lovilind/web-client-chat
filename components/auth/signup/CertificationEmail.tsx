/* eslint-disable @typescript-eslint/no-use-before-define */
import { useCallback, useEffect, useState } from 'react';
import Input from '../Input';
import CountdownTimer from './CountdownTimer';
import { useFormContext } from 'react-hook-form';
import useGetCheckEmailCertification from '@/hooks/react-query/auth/useGetCheckEmailCertification';
import useGetSendEmailCertification from '@/hooks/react-query/auth/useGetSendEmailCertification';

interface CertificationEmailProps {
  onSuccessCertification: () => void;
}
const CertificationEmail = ({
  onSuccessCertification,
}: CertificationEmailProps) => {
  const { register, getValues, setError, setFocus } = useFormContext();
  const {
    isLoading: getSendCheckEmailCertificationIsLoading,
    refetch: getSendCheckEmailCertificationRefetch,
  } = useGetCheckEmailCertification();

  const { refetch: getSendEmailCertificationRefetch } =
    useGetSendEmailCertification({
      email: getValues('email'),
    });

  const [isReset, setIsReset] = useState(false);
  const [isTimeoutOver, setIsTimeoutOver] = useState(false);

  const cb = useCallback(() => {
    console.log('타이머종료');
    setIsTimeoutOver(true);
  }, []);

  const checkCodeValidation = () => {
    const code = getValues('code');
    if (code.length !== 6 && code.length !== 4) {
      setError('email', {
        type: 'invalid Length',
        message: '인증번호는 4자리입니다.',
      });
      return false;
    }
    return true;
  };

  const onClickCertification = async () => {
    // TODO: 인증 요청
    if (getSendCheckEmailCertificationIsLoading || !checkCodeValidation()) {
      setFocus('code');
      return;
    }
    await fetchCheckCode();
  };
  const onClickResend = () => {
    // TODO: 재전송 요청
    try {
      getSendEmailCertificationRefetch();
      // setValue('code', '');
      setIsReset((prev) => !prev);
      setIsTimeoutOver(false);
    } catch (error) {}
  };
  const fetchCheckCode = async () => {
    try {
      const response = await getSendCheckEmailCertificationRefetch();
      if (!response.data?.body) {
        setError('email', {
          type: 'faild',
          message: '인증번호가 일지하지 않습니다.',
        });
        return;
      }
      onSuccessCertification();
    } catch (error) {
      console.log('err', error);
    }
  };

  useEffect(() => {
    return () => {
      // setValue('code', '');
      setIsTimeoutOver(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex">
      <div className="flex-1">
        <Input
          type="text"
          placeholder="인증번호를 입력해주세요."
          addInputClassName="border-t-0 border-x-0 border-b rounded-none"
          id="code"
          register={register('code')}
        >
          <span className="absolute right-5 top-1/2 -translate-y-1/2 transform text-sm text-gray-400">
            <CountdownTimer cb={cb} time={10000} isReset={isReset} />
            {/* <CountdownTimer cb={cb} time={100000} isReset={isReset} /> */}
          </span>
        </Input>
      </div>
      <div className="flex items-end">
        {isTimeoutOver ? (
          <button
            type="button"
            onClick={() => onClickResend()}
            className="h-[70%] w-16 rounded-lg border bg-primary font-semibold text-white hover:opacity-75 focus:opacity-75"
          >
            재전송
          </button>
        ) : (
          <button
            type="button"
            onClick={() => onClickCertification()}
            className="h-[70%] w-16 rounded-lg border bg-primary font-semibold text-white hover:opacity-75 focus:opacity-75"
          >
            인증
          </button>
        )}
      </div>
    </div>
  );
};

export default CertificationEmail;
