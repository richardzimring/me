import { renderOgPng } from '../../lib/og-image';

export async function GET() {
  const png = await renderOgPng({
    path: '~/projects/',
    kickerCmd: 'git log',
    kickerArg: '--oneline --graph',
    title: 'Projects',
    description: 'Things I’ve shipped — AI agents, research tools, and side builds.',
    file: 'projects/index.html',
  });

  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
}
