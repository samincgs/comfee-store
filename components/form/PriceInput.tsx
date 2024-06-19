import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type PriceInputProps = {
  defaultValue?: number;
};

const PriceInput = ({ defaultValue }: PriceInputProps) => {
  const name = 'price';
  return (
    <div className='mb-2'>
      <Label htmlFor={name}>Price ($)</Label>
      <Input
        type='number'
        name={name}
        id={name}
        min={0}
        defaultValue={defaultValue || 100}
        placeholder='Enter price'
        required
      />
    </div>
  );
};
export default PriceInput;
