import hero1 from '@/public/images/hero-1.jpg';
import hero2 from '@/public/images/hero-2.jpg';
import hero3 from '@/public/images/hero-3.jpg';
import hero4 from '@/public/images/hero-4.jpg';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const HeroCarousel = () => {
  const carouselImages = [hero1, hero2, hero3, hero4];
  return (
    <div className='hidden lg:block'>
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className='mt-8'>
              <Card>
                <CardContent className='p-3'>
                  <Image
                    src={image}
                    alt='Hero Image'
                    className='object-cover rounded-md h-[400px]'
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default HeroCarousel;
