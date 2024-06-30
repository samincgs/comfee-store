import { cn } from '@/lib/utils';
import { FaStar, FaRegStar } from 'react-icons/fa';
const Rating = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1 <= rating);
  return (
    <div className='flex items-center gap-x-1'>
      {stars.map((star, index) => {
        return star ? (
          <FaStar
            key={index}
            className={cn(`w-4, h-4`, star ? 'text-primary' : 'text-gray-400')}
          />
        ) : (
          <FaRegStar
            key={index}
            className={cn(`w-4, h-4`, star ? 'text-primary' : 'text-gray-400')}
          />
        );
      })}
    </div>
  );
};
export default Rating;
