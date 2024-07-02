import { cn } from '@/utils/cn';

interface SkeletonSquareProps {
  className?: string;
}
const SkeletonSquare = ({ className }: SkeletonSquareProps) => {
  return (
    <div className="container mx-auto animate-pulse">
      <div
        className={cn(
          `min-h-5 w-full rounded bg-primary-lightest ${className}`,
        )}
      ></div>
    </div>
  );
};

export default SkeletonSquare;
