import { cn } from '@/lib/utils';

type EmptyListProps = {
  heading?: string;
  className?: string;
};

const EmptyList = ({
  heading = 'No items found.',
  className,
}: EmptyListProps) => {
  return <h2 className={cn('text-xl', className)}>{heading}</h2>;
};
export default EmptyList;
