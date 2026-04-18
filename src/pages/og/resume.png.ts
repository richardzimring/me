import { renderOgPng } from '../../lib/og-image';

export async function GET() {
  const png = await renderOgPng({
    path: '~',
    kickerCmd: 'cat',
    kickerArg: 'resume.mdx',
    title: 'Richard Zimring',
    description: 'Resume',
    file: 'resume.mdx',
  });

  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
}
