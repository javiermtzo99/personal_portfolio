import { z, defineCollection } from 'astro:content';

const education = defineCollection({
  schema: z.object({
    degree: z.string(),
    school: z.string(),
    minor: z.string(),
    location: z.string(),
    logo: z.string(),
  }),
});

const workExperience = defineCollection({
  schema: z.object({
    company: z.string(),
    position: z.string(),
    period: z.string(),
    type: z.string(),
    logo: z.string(),
  }),
});

const personalProjects = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    image: z.string(),
    categories: z.array(
      z.object({
        name: z.string(),
        class: z.string(),
      })
    ),
  }),
});

export const collections = {
  'education': education,
  'work-experience': workExperience,
  'personal-projects': personalProjects,
};
