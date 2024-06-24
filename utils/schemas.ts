import { z, ZodSchema } from 'zod';

export const productSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Product name must be at least 2 characters long',
    })
    .max(100, {
      message: 'Product name must be at most 100 characters long',
    }),
  company: z.string().min(1, {
    message: 'Company name must be at least 1 character long',
  }),
  price: z.coerce.number().int().min(0, {
    message: 'Price must be a positive number',
  }),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(' ').length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: 'Description must be between 10 and 1000 words',
    }
  ),
  featured: z.coerce.boolean(),
});

export const imageSchema = z.object({
  image: validateImageFile(),
});

export const validateSchema = <T>(schema: ZodSchema<T>, data: unknown) => {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(', '));
  }

  return result.data;
};

export const reviewSchema = z.object({
  productId: z.string().min(1, {
    message: 'Product ID must be at least 1 character long',
  }),
  authorName: z.string().min(1, {
    message: 'Author name must be at least 1 character long',
  }),
  authorImageUrl: z.string().url(),
  rating: z.coerce
    .number()
    .int()
    .min(0, {
      message: 'Rating must be a positive number',
    })
    .max(5, {
      message: 'Rating must be less than or equal to 5',
    }),
  comment: z
    .string()
    .min(10, {
      message: 'Comment must be at least  character long',
    })
    .max(1000, {
      message: 'Comment must be at most 1000 characters long',
    }),
});

function validateImageFile() {
  const maxUploadSize = 1024 * 1024;
  const acceptedFileTypes = ['image/'];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, 'File size must be less than 1MB')
    .refine((file) => {
      return (
        !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
      );
    }, 'File must be an image');
}
