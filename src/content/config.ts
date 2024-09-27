import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
	loader: glob({ pattern: '**/*.md', base: 'src/data/posts' }),
	schema: z.object({
		title: z.string(),
		abstract: z.string(),
		category: z.string(),
		published: z.string().transform((val) => new Date(val)),
		updated: z.optional(z.string().transform((val) => new Date(val))),
	}),
});

export const collections = { posts };
