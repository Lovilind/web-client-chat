const BottomNav = () => {
  return (
    <div className="sticky bottom-0 border-t bg-white px-7 shadow-lg lg:hidden">
      <div className="flex">
        <div className="group flex-1">
          <a
            href="#"
            className="mx-auto flex w-full items-end justify-center px-4 pt-2 text-center text-gray-400 group-hover:text-indigo-500"
          >
            <span className="block px-1 pb-1 pt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mx-auto h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                />
              </svg>

              <span className="block pb-2 text-xs">Home</span>
              <span className="mx-auto block h-1 w-5 rounded-full group-hover:bg-indigo-500"></span>
            </span>
          </a>
        </div>
        <div className="group flex-1">
          <a
            href="#"
            className="mx-auto flex w-full items-end justify-center px-4 pt-2 text-center text-gray-400 group-hover:text-indigo-500"
          >
            <span className="block px-1 pb-1 pt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mx-auto h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                />
              </svg>

              <span className="block pb-2 text-xs">Explore</span>
              <span className="mx-auto block h-1 w-5 rounded-full group-hover:bg-indigo-500"></span>
            </span>
          </a>
        </div>
        <div className="group flex-1">
          <a
            href="#"
            className="mx-auto flex w-full items-end justify-center px-4 pt-2 text-center text-gray-400 group-hover:text-indigo-500"
          >
            <span className="block px-1 pb-1 pt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mx-auto h-6 w-6 shrink-0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>

              <span className="block pb-2 text-xs">Search</span>
              <span className="mx-auto block h-1 w-5 rounded-full group-hover:bg-indigo-500"></span>
            </span>
          </a>
        </div>
        <div className="group flex-1">
          <a
            href="#"
            className="mx-auto flex w-full items-end justify-center px-4 pt-2 text-center text-gray-400 group-hover:text-indigo-500"
          >
            <span className="block px-1 pb-1 pt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mx-auto h-6 w-6 shrink-0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <span className="block pb-2 text-xs">Settings</span>
              <span className="mx-auto block h-1 w-5 rounded-full group-hover:bg-indigo-500"></span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
