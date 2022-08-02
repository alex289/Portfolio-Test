/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from 'cypress'

export default defineConfig({
  videoUploadOnPasses: false,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts').default(on, config)
    },
    baseUrl: 'https://alexanderkonietzko.vercel.app',
  },
})
