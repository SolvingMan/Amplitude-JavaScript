import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';


export default {
  input: 'src/index.js',
  output: {
    file: 'amplitude.js',
    format: 'umd',
  },
  name: 'amplitude',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      browser: true,
    }),
    commonjs(),
  ],
}
