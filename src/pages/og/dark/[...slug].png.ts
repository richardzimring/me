import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { ogPngResponse } from '../../../lib/og-response';

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

  return ogPngResponse(
    {
      label: 'Writing',
      title: post.data.title,
      description: post.data.description,
    },
    'dark',
  );
}
