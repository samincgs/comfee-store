import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { MdOutlineChair } from 'react-icons/md';

const poppins = Poppins({ weight: '600', subsets: ['latin'] });

const Logo = () => {
  return (
    <div className='flex items-center gap-3'>
      <Button size={'sm'} asChild>
        <Link href='/'>
          <MdOutlineChair className='w-6 h-6' />
        </Link>
      </Button>
      <span
        className={cn(
          'text-lg md:text-2xl font-medium text-primary',
          poppins.className
        )}
      >
        Comfee
      </span>
    </div>
  );
};
export default Logo;
