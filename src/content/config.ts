import { z, defineCollection } from 'astro:content';

const education = defineCollection({
  schema: z.object({
    degree: z.string(),
    school: z.string(),
    minor: z.string(),
    location: z.string(),
    logo: z.string(),
    order: z.number().optional(),
  }),
});

const workExperience = defineCollection({
  schema: z.object({
    company: z.string(),
    position: z.string(),
    period: z.string(),
    type: z.string(),
    logo: z.string(),
    order: z.number().optional(),
  }),
});

const personalProjects = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    image: z.string(),
    githubUrl: z.string().optional(),
    order: z.number().optional(),
    categories: z.array(
      z.object({
        name: z.string(),
        class: z.string(),
      })
    ),
  }),
});

const about = defineCollection({
  schema: z.object({
    title: z.string(),
    order: z.number(),
    icon: z.string(),
    short: z.string(),
  }),
});

export const collections = {
  'education': education,
  'about': about,
  'work-experience': workExperience,
  'personal-projects': personalProjects,
};
