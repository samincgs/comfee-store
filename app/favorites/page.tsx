import Heading from '@/components/global/Heading';
import ProductsGrid from '@/components/products/ProductsGrid';
import { fetchUserFavorites } from '@/utils/actions';

const FavoritesPage = async () => {
  const favorites = await fetchUserFavorites();

  if (favorites.length === 0) {
    return <Heading text='No Favorites Yet.' />;
  }

  return (
    <>
      <Heading text='Your Favorites' />
      <ProductsGrid products={favorites.map((fav) => fav.product)} />
    </>
  );
};
export default FavoritesPage;
