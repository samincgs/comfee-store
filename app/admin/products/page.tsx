import { fetchAdminProducts } from '@/utils/actions';
import { formatCurrency } from '@/utils/format';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import EmptyList from '@/components/global/EmptyList';
import Link from 'next/link';
import { IconButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import { deleteProductAction } from '@/utils/actions';

const AdminProductsPage = async () => {
  const products = await fetchAdminProducts();

  if (products.length === 0) {
    return <EmptyList />;
  }

  return (
    <div>
      <Table>
        <TableCaption>Total Products: {products.length}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            const handleDelete = deleteProductAction.bind(null, {
              productId: product.id,
            });
            return (
              <TableRow key={product.id}>
                <TableCell>
                  <Link
                    href={`/products/${product.id}`}
                    className='underline text-muted-foreground tracking-wide capitalize'
                  >
                    {product.name}
                  </Link>
                </TableCell>
                <TableCell>{product.company}</TableCell>
                <TableCell>{formatCurrency(product.price)}</TableCell>
                <TableCell className='flex items-center'>
                  <Link href={`/admin/products/${product.id}/edit`}>
                    <IconButton actionType='edit' />
                  </Link>
                  <FormContainer action={handleDelete}>
                    <IconButton actionType='delete' />
                  </FormContainer>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

// const deleteProduct = ({ productId }: { productId: string }) => {
//   const handleDelete = deleteProductAction.bind(null, { productId });
//   return (
//     <FormContainer action={handleDelete}>
//       <IconButton actionType='delete' />
//     </FormContainer>
//   );
// };

export default AdminProductsPage;
