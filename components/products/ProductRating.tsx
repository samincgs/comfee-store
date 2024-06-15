import { FaStar, FaRegStar } from 'react-icons/fa';

const ProductRating = ({ productId }: { productId: string }) => {
  const rating = 4.7;
  const count = 100;

  const countValue = `(${count}) reviews`;

  return (
    <div className='flex items-center gap-1 text-md mt-1 mb-4'>
      <FaStar className='w-4 h-4' />
      {rating} {countValue}
    </div>
  );
};
export default ProductRating;
