/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
export default (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
) => {
  on('before:browser:launch', (browser = {
    name: "",
    family: "chromium",
    channel: "",
    displayName: "",
    version: "",
    majorVersion: "",
    path: "",
    isHeaded: false,
    isHeadless: false
  }, args) => {
    if (browser.family === 'chromium') {
      args.args.push('--force-dark-mode=true')
      return args
    }
  })
};
