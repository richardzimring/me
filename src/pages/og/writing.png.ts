import { renderOgPng } from '../../lib/og-image';

export async function GET() {
  const png = await renderOgPng({
    path: '~/writing/',
    kickerCmd: 'ls',
    kickerArg: '-lht posts/',
    title: 'Writing',
    description: 'Essays on AI, trust, and building systems that behave in production.',
    file: 'writing/index.html',
  });

  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
}
