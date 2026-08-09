import type { OgSpec, OgTheme } from './og-image';
import { renderOgPng } from './og-image';

export async function ogPngResponse(spec: OgSpec, theme: OgTheme = 'light') {
  const png = await renderOgPng({ ...spec, theme });
  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
}
