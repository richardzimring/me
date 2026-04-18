import { renderOgPng } from '../../lib/og-image';

export async function GET() {
  const png = await renderOgPng({
    path: '~',
    kickerCmd: 'whoami',
    kickerArg: '--verbose',
    title: 'Richard Zimring',
    description: 'Software engineer building AI agents for sport. Writing and projects.',
    file: 'index.html',
  });

  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
}
