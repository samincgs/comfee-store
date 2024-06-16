'use client';

import { actionFunction } from '@/utils/types';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useToast } from '@/components/ui/use-toast';

type FormContainerProps = {
  children: React.ReactNode;
  action: actionFunction;
};

const FormContainer = ({ children, action }: FormContainerProps) => {
  const [state, formAction] = useFormState(action, {
    message: '',
  });
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        description: state.message,
      });
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
};
export default FormContainer;
