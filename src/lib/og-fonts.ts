// Fetches Google Fonts TTF data for Satori at build time.
// Uses an old Safari UA so Google Fonts returns TTF (Satori can't parse woff2).

const UA =
  'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1';

async function fetchTTF(family: string, weight: number, cssUrl: string): Promise<ArrayBuffer> {
  const css = await fetch(cssUrl, { headers: { 'User-Agent': UA } }).then((r) => r.text());
  const regex = new RegExp(
    `@font-face\\s*{[^}]*font-family:\\s*'${family}'[^}]*font-weight:\\s*${weight}[^}]*src:\\s*url\\(([^)]+)\\)[^}]*}`,
  );
  const match = css.match(regex);
  if (!match?.[1]) throw new Error(`No ${family} ${weight} URL in Google Fonts CSS`);
  const res = await fetch(match[1]);
  if (!res.ok) throw new Error(`Font fetch failed: ${match[1]} (${res.status})`);
  return res.arrayBuffer();
}

export interface OgFont {
  name: string;
  data: ArrayBuffer;
  weight: 400 | 600 | 700;
  style: 'normal' | 'italic';
}

let cached: Promise<OgFont[]> | null = null;

export function loadOgFonts(): Promise<OgFont[]> {
  if (cached) return cached;
  cached = Promise.all([
    fetchTTF(
      'JetBrains Mono',
      400,
      'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700',
    ),
    fetchTTF(
      'JetBrains Mono',
      700,
      'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700',
    ),
    fetchTTF('Newsreader', 600, 'https://fonts.googleapis.com/css2?family=Newsreader:wght@400;600'),
  ]).then(([mono, monoBold, serif]): OgFont[] => [
    { name: 'JetBrains Mono', data: mono, weight: 400, style: 'normal' },
    { name: 'JetBrains Mono', data: monoBold, weight: 700, style: 'normal' },
    { name: 'Newsreader', data: serif, weight: 600, style: 'normal' },
  ]);
  return cached;
}
