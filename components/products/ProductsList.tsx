import { Product } from '@prisma/client';
import { Card, CardContent } from '../ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { formatCurrency } from '@/utils/format';
import { Button } from '../ui/button';
import FavoriteToggleButton from './FavoriteToggleButton';

type ProductsListProps = {
  products: Product[];
};

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <div className='mt-12 grid gap-8'>
      {products.map((product) => {
        const { name, price, image, company } = product;
        const productId = product.id;
        const formattedPrice = formatCurrency(price);
        return (
          <div key={productId} className='group relative'>
            <Card className='shadow-md group-hover:shadow-xl transition-shadow duration-300'>
              <CardContent className='p-0'>
                <Link href={`/products/${productId}`}>
                  <div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-0 flex-wrap'>
                    <div className='h-[220px] w-full md:w-[380px] relative rounded-lg overflow-hidden'>
                      <Image
                        src={image}
                        alt={name}
                        fill
                        priority
                        sizes='100vw'
                        className='object-cover rounded-lg transform group-hover:scale-110 transition-transform'
                      />
                    </div>
                    <div className='px-2'>
                      <h1 className='text-xl font-bold tracking-wide'>
                        {name}
                      </h1>
                      <p className='text-muted-foreground text-sm font-medium mt-1'>
                        {company}
                      </p>
                    </div>
                    <Button
                      size={'sm'}
                      className='text-sm mt-2 md:-mt-2 border px-2 py-1 md:px-8 md:py-6 rounded-lg text-white shadow-sm hover:bg-primary mx-16'
                    >
                      {formattedPrice}
                    </Button>
                  </div>
                </Link>
              </CardContent>
            </Card>
            <div className='absolute top-2 left-3'>
              <FavoriteToggleButton productId={productId} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProductsList;
