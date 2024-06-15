import ProductContainer from '@/components/products/ProductContainer';

const ProductsPage = ({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string };
}) => {
  const layout = searchParams.layout || 'grid';
  const search = searchParams.search || '';

  return <ProductContainer layout={layout} search={search} />;
};
export default ProductsPage;
