import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Rating from './Rating';
import Comment from './Comment';
import Image from 'next/image';
type ReviewCardProps = {
  reviewInfo: {
    image: string;
    name: string;
    comment: string;
    rating: number;
  };
  children?: React.ReactNode;
};

const ReviewCard = ({
  reviewInfo: { name, comment, rating, image },
  children,
}: ReviewCardProps) => {
  return (
    <Card className='relative'>
      <CardHeader>
        <div className='flex items-center gap-2'>
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className='rounded-full object-cover w-12 h-12'
            priority
          />
          <div className='ml-4'>
            <h3 className='text-sm font-bold capitalize mb-1'>{name}</h3>
            <Rating rating={rating} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Comment comment={comment} />
      </CardContent>
      <div className='absolute top-3 right-3'>{children}</div>
    </Card>
  );
};
export default ReviewCard;
