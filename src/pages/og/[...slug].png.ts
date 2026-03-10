import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { generateOgImage } from '../../lib/og-image';

const posts = await getCollection('posts');

export function getStaticPaths() {
  return posts.map((post) => ({
    params: { slug: post.id },
  }));
}

export async function GET(ctx: APIContext) {
  const post = posts.find((p) => p.id === ctx.params.slug);
  if (!post) {
    return new Response('Not found', { status: 404 });
  }

  const png = await generateOgImage(post.data.title, post.data.description);

  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
}
