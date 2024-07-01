import { fetchProductRating } from '@/utils/actions';
import { FaStar } from 'react-icons/fa';

const ProductRating = async ({ productId }: { productId: string }) => {
  const { count, rating } = await fetchProductRating({ productId });

  const countValue = `(${count}) reviews`;

  return (
    <div className='flex items-center gap-1 text-md mt-1 mb-4'>
      <FaStar className='w-4 h-4' />
      {rating} {countValue}
    </div>
  );
};
export default ProductRating;
