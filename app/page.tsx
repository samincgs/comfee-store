import LoadingContainer from '@/components/global/LoadingContainer';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Hero from '@/components/home/Hero';
import { Suspense } from 'react';

const HomePage = () => {
  return (
    <>
      <Hero />
      {/* ONLY WORKS IF PAGE IS NOT FETCHING CONTENT DIRECTLY, NEEDS TO BE FETCHED IN THE COMPONENT */}
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </>
  );
};
export default HomePage;
