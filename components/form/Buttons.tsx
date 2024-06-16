'use client';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type SubmitButtonProps = {
  className?: string;
  size?: 'sm' | 'lg' | 'default';
  text?: string;
};

export const SubmitButton = ({
  text = 'Submit',
  size = 'lg',
  className,
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      size={size}
      className={cn('capitalize', className)}
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className='w-4 h-4 animate-spin mr-2' />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
};
