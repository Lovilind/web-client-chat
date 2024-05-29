import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  time: number;
  cb: () => void;
  isReset?: boolean;
  className?: string;
}

const CountdownTimer = ({
  time,
  cb,
  isReset,
  className,
}: CountdownTimerProps) => {
  const [remainingTime, setRemainingTime] = useState(time);

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    setRemainingTime(time);
  }, [isReset, time]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1000);
    }, 1000);
    if (remainingTime <= 0) {
      cb();
      clearInterval(intervalId);
      return;
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [remainingTime, cb]);

  return <span className={className}>{formatTime(remainingTime)}</span>;
};

export default CountdownTimer;
