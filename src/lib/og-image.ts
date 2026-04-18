import satori from 'satori';
import sharp from 'sharp';
import { loadOgFonts } from './og-fonts';

const BG = '#0c0e12';
const BG_2 = '#14171d';
const TEXT = '#d6dde5';
const MUTED = '#6a7381';
const RULE = '#232832';
const AMBER = '#f2b957';
const TL_RED = '#d05650';
const TL_YEL = '#d9a545';
const TL_GRN = '#5cb070';

const MONO = 'JetBrains Mono';
const SERIF = 'Newsreader';

export interface OgSpec {
  path: string; // e.g. "~/writing/foo.mdx"
  kickerCmd: string; // e.g. "cat"
  kickerArg: string; // e.g. "foo.mdx"
  title: string;
  description?: string;
  file: string; // statusbar filename
}

function dot(color: string) {
  return {
    type: 'div',
    props: {
      style: {
        width: 14,
        height: 14,
        borderRadius: 7,
        background: color,
        marginRight: 8,
      },
    },
  };
}

function span(children: string, style: Record<string, unknown>) {
  return {
    type: 'div',
    props: { style: { display: 'flex', ...style }, children },
  };
}

export async function renderOgPng(spec: OgSpec): Promise<Buffer> {
  const fonts = await loadOgFonts();
  const titleSize = spec.title.length > 48 ? 52 : spec.title.length > 28 ? 64 : 76;

  const markup = {
    type: 'div',
    props: {
      style: {
        width: '100%',
        height: '100%',
        background: BG,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: MONO,
        padding: 48,
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              width: 1104,
              height: 534,
              background: BG,
              border: `1px solid ${RULE}`,
              borderRadius: 12,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            },
            children: [
              // Titlebar
              {
                type: 'div',
                props: {
                  style: {
                    height: 44,
                    background: BG_2,
                    borderBottom: `1px solid ${RULE}`,
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: 20,
                    paddingRight: 20,
                  },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: { display: 'flex', alignItems: 'center' },
                        children: [dot(TL_RED), dot(TL_YEL), dot(TL_GRN)],
                      },
                    },
                    {
                      type: 'div',
                      props: {
                        style: {
                          flex: 1,
                          display: 'flex',
                          justifyContent: 'center',
                          fontSize: 15,
                        },
                        children: [
                          span(spec.path, { color: AMBER }),
                          span('\u00a0·\u00a0richardzimring.com', { color: MUTED }),
                        ],
                      },
                    },
                    { type: 'div', props: { style: { width: 60 } } },
                  ],
                },
              },
              // Pane
              {
                type: 'div',
                props: {
                  style: {
                    flex: 1,
                    padding: '60px 64px',
                    display: 'flex',
                    flexDirection: 'column',
                  },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: {
                          display: 'flex',
                          fontSize: 24,
                          marginBottom: 40,
                        },
                        children: [
                          span('$\u00a0', { color: MUTED }),
                          span(`${spec.kickerCmd}\u00a0`, { color: AMBER, fontWeight: 700 }),
                          span(spec.kickerArg, { color: TEXT }),
                        ],
                      },
                    },
                    {
                      type: 'div',
                      props: {
                        style: {
                          fontFamily: SERIF,
                          fontWeight: 600,
                          fontSize: titleSize,
                          lineHeight: 1.12,
                          color: TEXT,
                          letterSpacing: '-0.015em',
                          marginBottom: spec.description ? 28 : 0,
                          display: 'flex',
                        },
                        children: spec.title,
                      },
                    },
                    spec.description
                      ? {
                          type: 'div',
                          props: {
                            style: {
                              fontFamily: SERIF,
                              fontWeight: 600,
                              fontSize: 28,
                              lineHeight: 1.38,
                              color: MUTED,
                              display: 'flex',
                            },
                            children: spec.description,
                          },
                        }
                      : null,
                  ].filter(Boolean),
                },
              },
              // Statusbar
              {
                type: 'div',
                props: {
                  style: {
                    height: 40,
                    background: BG_2,
                    borderTop: `1px solid ${RULE}`,
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: 20,
                    paddingRight: 20,
                    fontSize: 13,
                  },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: {
                          background: AMBER,
                          color: BG,
                          fontWeight: 700,
                          padding: '3px 10px',
                          borderRadius: 3,
                          marginRight: 14,
                          fontSize: 12,
                          letterSpacing: '0.06em',
                          display: 'flex',
                        },
                        children: 'READ-ONLY',
                      },
                    },
                    span(`⎇ main · ${spec.file} · utf-8`, { color: MUTED }),
                    { type: 'div', props: { style: { flex: 1 } } },
                    span('Minneapolis · MSP', { color: MUTED }),
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };

  const svg = await satori(markup as never, { width: 1200, height: 630, fonts });
  return sharp(Buffer.from(svg)).png().toBuffer();
}
