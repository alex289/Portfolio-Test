/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from 'cypress';

export default defineConfig({
  retries: { runMode: 3, openMode: 0 },
  e2e: {
    baseUrl: 'https://alexanderkonietzko.vercel.app',
    experimentalStudio: true,
    experimentalRunAllSpecs: true,
    testIsolation: false,
  },
});
