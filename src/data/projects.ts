export interface Project {
  slug: string;
  name: string;
  tagline: string;
  /** Short one-liner for listings */
  description: string;
  /** Longer copy for the project page */
  body: string[];
  /** External product / App Store / site link */
  href: string;
  linkLabel?: string;
  stack: string;
  tag: string;
  /** Path under /public, e.g. /videos/projects/gather.mp4 */
  video?: string;
  /** Optional still frame while video loads */
  poster?: string;
  /** cover (default), contain (portrait + gutters), or device (Apple bezel) */
  videoFit?: 'cover' | 'contain' | 'device';
  /** App icon asset (kept for later; not rendered yet) */
  icon?: string;
}

export const projects: Project[] = [
  {
    slug: 'gather',
    name: 'Gather',
    tagline: 'social calendar sync',
    tag: 'ios',
    href: 'https://apps.apple.com/us/app/gather-plan-with-friends/id6759443297',
    linkLabel: 'App Store',
    description:
      'Syncs Apple, Google, and Outlook calendars to surface availability between friends so you can find mutual free time and make plans in seconds.',
    body: [
      'Connect your Apple, Google, or Outlook calendar and Gather keeps your availability synced in the background. When you want to make a plan, choose friends and a date range, and Gather surfaces open time slots. Pick a time, add a title and location, and the event is created with invitations sent automatically.',
      'Supports manual blocked time windows, friend groups, RSVPs with alternative-time proposals, location search with Apple Maps previews, push notifications, and two-way calendar sync.',
      'Built as a React Native app with Expo, AWS Lambda, and Neon Postgres.',
    ],
    stack: 'TypeScript · React Native · Expo · Hono · AWS Lambda · Postgres',
    video: '/videos/projects/gather.mp4',
    poster: '/images/projects/gather-poster.jpg',
    videoFit: 'device',
    icon: '/images/projects/gather-icon.png',
  },
  {
    slug: 'courtside',
    name: 'Courtside',
    tagline: 'tennis alerts',
    tag: 'web',
    href: 'https://courtside.rzimring.com',
    linkLabel: 'courtside.rzimring.com',
    description: "Pick your players. We'll ping you the second they walk on court.",
    body: [
      "Tennis matches don't have reliable start times. Courtside sends a push when an ATP or WTA player you follow walks on the court.",
      'Supports following up to 10 players, a dashboard with today\'s schedule and live scores, and <a href="https://ntfy.sh">ntfy</a>-based push subscriptions. No accounts or sign ups needed.',
      'Built as a React SPA with AWS Lambda and DynamoDB.',
    ],
    stack: 'TypeScript · React · Vite · Hono · AWS Lambda · DynamoDB · ntfy',
    video: '/videos/projects/courtside.mp4',
    poster: '/images/projects/courtside-poster.jpg',
    icon: '/images/projects/courtside-icon.svg',
  },
  {
    slug: 'heatstrike',
    name: 'Heatstrike',
    tagline: 'options heatmap',
    tag: 'web',
    href: 'https://heatstrike.rzimring.com',
    linkLabel: 'heatstrike.rzimring.com',
    description:
      'Interactive 2D heatmap of option chains — strikes × expirations, colored by volume, OI, spread, or the Greeks.',
    body: [
      "Displays a 2D heatmap of options chain data — strikes on one axis, expirations on the other, colored by a selected metric such as volume, open interest, price, spread, or the Greeks (delta, gamma, …). Select a ticker, choose calls or puts, and click on any of the cells to open the options chain's Nasdaq contract page.",
      'It supports popular tickers sourced from Reddit activity and a watchlist for favorited tickers. Valid tickers refresh daily from <a href="https://www.theocc.com/">OCC</a>.',
      'Built as a React SPA with Vite, visx, AWS Lambda, and DynamoDB.',
    ],
    stack: 'TypeScript · React · Vite · visx · Hono · AWS Lambda · DynamoDB',
    video: '/videos/projects/heatstrike.mp4',
    poster: '/images/projects/heatstrike-poster.jpg',
    icon: '/images/projects/heatstrike-icon.svg',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
