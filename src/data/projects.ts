export interface Project {
  hash: string;
  ref: string;
  tag: string;
  name: string;
  tagline: string;
  href: string;
  description: string;
  stack: string;
}

export const projects: Project[] = [
  {
    hash: 'e4d91a7',
    ref: 'ship/gather',
    tag: 'ios · live',
    name: 'Gather',
    tagline: 'plan-with-friends app',
    href: 'https://apps.apple.com/us/app/gather-plan-with-friends/id6759443297',
    description:
      'Syncs Apple, Google, and Outlook calendars to surface availability between friends so you can find mutual free time and make plans in seconds.',
    stack: 'TypeScript · React Native · Expo · Hono · AWS Lambda · Postgres',
  },
  {
    hash: 'a12fc88',
    ref: 'ship/heatstrike',
    tag: 'web · live',
    name: 'Heatstrike',
    tagline: 'options-chain heatmap',
    href: 'https://richardzimring.github.io/heatstrike',
    description:
      'Live, interactive 2D heatmap of option chains — strikes × expirations, coloured by volume, OI, spread, or the Greeks. Nightly Lambda refresh from OCC.',
    stack: 'TypeScript · React · Vite · visx · Hono · AWS Lambda · DynamoDB',
  },
];
