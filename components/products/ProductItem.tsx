import Link from 'next/link';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import FavoriteToggleButton from './FavoriteToggleButton';
import { Button } from '../ui/button';

type ProductItemProps = {
  productProps: {
    name: string;
    price: string;
    company: string;
    image: string;
    productId: string;
  };
};

const ProductItem = ({
  productProps: { name, price, company, image, productId },
}: ProductItemProps) => {
  return (
    <div className='group relative'>
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
                className='text-sm -mt-2 border p-2 rounded-lg text-white shadow-sm bg-primary hover:bg-sky/90'
              >
                {price}
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
};
export default ProductItem;
