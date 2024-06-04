const AvatarBox = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-3xl bg-primary-light pt-5">
      <div className="z-1 flex h-24 items-end justify-center">
        <img
          className="h-20 w-20 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1484608856193-968d2be4080e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
          alt="profile"
        />
      </div>
      <div className="-mt-10 flex min-h-24 w-full items-end rounded-3xl bg-white shadow-md">
        <div className="flex h-1/2 w-full flex-col items-center justify-center">
          <h1 className="font-bold text-gray-700">유저네임</h1>
          <h1 className="text-sm text-gray-500">대학교 이름</h1>
        </div>
      </div>
    </div>
  );
};

export default AvatarBox;
