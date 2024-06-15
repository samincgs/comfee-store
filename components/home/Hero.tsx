import Link from 'next/link';
import { Button } from '../ui/button';
import HeroCarousel from './HeroCarousel';

const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 items-center gap-24'>
      <div>
        <h1 className='max-w-2xl font-bold text-4xl tracking-tigh sm:text-6xl'>
          We are changing the way people shop
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
          Discover a curated selection of stylish and comfortable products
          designed to make your home a sanctuary. Shop with us and bring warmth,
          elegance, and comfort to every room.
        </p>
        <Button size={'lg'} asChild className='mt-8 '>
          <Link href='/products'>Shop Now</Link>
        </Button>
      </div>
      <HeroCarousel />
    </div>
  );
};
export default Hero;
