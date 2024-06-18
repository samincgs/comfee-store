'use server';
// PUT USE SERVER AT THE TOP IF YOU ARE DEALING WITH FORMDATA

import { auth, currentUser } from '@clerk/nextjs/server';
import { db } from './db';
import { redirect } from 'next/navigation';
import { imageSchema, productSchema, validateSchema } from './schemas';
import { uploadImage } from './supabase';
import { revalidatePath } from 'next/cache';

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) redirect('/');

  return user.id;
};

const getAdminUser = async () => {
  const userId = await getAuthUser();

  if (userId !== process.env.ADMIN_USER_ID) {
    redirect('/');
  }

  return userId;
};

const renderError = (error: unknown) => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : 'An error occurred',
  };
};

export const fetchFeaturedProducts = async () => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });

  return products;
};

export const fetchAllProducts = async ({ search = '' }: { search: string }) => {
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
};

export const fetchSingleProduct = async ({ id }: { id: string }) => {
  const product = await db.product.findUnique({
    where: {
      id,
    },
  });

  if (!product) {
    redirect('/products');
  }

  return product;
};

export const createProductAction = async (
  prevState: any,
  formData: FormData
) => {
  const userId = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const file = formData.get('image') as File;
    const validatedFields = validateSchema(productSchema, rawData);
    const validatedFile = validateSchema(imageSchema, { image: file });
    const fullPath = await uploadImage(validatedFile.image);

    await db.product.create({
      data: {
        clerkId: userId,
        image: fullPath,
        ...validatedFields,
      },
    });
  } catch (error) {
    return renderError(error);
  }

  redirect('/admin/products');
};

export const fetchAdminProducts = async () => {
  const userId = await getAdminUser();

  return await db.product.findMany({
    where: {
      clerkId: userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const deleteProductAction = async (prevState: { productId: string }) => {
  const { productId } = prevState;
  const userId = await getAdminUser();

  try {
    await db.product.delete({
      where: {
        id: productId,
        clerkId: userId,
      },
    });

    revalidatePath('/admin/products');
    return { message: 'Product deleted successfully' };
  } catch (error) {
    return renderError(error);
  }
};
