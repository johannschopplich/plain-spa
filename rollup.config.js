import alias from '@rollup/plugin-alias'
import babel from 'rollup-plugin-babel'
import bundleSize from 'rollup-plugin-size'
import htmBabelPlugin from './js/modules/sinuous/babel-plugin-htm/index.js'
import { terser } from 'rollup-plugin-terser'

const path = require('path')
const production = !process.env.ROLLUP_WATCH

export default {
  input: 'js/main.js',
  output: {
    file: 'build/bundle.js',
    format: 'es'
  },
  plugins: [
    alias({
      entries: [
        { find: '@', replacement: path.resolve(__dirname, 'js') }
      ]
    }),
    bundleSize(),
    babel({
      exclude: 'node_modules/**',
      plugins: [
        [htmBabelPlugin, {
          // `import { h } from '/modules/sinuous/index.js'`
          import: '@/modules/sinuous/index.js'
        }]
      ]
    }),

    // If building for production, minify
    production && terser()
  ]
}
