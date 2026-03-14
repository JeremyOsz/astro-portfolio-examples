import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    category: z.string(),
    draft: z.boolean().optional().default(false)
  })
});

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    time: z.string().optional(),
    venue: z.string(),
    location: z.string(),
    url: z.string().optional(),
    note: z.string().optional()
  })
});

const personas = defineCollection({
  type: "content",
  schema: z.object({
    label: z.string(),
    title: z.string(),
    statement: z.string(),
    location: z.string(),
    focus: z.string(),
    format: z.string(),
    notes: z.array(z.union([z.string(), z.object({ value: z.string() })])),
    excerpts: z
      .array(
        z.object({
          title: z.string(),
          publication: z.string(),
          text: z.string()
        })
      )
      .optional()
  })
});

export const collections = {
  blog,
  events,
  personas
};
