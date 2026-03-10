// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  // For GitHub Pages at richardzimring.github.io/me
  // When migrating to a custom domain: update `site` and remove `base`
  site: 'https://richardzimring.github.io',
  base: '/me',
});
