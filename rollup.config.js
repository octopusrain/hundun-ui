import resolve from 'rollup-plugin-node-resolve' // 处理第三方引入的模块

import { uglify } from 'rollup-plugin-uglify' // 压缩
import VuePlugin from 'rollup-plugin-vue' // 编译.vue文件
import buble from 'rollup-plugin-buble' // 将编译的.vue文件转化为es2015
import babel from 'rollup-plugin-babel' // .js文件编译为es2015
import commonjs from 'rollup-plugin-commonjs' // 转化为commonjs规范
import postcss from 'rollup-plugin-postcss'
import componentList from './components.js'
const buildFileOptions = componentList.map((item) => {
  let inputName = `src/core/${item}.js`
  if (item === 'HUNDUNUI') {
    inputName = `src/index.js`
  }
  return {
    input: inputName,
    output: {
      file: `lib/${item}.js`,
      name: item,
      format: 'umd',
      exports: 'named',
    },
    plugins: [
      commonjs(),
      postcss({
        plugins: [],
      }),
      VuePlugin(),
      buble(),
      resolve(),
      babel({
        exclude: 'node_modules/**',
      }),
      uglify(),
    ],
  }
})
export default buildFileOptions
