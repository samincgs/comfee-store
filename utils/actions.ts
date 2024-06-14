import { db } from './db';

export async function fetchFeaturedProducts() {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });

  return products;
}

export async function fetchAllProducts() {
  const products = await db.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return products;
}
