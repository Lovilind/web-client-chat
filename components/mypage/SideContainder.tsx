interface SideContainerProps {
  children: React.ReactNode;
}

const SideContainder = ({ children }: SideContainerProps) => {
  return <section className={`py-5 lg:w-[25%]`}>{children}</section>;
};

export default SideContainder;
