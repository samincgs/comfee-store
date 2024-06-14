import { FaRegHeart } from 'react-icons/fa';
import { Button } from '../ui/button';

const FavoriteToggleButton = ({ productId }: { productId: string }) => {
  return (
    <Button variant={'outline'} size={'icon'}>
      <FaRegHeart className='w-4 h-4' />
    </Button>
  );
};
export default FavoriteToggleButton;
