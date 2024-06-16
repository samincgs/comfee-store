import { SubmitButton } from '@/components/form/Buttons';
import CheckboxInput from '@/components/form/CheckboxInput';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import ImageInput from '@/components/form/ImageInput';
import PriceInput from '@/components/form/PriceInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import { createProductAction } from '@/utils/actions';
import { faker } from '@faker-js/faker';

const CreateProductPage = () => {
  const defaultName = faker.commerce.productName();
  const defaultCompany = faker.company.name();
  const defaultDescription = faker.commerce.productDescription();

  return (
    <div>
      <h1 className='text-2xl font-semibold mb-8'>Create Product</h1>
      <div className='border p-8 rounded-md'>
        <FormContainer action={createProductAction}>
          <div className='mb-4 grid md:grid-cols-2 gap-6'>
            <FormInput
              name='name'
              type='text'
              defaultValue={defaultName}
              label='Product name'
            />
            <FormInput
              name='company'
              type='text'
              defaultValue={defaultCompany}
            />
            <PriceInput />
            <ImageInput />
          </div>
          <TextAreaInput name='description' defaultValue={defaultDescription} />
          <div className='my-8'>
            <CheckboxInput name='featured' />
          </div>
          <SubmitButton text='Create Product' />
        </FormContainer>
      </div>
    </div>
  );
};
export default CreateProductPage;
