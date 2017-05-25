// Rollup plugins
import eslint from 'rollup-plugin-eslint';
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import uglify from 'rollup-plugin-uglify';

export default {
    entry: 'src/main',
    moduleName: 'test',
    plugins: [
        eslint(),
        babel(babelrc()),
        uglify()
    ],
    targets: [
        { dest: 'dist/main.cjs.js', format: 'cjs' },
        { dest: 'dist/main.umd.js', format: 'umd' },
        { dest: 'dist/main.min.js', format: 'iife' }
      ]
};
