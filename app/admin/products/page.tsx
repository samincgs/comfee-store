import { fetchAdminProducts } from '@/utils/actions';
import { formatCurrency } from '@/utils/format';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import EmptyList from '@/components/global/EmptyList';
import Link from 'next/link';

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
                <TableCell className='flex items-center gap-4'>
                  <p>Edit</p>
                  <p>Delete</p>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
export default AdminProductsPage;
