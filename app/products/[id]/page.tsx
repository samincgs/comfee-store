import Heading from '@/components/global/Heading';
import AddToCart from '@/components/products/AddToCart';
import Breadcrumbs from '@/components/products/Breadcrumbs';
import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';
import ProductRating from '@/components/products/ProductRating';
import ShareButton from '@/components/products/ShareButton';
import ProductReviews from '@/components/reviews/ProductReviews';
import SubmitReview from '@/components/reviews/SubmitReview';
import { fetchSingleProduct } from '@/utils/actions';
import { formatCurrency } from '@/utils/format';
import Image from 'next/image';

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await fetchSingleProduct({ id: params.id });
  const { name, company, price, description, image } = product;
  const formattedPrice = formatCurrency(price);

  return (
    <div>
      <Breadcrumbs name={name} />
      <div className='mt-12 grid gap-y-8 lg:grid-cols-2 lg:gap-x-20'>
        {/* Image  */}
        <div className='relative h-[300px] md:h-[500px]'>
          <Image
            src={image}
            alt={name}
            fill
            priority
            className='object-cover rounded-md'
          />
        </div>
        {/* Product Info */}
        <div>
          <div className='flex items-center gap-12'>
            <h1 className='text-2xl md:text-4xl font-bold'>{name}</h1>
            <div className='flex items-center gap-3'>
              <FavoriteToggleButton productId={params.id} />
              <ShareButton productId={params.id} name={name} />
            </div>
          </div>
          <ProductRating productId={params.id} />
          <h4 className='text-lg mt-2 font-semibold'>{company}</h4>
          <p className='mt-4 rounded p-2 bg-muted inline-block border'>
            {formattedPrice}
          </p>
          <p className='mt-6 leading-loose text-muted-foreground mb-8'>
            {description}
          </p>
          <AddToCart productId={params.id} />
        </div>
      </div>
      <div className='mt-8'>
        {/* Reviews */}
        <ProductReviews productId={params.id} />
        <SubmitReview productId={params.id} />
      </div>
    </div>
  );
};
export default SingleProductPage;
