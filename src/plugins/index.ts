/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'
import FlagIcon from 'vue-flag-icon'

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  app
    .use(FlagIcon)
    .use(vuetify)
    .use(router)
}
