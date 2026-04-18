import { renderOgPng } from '../../lib/og-image';

export async function GET() {
  const png = await renderOgPng({
    path: '~/projects/',
    kickerCmd: 'git log',
    kickerArg: '--oneline --graph',
    title: 'Richard Zimring',
    description: 'Projects',
    file: 'projects/index.html',
  });

  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
}
