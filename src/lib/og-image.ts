import satori from 'satori';
import sharp from 'sharp';
import { loadOgFonts } from './og-fonts';

const SERIF = 'Newsreader';

const themes = {
  light: {
    bg: '#ffffff',
    text: '#1a1a1a',
    muted: '#5c5c5c',
  },
  dark: {
    bg: '#111111',
    text: '#ececec',
    muted: '#9a9a9a',
  },
} as const;

export type OgTheme = keyof typeof themes;

export interface OgSpec {
  title: string;
  description?: string;
  /** Italic serif eyebrow, e.g. "Resume" / "Writing" */
  label?: string;
  theme?: OgTheme;
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1).replace(/\s+\S*$/, '');
  return `${cut}…`;
}

export async function renderOgPng(spec: OgSpec): Promise<Uint8Array<ArrayBuffer>> {
  const fonts = await loadOgFonts();
  const colors = themes[spec.theme ?? 'light'];
  const titleSize = spec.title.length > 48 ? 48 : spec.title.length > 28 ? 56 : 64;
  const description = spec.description ? truncate(spec.description, 140) : undefined;

  const markup = {
    type: 'div',
    props: {
      style: {
        width: '100%',
        height: '100%',
        background: colors.bg,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontFamily: SERIF,
        padding: '64px 72px',
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              maxWidth: 960,
            },
            children: [
              spec.label
                ? {
                    type: 'div',
                    props: {
                      style: {
                        fontFamily: SERIF,
                        fontStyle: 'italic',
                        fontWeight: 500,
                        fontSize: 26,
                        color: colors.muted,
                        marginBottom: 16,
                        display: 'flex',
                      },
                      children: spec.label,
                    },
                  }
                : null,
              {
                type: 'div',
                props: {
                  style: {
                    fontFamily: SERIF,
                    fontWeight: 500,
                    fontSize: titleSize,
                    lineHeight: 1.15,
                    color: colors.text,
                    letterSpacing: '-0.02em',
                    marginBottom: description ? 20 : 0,
                    display: 'flex',
                  },
                  children: spec.title,
                },
              },
              description
                ? {
                    type: 'div',
                    props: {
                      style: {
                        fontFamily: SERIF,
                        fontWeight: 500,
                        fontSize: 28,
                        lineHeight: 1.35,
                        color: colors.muted,
                        display: 'flex',
                      },
                      children: description,
                    },
                  }
                : null,
            ].filter(Boolean),
          },
        },
      ],
    },
  };

  const svg = await satori(markup as never, { width: 1200, height: 630, fonts });
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  const out = new Uint8Array(buf.byteLength);
  out.set(buf);
  return out;
}
