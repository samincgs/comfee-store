'use client';
import { useState } from 'react';
import Image from 'next/image';
import { actionFunction } from '@/utils/types';
import { Button } from '@/components/ui/button';
import FormContainer from './FormContainer';
import ImageInput from './ImageInput';
import { SubmitButton } from './Buttons';

type ImageContainerProps = {
  name: string;
  image: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

const ImageContainer = ({
  name,
  image,
  action,
  text,
  children,
}: ImageContainerProps) => {
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

  return (
    <div className='mb-8'>
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className='rounded object-cover mb-4 w-[200px] h-[200px]'
        priority
      />
      <Button
        variant={'outline'}
        size={'sm'}
        onClick={() => setIsUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className='max-w-xs mt-4'>
          <FormContainer action={action}>
            <ImageInput />
            <SubmitButton size='sm' text={text} />
            {children}
          </FormContainer>
        </div>
      )}
    </div>
  );
};
export default ImageContainer;
