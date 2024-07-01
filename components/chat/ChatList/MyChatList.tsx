const MyChatList = () => {
  return (
    <div className="hidden p-3 px-5 lg:block lg:flex-1 lg:overflow-y-hidden">
      <h2 className="text-md flex flex-row items-center justify-around gap-4 border-b border-primary pb-2">
        <span className="font-semibold">매칭된 채팅방 목록</span>
        <span className="flex h-5 w-5 items-center justify-center rounded-md text-gray-500">
          4
        </span>
      </h2>
      <ul className="custom-scrollbar flex h-[90%] flex-1 flex-col space-y-1 overflow-y-auto">
        {Array.from({ length: 30 }).map((_, idx) => {
          return (
            <li key={idx}>
              <button className="flex w-full items-center justify-between rounded-xl p-3 hover:bg-primary">
                <div className="text-sm font-semibold">
                  <span className="mr-1 text-sm text-gray-400">{idx + 1}</span>
                  채팅방 이름
                </div>
                <div className="ml-auto flex h-4 w-4 items-center justify-center rounded bg-red-500 text-xs leading-none text-white">
                  2
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MyChatList;
