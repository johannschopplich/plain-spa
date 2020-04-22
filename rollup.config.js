import babel from 'rollup-plugin-babel'
import bundleSize from 'rollup-plugin-size'
import htmBabelPlugin from './js/modules/sinuous/babel-plugin-htm/index.js'
import rootImport from 'rollup-plugin-root-import'
import { terser } from 'rollup-plugin-terser'

const production = !process.env.ROLLUP_WATCH

export default [{
	input: 'js/main.js',
	output: [
		{
			file: 'build/bundle.js',
			format: 'es'
		}
	],
	plugins: [
    bundleSize(),
    rootImport({
      root: `${__dirname}/js/`,
      useInput: 'prepend',
      extensions: '.js'
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: [
        [htmBabelPlugin, {
          // `import { h } from '/modules/sinuous/index.js'`
          import: '/modules/sinuous/index.js'
        }]
      ]
    }),

    // If building for production, minify
    production && terser()
  ]
}]
