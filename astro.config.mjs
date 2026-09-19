import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dtymoszenko.com',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
