import { generateOgImage } from '../../lib/og-image';

export async function GET() {
  const png = await generateOgImage('Richard Zimring');

  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
}
