interface ThreeColumnContainerProps {
  pageTitleText: string;
  firstBoxChildren: React.ReactNode;
  children: React.ReactNode;
}

const ThreeColumnContainer = ({
  pageTitleText,
  firstBoxChildren,
  children: mainBoxChildren,
}: ThreeColumnContainerProps) => {
  return (
    <div className="relative flex min-h-screen flex-col gap-5 px-5 py-5 lg:flex-row lg:py-10">
      <section className="sticky top-2 flex flex-col rounded-3xl border shadow-md lg:h-[95vh] lg:w-[25%]">
        <h1 className="bold mb-4 border-b px-4 py-4 text-xl">
          {pageTitleText}
        </h1>
        <div className="flex flex-1 flex-col gap-1 overflow-hidden">
          {firstBoxChildren}
        </div>
      </section>
      <section className="flex-1">
        <div className="min-h-full rounded-3xl border p-5 shadow-md">
          {mainBoxChildren}
        </div>
      </section>
    </div>
  );
};

export default ThreeColumnContainer;
