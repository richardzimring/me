import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { renderOgPng } from '../../lib/og-image';

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

  const file = `${post.id}.mdx`;
  const png = await renderOgPng({
    path: `~/writing/${file}`,
    kickerCmd: 'cat',
    kickerArg: file,
    title: post.data.title,
    description: post.data.description,
    file,
  });

  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
}
