import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    bannerImage: z.string().optional(),
    role: z.string().optional(),
    duration: z.string().optional(),
    tools: z.array(z.string()).optional(),
    github: z.string().url().optional(),
    category: z.string().optional(),
  }),
});

export const collections = { projects };
