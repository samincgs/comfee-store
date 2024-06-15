import { Card, CardContent } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

type LoadingContainerProps = {};

const LoadingContainer = () => {
  return (
    <div className='pt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
    </div>
  );
};

const LoadingProduct = () => {
  return (
    <Card>
      <CardContent className='p-0'>
        <Skeleton className='h-52' />
        <Skeleton className='h-4 w-3/4 mt-4' />
        <Skeleton className='h-4 w-1/2 mt-4 mb-4' />
      </CardContent>
    </Card>
  );
};

export default LoadingContainer;
