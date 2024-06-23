interface ThreeColumnLayoutProps {
  firstBoxChildren: React.ReactNode;
  children: React.ReactNode;
}

const ThreeColumnLayout = ({
  firstBoxChildren,
  children: mainBoxChildren,
}: ThreeColumnLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col gap-5 px-5 py-5 lg:flex-row lg:py-10">
      <section className="lg:w-[25%]">
        <div className="flex h-full flex-col gap-1 rounded-3xl border shadow-md">
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

export default ThreeColumnLayout;
