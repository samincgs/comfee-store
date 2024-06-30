import { fetchProductReviews } from '@/utils/actions';
import Heading from '../global/Heading';
import ReviewCard from './ReviewCard';

const ProductReviews = async ({ productId }: { productId: string }) => {
  const reviews = await fetchProductReviews({ productId });
  return (
    <div className='mt-16 grid lg:grid-cols-2 gap-8'>
      {reviews.map((review) => {
        const { id, authorImageUrl, authorName, comment, rating } = review;
        const reviewInfo = {
          image: authorImageUrl,
          name: authorName,
          comment,
          rating,
        };
        return <ReviewCard key={review.id} reviewInfo={reviewInfo} />;
      })}
    </div>
  );
};
export default ProductReviews;
