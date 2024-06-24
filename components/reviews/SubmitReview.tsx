'use client';
import { useUser } from '@clerk/nextjs';
import RatingInput from './RatingInput';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import FormContainer from '@/components/form/FormContainer';
import { createReviewAction } from '@/utils/actions';
import TextAreaInput from '../form/TextAreaInput';
import { SubmitButton } from '../form/Buttons';
const SubmitReview = ({ productId }: { productId: string }) => {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);
  const { user } = useUser();

  return (
    <div className='mt-4'>
      <Button
        size={'lg'}
        onClick={() => setIsReviewFormVisible((prev) => !prev)}
      >
        Leave Review
      </Button>
      {isReviewFormVisible && (
        <Card className='mt-6'>
          <FormContainer action={createReviewAction}>
            <input type='hidden' name='productId' value={productId} />
            <input
              type='hidden'
              name='authorName'
              value={user?.firstName || 'user'}
            />
            <input type='hidden' name='authorImageUrl' value={user?.imageUrl} />
            <CardContent className='p-8 rounded'>
              <RatingInput name='rating' labelText='Rating' />
              <TextAreaInput
                name='comment'
                label='Feedback'
                defaultValue='Great Product'
              />
              <SubmitButton className='mt-4' />
            </CardContent>
          </FormContainer>
        </Card>
      )}
    </div>
  );
};
export default SubmitReview;
