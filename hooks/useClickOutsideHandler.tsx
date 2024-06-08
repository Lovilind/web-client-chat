/* 
  외부클릭 감지하여 리턴하는 ref의 영역의 바깥을 클릭할경우 콜백동작
  모달, 드롭다운 등에 사용예정
  * 클릭제외 타입이있는경우 콜백받는함수에서 처리하자.
*/
import { useEffect, useRef } from 'react';

interface UseClickOutsideHandlerProps {
  callback: () => void;
  isOpen: boolean;
}

const useClickOutsideHandler = ({
  callback,
  isOpen,
}: UseClickOutsideHandlerProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isOpen &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        callback();
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, callback]);

  return ref;
};

export default useClickOutsideHandler;
