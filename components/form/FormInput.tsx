import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

const FormInput = ({
  name,
  type,
  defaultValue,
  label,
  placeholder,
}: FormInputProps) => {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        {label || name}
      </Label>
      <Input
        type={type}
        name={name}
        id={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  );
};
export default FormInput;
