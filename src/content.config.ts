import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

// Define a `loader` and `schema` for each collection
const book = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/books' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    pubYear: z.string(),
    description: z.string(),
    author: z.string(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = { book };
