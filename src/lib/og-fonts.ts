// Fetches Google Fonts TTF data for Satori at build time.
// Uses an old Safari UA so Google Fonts returns TTF (Satori can't parse woff2).

const UA =
  'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1';

async function fetchTTF(
  family: string,
  weight: number,
  style: 'normal' | 'italic',
  cssUrl: string,
): Promise<ArrayBuffer> {
  const css = await fetch(cssUrl, { headers: { 'User-Agent': UA } }).then((r) => r.text());
  const styleRe = style === 'italic' ? 'italic' : 'normal';
  const regex = new RegExp(
    `@font-face\\s*{[^}]*font-family:\\s*'${family}'[^}]*font-style:\\s*${styleRe}[^}]*font-weight:\\s*${weight}[^}]*src:\\s*url\\(([^)]+)\\)[^}]*}`,
  );
  let match = css.match(regex);
  if (!match?.[1]) {
    const alt = new RegExp(
      `@font-face\\s*{[^}]*font-family:\\s*'${family}'[^}]*font-weight:\\s*${weight}[^}]*font-style:\\s*${styleRe}[^}]*src:\\s*url\\(([^)]+)\\)[^}]*}`,
    );
    match = css.match(alt);
  }
  if (!match?.[1]) throw new Error(`No ${family} ${weight} ${style} URL in Google Fonts CSS`);
  const res = await fetch(match[1]);
  if (!res.ok) throw new Error(`Font fetch failed: ${match[1]} (${res.status})`);
  return res.arrayBuffer();
}

export interface OgFont {
  name: string;
  data: ArrayBuffer;
  weight: 400 | 500 | 600;
  style: 'normal' | 'italic';
}

let cached: Promise<OgFont[]> | null = null;

export function loadOgFonts(): Promise<OgFont[]> {
  if (cached) return cached;
  cached = Promise.all([
    fetchTTF(
      'Newsreader',
      500,
      'normal',
      'https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,500;1,500',
    ),
    fetchTTF(
      'Newsreader',
      500,
      'italic',
      'https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,500;1,500',
    ),
  ]).then(([serif, serifItalic]): OgFont[] => [
    { name: 'Newsreader', data: serif, weight: 500, style: 'normal' },
    { name: 'Newsreader', data: serifItalic, weight: 500, style: 'italic' },
  ]);
  return cached;
}
