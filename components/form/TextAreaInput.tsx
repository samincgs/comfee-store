import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

type TextAreaInputProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

const TextAreaInput = ({
  name,
  label,
  defaultValue,
  placeholder,
}: TextAreaInputProps) => {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        {label || name}
      </Label>
      <Textarea
        name={name}
        id={name}
        placeholder={placeholder}
        defaultValue={defaultValue || 'This is a description'}
        rows={5}
        required
        className='leading-loose'
      />
    </div>
  );
};
export default TextAreaInput;
