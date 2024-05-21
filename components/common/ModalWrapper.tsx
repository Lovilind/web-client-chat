import { cn } from '@/utils/cn';
import React, { useEffect, useState } from 'react';

interface ModalWrapperProps {
  width?: string;
  isCloseButtonVisible?: boolean;
  onCloseModal: () => void;
  unmountCleanUp?: () => void;
  addClassName?: string;
  children: React.ReactNode;
  isHiddenRootScroll?: boolean;
}

const ModalWrapper = ({
  width = 'w-[482px]',
  isCloseButtonVisible = false,
  onCloseModal,
  addClassName,
  children,
  isHiddenRootScroll = false,
}: ModalWrapperProps) => {
  const [startOutside, setStartOutside] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setStartOutside(true);
    }
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && startOutside) {
      onCloseModal();
    }
    setStartOutside(false);
  };

  useEffect(() => {
    setIsVisible(true);
    if (isHiddenRootScroll) {
      document.documentElement.style.overflow = 'hidden';
    }
    return () => {
      document.documentElement.style.overflow = 'none';
      // document.documentElement.style.overflow = "scroll"
    };
  }, [isHiddenRootScroll]);

  return (
    <>
      <div className="fixed inset-0 z-[9999] bg-[rgba(0,0,0,0.3)]" />
      <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className="fixed inset-0 z-[99999] flex overflow-y-auto overscroll-none"
      >
        <div
          className={`${cn(
            `relative m-auto ${width} min-h-[168px] overflow-hidden rounded-lg bg-white p-0  shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out ${addClassName} ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-6 opacity-0'
            }`,
          )}`}
        >
          <div className="z-1 absolute right-[5px] top-[5px] flex justify-end">
            {/* <div className="flex justify-end"> */}
            {isCloseButtonVisible && (
              <button
                onClick={onCloseModal}
                className="relative h-10 w-10 bg-transparent"
                aria-label="Close"
              >
                <span className="absolute left-1/2 top-1/2 block h-[1px] w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
                <span className="absolute left-1/2 top-1/2 block h-[1px] w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-black" />
              </button>
            )}
          </div>
          <>{children}</>
        </div>
      </div>
    </>
  );
};

export default ModalWrapper;
