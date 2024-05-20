interface SpinnerProps {
  color?: string;
  size?: string;
}
const Spinner = ({ color = '#38CCDD', size = '25px' }: SpinnerProps) => {
  return (
    <div
      className={`h-[${size}] w-[${size}] animate-spin rounded-full border-2 border-solid border-[${color}] border-t-transparent`}
    ></div>
  );
};

export default Spinner;
