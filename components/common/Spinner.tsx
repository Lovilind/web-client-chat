import { cn } from '@/utils/cn';

interface SpinnerProps {
  addClassName?: string;
  color?: string;
  size?: string | number;
}

const Spinner = ({
  addClassName = '',
  color = '#38CCDD',
  size = '20px',
}: SpinnerProps) => {
  return (
    <span
      style={{
        borderColor: color,
        borderTopColor: 'transparent',
        height: size,
        width: size,
      }}
      className={cn(
        'animate-spin rounded-full border-2 border-solid',
        addClassName,
      )}
    ></span>
  );
};
export default Spinner;
