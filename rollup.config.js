import bundleSize from 'rollup-plugin-size'
import alias from '@rollup/plugin-alias'
import babel from 'rollup-plugin-babel'
import htmBabelPlugin from './js/modules/sinuous/babel-plugin-htm/index.js'
import { terser } from 'rollup-plugin-terser'

const path = require('path')
const production = !process.env.ROLLUP_WATCH
const sourcemap = !production ? 'inline' : false

export default {
  input: 'js/main.js',
  output: {
    file: 'build/bundle.js',
    format: 'es',
    sourcemap: sourcemap
  },
  plugins: [
    bundleSize(),
    alias({
      entries: [
        { find: '@', replacement: path.resolve(process.cwd(), 'js') }
      ]
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: [
        [htmBabelPlugin, {
          // `import { h } from '/modules/sinuous/index.js'`
          import: '@/modules/sinuous/index.js'
        }]
      ]
    }),

    production && terser()
  ]
}
