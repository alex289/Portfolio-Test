import { defineConfig } from 'cypress';

export default defineConfig({
  retries: { runMode: 3, openMode: 0 },
  e2e: {
    baseUrl: 'https://alexanderkonietzko.com',
    experimentalStudio: true,
    experimentalRunAllSpecs: true,
    testIsolation: false,
  },
});
