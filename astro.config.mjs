import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://s-kybound.github.io',
  integrations: [sitemap()],
  prefetch: true,
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: [400, 700],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['ui-monospace', 'Cascadia Code', 'Menlo', 'Consolas', 'monospace'],
    },
  ],
});
