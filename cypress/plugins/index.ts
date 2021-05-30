import 'cypress-watch-and-reload/plugins'
import { startDevServer } from '@cypress/vite-dev-server'

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on('dev-server:start', async (options) => {
    return startDevServer({ options })
  })

  return config
}
