import MyChatList from './(components)/ChatList/MyChatList';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen border-t-2 border-gray-300 text-gray-800">
      <MyChatList />
      {children}
    </div>
  );
}
