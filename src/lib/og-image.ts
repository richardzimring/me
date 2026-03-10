import satori from 'satori';
import sharp from 'sharp';

const GOOGLE_FONTS_CSS =
  'https://fonts.googleapis.com/css2?family=Newsreader:wght@400;700&display=swap';

async function loadGoogleFont(family: string, weight: number): Promise<ArrayBuffer> {
  const cssResponse = await fetch(GOOGLE_FONTS_CSS, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1',
    },
  });
  const css = await cssResponse.text();

  const regex = new RegExp(
    `@font-face\\s*{[^}]*font-family:\\s*'${family}'[^}]*font-weight:\\s*${weight}[^}]*src:\\s*url\\(([^)]+)\\)[^}]*}`,
  );
  const match = css.match(regex);
  if (!match?.[1]) {
    throw new Error(`Could not find font ${family} weight ${weight}`);
  }

  const fontResponse = await fetch(match[1]);
  return fontResponse.arrayBuffer();
}

let fontsPromise: Promise<{ regular: ArrayBuffer; bold: ArrayBuffer }> | null = null;

function getFonts() {
  if (!fontsPromise) {
    fontsPromise = Promise.all([
      loadGoogleFont('Newsreader', 400),
      loadGoogleFont('Newsreader', 700),
    ]).then(([regular, bold]) => ({ regular, bold }));
  }
  return fontsPromise;
}

export async function generateOgImage(title: string, subtitle?: string): Promise<ArrayBuffer> {
  const { regular, bold } = await getFonts();

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          padding: '80px',
          backgroundColor: '#f5f0e8',
          fontFamily: 'Newsreader',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                fontSize: '72px',
                fontWeight: 700,
                color: '#1a1a1a',
                lineHeight: 1.2,
                marginBottom: subtitle ? '24px' : '0',
              },
              children: title,
            },
          },
          ...(subtitle
            ? [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '32px',
                      fontWeight: 400,
                      color: '#555550',
                      lineHeight: 1.4,
                    },
                    children: subtitle,
                  },
                },
              ]
            : []),
          {
            type: 'div',
            props: {
              style: {
                fontSize: '24px',
                fontWeight: 400,
                color: '#888883',
                marginTop: 'auto',
              },
              children: 'richardzimring.github.io/me',
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Newsreader', data: regular, weight: 400, style: 'normal' },
        { name: 'Newsreader', data: bold, weight: 700, style: 'normal' },
      ],
    },
  );

  const buf = await sharp(Buffer.from(svg))
    .png({ compressionLevel: 9, palette: true, quality: 80 })
    .toBuffer();
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer;
}
