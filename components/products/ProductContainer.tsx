import { fetchAllProducts } from '@/utils/actions';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { Separator } from '@/components/ui/separator';
import { Button } from '../ui/button';
import Link from 'next/link';
import { LayoutGrid, List } from 'lucide-react';
import { formatString } from '@/utils/format';

type ProductContainerProps = {
  layout: string;
  search: string;
};

const ProductContainer = async ({ layout, search }: ProductContainerProps) => {
  const products = await fetchAllProducts();
  const totalProducts = products.length;
  const productsFormat = formatString(totalProducts);

  const searchTerm = search ? `&search=${search}` : '';

  return (
    <>
      {/* HEADER */}
      <div className='flex justify-between items-center mb-4'>
        <h4 className='font-medium text-xl text-muted-foreground'>
          {totalProducts} product{productsFormat}
        </h4>
        <div className='flex items-center gap-4'>
          <Button
            variant={layout === 'grid' ? 'default' : 'ghost'}
            size={'icon'}
            asChild
          >
            <Link href={`/products?layout=grid${searchTerm}`}>
              <LayoutGrid className='w-4 h-4' />
            </Link>
          </Button>
          <Button
            variant={layout === 'list' ? 'default' : 'ghost'}
            size={'icon'}
            asChild
          >
            <Link href={`/products?layout=list${searchTerm}`}>
              <List className='w-4 h-4' />
            </Link>
          </Button>
        </div>
      </div>
      <Separator />
      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className='text-2xl mt-16'>
            Sorry, no products matched your search
          </h5>
        ) : layout === 'grid' ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
};
export default ProductContainer;
