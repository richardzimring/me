import { getCollection } from 'astro:content';

export async function getPublishedPosts() {
  const isDev = import.meta.env.DEV;
  return (await getCollection('posts'))
    .filter((post) => isDev || !post.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
