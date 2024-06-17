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

export const validateSchema = <T>(schema: ZodSchema<T>, data: unknown) => {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(', '));
  }

  return result.data;
};
