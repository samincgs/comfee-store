import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const CartButton = () => {
  const numItems = 9;
  return (
    <Button
      size={'icon'}
      variant={'outline'}
      asChild
      className='flex items-center justify-center relative'
    >
      <Link href={'/cart'}>
        <ShoppingCart className='w-4 h-4' />
        <span className='absolute -top-2 -right-3 p-3 flex text-xs items-center justify-center rounded-full bg-primary text-white w-5 h-5'>
          {numItems}
        </span>
      </Link>
    </Button>
  );
};
export default CartButton;
