import { renderOgPng } from '../../lib/og-image';

export async function GET() {
  const png = await renderOgPng({
    path: '~',
    kickerCmd: 'whoami',
    kickerArg: '--verbose',
    title: 'Richard Zimring',
    description: 'A personal site',
    file: 'index.html',
  });

  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
}
