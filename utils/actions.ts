'use server';
// PUT USE SERVER AT THE TOP IF YOU ARE DEALING WITH FORMDATA

import { db } from './db';
import { redirect } from 'next/navigation';

export async function fetchFeaturedProducts() {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });

  return products;
}

export async function fetchAllProducts({ search = '' }: { search: string }) {
  const products = await db.product.findMany({
    where: {
      OR: [
        {
          name: {
            contains: search,
            mode: 'insensitive',
          },
        },
        {
          company: {
            contains: search,
            mode: 'insensitive',
          },
        },
      ],
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return products;
}

export async function fetchSingleProduct({ id }: { id: string }) {
  const product = await db.product.findUnique({
    where: {
      id,
    },
  });

  if (!product) {
    redirect('/products');
  }

  return product;
}

export async function createProductAction(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return { message: 'Product created successfully' };
}
