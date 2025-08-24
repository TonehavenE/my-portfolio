import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    math: z.string().optional(),
    mathDescription: z.string().optional(),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    status: z.enum(['active', 'completed', 'paused']).default('active'),
    date: z.date().optional(),
    thumbnail: z.string().optional(),
  }),
});

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    authors: z.array(z.string()),
    journal: z.string().optional(),
    year: z.number().optional(),
    status: z.enum(['published', 'submitted', 'in-review', 'preprint', "development"]).default('development'),
    doi: z.string().optional(),
    url: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

const about = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  projects,
  publications,
  about,
  blog,
};
