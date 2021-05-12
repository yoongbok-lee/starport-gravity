import { App as Application } from 'vue'
import SpWalletCreate from './SpWalletCreate.vue'

import { registerComponent } from './../../utils/plugins/index'

export const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpWalletCreate)
	},
}

export default SpWalletCreate
