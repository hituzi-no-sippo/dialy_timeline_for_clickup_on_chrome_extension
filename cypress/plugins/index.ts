import 'cypress-watch-and-reload/plugins'
import { startDevServer } from '@cypress/vite-dev-server'
import path from 'path'

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on('dev-server:start', async (options) => {
    const viteConfig = {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../../src'),
        }
      },
    }

    return startDevServer({ options, viteConfig })
  })

  return config
}
