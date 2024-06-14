import { Product } from '@prisma/client';
import { formatCurrency } from '@/utils/format';
import ProductItem from './ProductItem';

type ProductsGridProps = {
  products: Product[];
};

const ProductsGrid = ({ products }: ProductsGridProps) => {
  return (
    <div className='pt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4 '>
      {products.map((product) => {
        const { name, price, image, company } = product;
        const productId = product.id;
        const formattedPrice = formatCurrency(price);

        const productProps = {
          name,
          price: formattedPrice,
          company,
          image,
          productId,
        };

        return <ProductItem key={productId} productProps={productProps} />;
      })}
    </div>
  );
};
export default ProductsGrid;
