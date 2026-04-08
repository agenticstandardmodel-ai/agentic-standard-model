import { defineCollection, z } from 'astro:content';

const chapters = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    chapter_number: z.number().int().nonnegative(),
    summary: z.string(),
    status: z.enum(['placeholder', 'draft', 'published']),
    figure_ids: z.array(z.string()).default([]),
    inline_figures: z.boolean().default(false)
  })
});

export const collections = {
  chapters
};
