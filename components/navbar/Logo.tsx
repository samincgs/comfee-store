import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MdOutlineChair } from 'react-icons/md';

const Logo = () => {
  return (
    <Button size={'icon'} asChild>
      <Link href='/'>
        <MdOutlineChair className='w-6 h-6' />
      </Link>
    </Button>
  );
};
export default Logo;