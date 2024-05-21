'use client';

export const TopHeader = ({
  onClickTopHeader,
}: {
  onClickTopHeader?: (eventName: string) => void;
}) => {
  const onClickHeaderButton = (eventName: string) => (e: unknown) => {
    if (onClickTopHeader) {
      onClickTopHeader(eventName);
    }
  };

  return (
    <header id="lvl-header" className="fx-rw fx-algn-cntr def-padng-sd">
      <button
        className="back-button wrap-btn"
        onClick={onClickHeaderButton('ON_CLICK_BACK_BuTTON')}
      >
        뒤로가기
      </button>

      <span className="service-name">서비스명?</span>

      <button
        className="option-button wrap-btn"
        onClick={onClickHeaderButton('ON_CLICK_OPTION_BUTTON')}
      >
        옵션 더보기
      </button>
    </header>
  );
};
