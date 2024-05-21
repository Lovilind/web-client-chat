const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen items-center">
      <section className="hidden h-screen w-full bg-[url('https://cdn.pixabay.com/photo/2022/09/10/18/23/couple-7445474_1280.jpg')] bg-cover bg-no-repeat lg:block "></section>
      <section className="flex h-screen w-full items-center justify-center bg-white px-6 xl:w-2/3">
        <div className="relative w-full max-w-[560px] rounded-lg bg-white p-8 shadow-lg sm:p-12">
          {children}
        </div>
      </section>
    </div>
  );
};

export default Authlayout;
