import { SubmitButton } from '@/components/form/Buttons';
import CheckboxInput from '@/components/form/CheckboxInput';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import ImageContainer from '@/components/form/ImageContainer';
import PriceInput from '@/components/form/PriceInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import {
  fetchAdminProductDetails,
  updateProductAction,
  updateProductImageAction,
} from '@/utils/actions';

const ProductEditPage = async ({ params }: { params: { id: string } }) => {
  const product = await fetchAdminProductDetails({ id: params.id });
  const { name, company, description, price, featured, image } = product;
  return (
    <div>
      <h1 className='text-2xl font-semibold mb-8'> Update Product</h1>
      <div className='border p-8 rounded'>
        {/* Image Input Container */}
        <ImageContainer
          name='image'
          text='Update Image'
          action={updateProductImageAction}
          image={image}
        >
          <input type='hidden' name='id' value={params.id} />
          <input type='hidden' name='url' value={product.image} />
        </ImageContainer>
        <FormContainer action={updateProductAction}>
          <div className='grid gap-4 md:grid-cols-2 my-4'>
            <input type='hidden' name='id' value={params.id} />
            <FormInput
              name='name'
              type='text'
              defaultValue={name}
              label='Product Name'
            />
            <FormInput name='company' type='text' defaultValue={company} />
            <PriceInput defaultValue={price} />
          </div>
          <TextAreaInput
            name='description'
            defaultValue={description}
            label='Product Description'
          />
          <div className='mt-6'>
            <CheckboxInput name='featured' defaultChecked={featured} />
          </div>
          <SubmitButton text='Update Product' className='mt-8' />
        </FormContainer>
      </div>
    </div>
  );
};
export default ProductEditPage;
