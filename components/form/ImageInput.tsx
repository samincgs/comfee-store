import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ImageInput = () => {
  const name = 'image';
  return (
    <div className='mb-2'>
      <Label htmlFor={name}>Image</Label>
      <Input type='file' name={name} id={name} required accept='image/*' />
    </div>
  );
};
export default ImageInput;
