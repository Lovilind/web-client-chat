'use client';

export const GlobalNavigation = ({
  onClickGlobalNavigation,
}: {
  onClickGlobalNavigation?: (eventName: string) => void;
}) => {
  const onClickGlobalNavigationButton =
    (eventName: string) => (e?: unknown) => {
      if (onClickGlobalNavigation) {
        onClickGlobalNavigation(eventName);
      }
    };
  return (
    <footer id="lvl-gnb" className="fx-rw fx-algn-cntr def-padng-sd">
      <button
        className="search-button wrap-btn"
        onClick={onClickGlobalNavigationButton('ON_CLICK_SEARCH_BUTTON')}
      >
        검색
      </button>
      <button
        className="chat-list-button wrap-btn"
        onClick={onClickGlobalNavigationButton('ON_CHAT_LIST_BUTTON')}
      >
        채팅목록
      </button>
      <button
        className="favorite-button wrap-btn"
        onClick={onClickGlobalNavigationButton('ON_FAVORITE_BUTTON')}
      >
        관심목록
      </button>
      <button
        className="profile-button wrap-btn"
        onClick={onClickGlobalNavigationButton('ON_PROFILE_BUTTON')}
      >
        My
      </button>
    </footer>
  );
};
