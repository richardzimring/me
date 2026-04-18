import { renderOgPng } from '../../lib/og-image';

export async function GET() {
  const png = await renderOgPng({
    path: '~/writing/',
    kickerCmd: 'ls',
    kickerArg: '-lht posts/',
    title: 'Richard Zimring',
    description: 'Posts and essays',
    file: 'writing/index.html',
  });

  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
}
