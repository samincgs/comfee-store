import { fetchFeaturedProducts } from '@/utils/actions';
import EmptyList from '@/components/global/EmptyList';
import Heading from '@/components/global/Heading';
import ProductsGrid from '@/components/products/ProductsGrid';

const FeaturedProducts = async () => {
  const products = await fetchFeaturedProducts();

  if (products.length === 0) return <EmptyList />;

  return (
    <div className='pt-24'>
      <Heading text='Featured Products' />
      <ProductsGrid products={products} />
    </div>
  );
};
export default FeaturedProducts;
