const path = require('path')

module.exports = {
	devServer: {
		proxy: 'http://3.236.69.129:8081',
		disableHostCheck: true
	},
	configureWebpack: {
		resolve: {
			symlinks: false,
			alias: {
				vue$: path.resolve('./node_modules/vue/dist/vue.esm-bundler.js')
			}
		}
	}
}
