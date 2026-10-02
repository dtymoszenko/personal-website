import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dtymoszenko.com',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  image: {
    domains: ['i.gr-assets.com'],
  },
  build: {
    inlineStylesheets: 'always',
  },
});
