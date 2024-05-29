import { useCallback, useState } from 'react';
import Input from '../Input';
import CountdownTimer from './CountdownTimer';

const CertificationEmail = () => {
  const [isReset, setIsReset] = useState(false);
  const [isTimeoutOver, setIsTimeoutOver] = useState(false);

  const cb = useCallback(() => {
    console.log('타이머종료');
    setIsTimeoutOver(true);
  }, []);

  const onClickCertification = () => {
    // TODO: 인증 요청
  };

  const onClickResend = () => {
    // TODO: 재전송 요청
    setIsReset((prev) => !prev);
    setIsTimeoutOver(false);
  };
  return (
    <div className="flex">
      <div className="flex-1">
        <Input
          type="text"
          addInputClassName="border-t-0 border-x-0 border-b rounded-none"
        >
          <span className="absolute right-5 top-1/2 -translate-y-1/2 transform text-sm text-gray-400">
            <CountdownTimer cb={cb} time={10000} isReset={isReset} />
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
