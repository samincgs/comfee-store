import { Product } from '@prisma/client';
import { formatCurrency } from '@/utils/format';
import { Card, CardContent } from '../ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import FavoriteToggleButton from './FavoriteToggleButton';

type ProductsGridProps = {
  products: Product[];
};

const ProductsGrid = ({ products }: ProductsGridProps) => {
  return (
    <div className='pt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {products.map((product) => {
        const { name, price, image, company } = product;
        const productId = product.id;
        const formattedPrice = formatCurrency(price);
        return (
          <div key={productId} className='group relative mb-4'>
            <Card className='shadow-md group-hover:shadow-xl transition-shadow duration-300'>
              <CardContent className='p-0'>
                <Link href={`/products/${productId}`}>
                  <div className='relative h-52 rounded-md overflow-hidden '>
                    <Image
                      src={image}
                      alt={name}
                      fill
                      priority
                      sizes='100vw'
                      className='object-cover rounded transform group-hover:scale-110 transition-transform'
                    />
                  </div>
                  <div className='flex items-center justify-between p-4 pt-6'>
                    <div className='flex flex-col gap-1'>
                      <h1 className='font-bold '>{name}</h1>
                      <p className='text-muted-foreground text-xs font-medium'>
                        {company}
                      </p>
                    </div>
                    <Button
                      size={'sm'}
                      className='text-sm -mt-2 border p-2 rounded-lg text-white shadow-sm hover:bg-primary'
                    >
                      {formattedPrice}
                    </Button>
                  </div>
                </Link>
              </CardContent>
            </Card>
            <div className='absolute top-2 right-3'>
              <FavoriteToggleButton productId={productId} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
