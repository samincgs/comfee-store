'use server';
// PUT USE SERVER AT THE TOP IF YOU ARE DEALING WITH FORMDATA

import { auth, currentUser } from '@clerk/nextjs/server';
import { db } from './db';
import { redirect } from 'next/navigation';
import {
  imageSchema,
  productSchema,
  reviewSchema,
  validateSchema,
} from './schemas';
import { deleteImage, uploadImage } from './supabase';
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
    const product = await db.product.delete({
      where: {
        id: productId,
        clerkId: userId,
      },
    });

    await deleteImage(product.image);

    revalidatePath('/admin/products');
    return { message: 'Product deleted successfully' };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchAdminProductDetails = async ({ id }: { id: string }) => {
  const userId = await getAdminUser();

  const product = await db.product.findUnique({
    where: {
      id,
      clerkId: userId,
    },
  });

  if (!product) {
    redirect('/admin/products');
  }

  return product;
};

export const updateProductAction = async (
  prevState: any,
  formData: FormData
) => {
  const userId = await getAdminUser();

  try {
    const productId = formData.get('id') as string;
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateSchema(productSchema, rawData);

    await db.product.update({
      where: {
        id: productId,
        clerkId: userId,
      },
      data: {
        ...validatedFields,
      },
    });

    revalidatePath(`/admin/products/${productId}/edit`);
    return { message: 'Product updated successfully' };
  } catch (error) {
    return renderError(error);
  }
};

export const updateProductImageAction = async (
  prevState: any,
  formData: FormData
) => {
  const userId = await getAdminUser();

  try {
    const productId = formData.get('id') as string;
    const oldImageUrl = formData.get('url') as string;
    const file = formData.get('image') as File;
    const validatedFields = validateSchema(imageSchema, { image: file });
    const fullPath = await uploadImage(validatedFields.image);

    await db.product.update({
      where: {
        id: productId,
        clerkId: userId,
      },
      data: {
        image: fullPath,
      },
    });

    await deleteImage(oldImageUrl);

    revalidatePath(`/admin/products/${productId}/edit`);
    return { message: 'Product Image updated successfully' };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchFavoriteId = async ({ productId }: { productId: string }) => {
  const userId = await getAuthUser();

  const favorite = await db.favorite.findFirst({
    where: {
      productId,
      clerkId: userId,
    },
    select: {
      id: true,
    },
  });

  return favorite?.id || null;
};

export const toggleFavoriteAction = async (prevState: {
  productId: string;
  favoriteId: string | null;
  pathname: string;
}) => {
  const userId = await getAuthUser();

  const { productId, favoriteId, pathname } = prevState;

  try {
    if (favoriteId) {
      await db.favorite.delete({
        where: {
          id: favoriteId,
        },
      });
    } else {
      await db.favorite.create({
        data: {
          clerkId: userId,
          productId,
        },
      });
    }

    revalidatePath(pathname);

    return {
      message: favoriteId ? 'Removed from favorites' : 'Added to favorites',
    };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchUserFavorites = async () => {
  const userId = await getAuthUser();

  const favorites = await db.favorite.findMany({
    where: {
      clerkId: userId,
    },
    include: {
      product: true,
    },
  });

  return favorites;
};

export const createReviewAction = async (
  prevState: any,
  formData: FormData
) => {
  const userId = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateSchema(reviewSchema, rawData);

    await db.review.create({
      data: {
        clerkId: userId,
        ...validatedFields,
      },
    });

    revalidatePath(`/products/${validatedFields.productId}`);
    return { message: 'Review submitted successfully' };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchProductReviews = async ({
  productId,
}: {
  productId: string;
}) => {
  const reviews = await db.review.findMany({
    where: {
      productId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return reviews;
};

export const fetchProductRating = async ({
  productId,
}: {
  productId: string;
}) => {
  const result = await db.review.groupBy({
    by: ['productId'],
    where: {
      productId,
    },
    _avg: {
      rating: true,
    },
    _count: {
      rating: true,
    },
  });

  return {
    rating: result[0]?._avg.rating?.toFixed(1) || 0,
    count: result[0]?._count.rating || 0,
  };
};

export const fetchProductReviewsByUser = async () => {
  const userId = await getAuthUser();

  const reviews = await db.review.findMany({
    where: {
      clerkId: userId,
    },
    select: {
      id: true,
      rating: true,
      comment: true,
      product: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });

  return reviews;
};

export const deleteReviewAction = async (prevState: { reviewId: string }) => {
  const { reviewId } = prevState;
  const userId = await getAuthUser();

  try {
    await db.review.delete({
      where: {
        clerkId: userId,
        id: reviewId,
      },
    });

    revalidatePath('/reviews');
    return { message: 'Review deleted successfully' };
  } catch (error) {
    return renderError(error);
  }
};

export const findExistingReview = async ({
  productId,
  userId,
}: {
  productId: string;
  userId: string;
}) => {
  const review = await db.review.findFirst({
    where: {
      productId,
      clerkId: userId,
    },
  });

  return review;
};

export const fetchCartItems = async () => {
  const { userId } = auth();
  const cart = await db.cart.findFirst({
    where: {
      clerkId: userId || '',
    },
    select: {
      numItemsInCart: true,
    },
  });

  return cart?.numItemsInCart || 0;
};
