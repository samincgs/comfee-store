'use client';

import { usePathname } from 'next/navigation';
import FormContainer from '../form/FormContainer';
import { CardSubmitButton } from '../form/Buttons';
import { toggleFavoriteAction } from '@/utils/actions';

type FavoriteToggleFormProps = {
  favoriteId: string | null;
  productId: string;
};

const FavoriteToggleForm = ({
  favoriteId,
  productId,
}: FavoriteToggleFormProps) => {
  const pathname = usePathname();

  const toggleFavorite = toggleFavoriteAction.bind(null, {
    favoriteId,
    productId,
    pathname,
  });

  return (
    <FormContainer action={toggleFavorite}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
};
export default FavoriteToggleForm;
