import { Separator } from '@/components/ui/separator';

const Heading = ({ text }: { text: string }) => {
  return (
    <div>
      <h2 className='text-3xl font-medium mb-6'>{text}</h2>
      <Separator />
    </div>
  );
};
export default Heading;
