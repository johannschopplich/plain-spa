import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import rootImport from 'rollup-plugin-root-import'
import htmBabelPlugin from './js/modules/sinuous/babel-plugin-htm/index.js'

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
    rootImport({
      root: `${__dirname}/js/`,
      useInput: 'prepend',
      extensions: '.js'
    }),
    babel({
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
