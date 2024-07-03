import { IconButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import Heading from '@/components/global/Heading';
import ReviewCard from '@/components/reviews/ReviewCard';
import { deleteReviewAction, fetchProductReviewsByUser } from '@/utils/actions';

const ReviewsPage = async () => {
  const reviews = await fetchProductReviewsByUser();

  if (reviews.length === 0) {
    return <Heading text='No Reviews Found' />;
  }

  return (
    <>
      <Heading text='Your Reviews' />
      <div className='grid md:grid-cols-2 gap-8 mt-8'>
        {reviews.map((review) => {
          const { image, name } = review.product;
          const { rating, comment } = review;
          const deleteReview = deleteReviewAction.bind(null, {
            reviewId: review.id,
          });
          const reviewInfo = { image, name, rating, comment };
          return (
            <ReviewCard key={review.id} reviewInfo={reviewInfo}>
              <FormContainer action={deleteReview}>
                <IconButton actionType='delete' variant='ghost' />
              </FormContainer>
            </ReviewCard>
          );
        })}
      </div>
    </>
  );
};
export default ReviewsPage;
