import resolve from 'rollup-plugin-node-resolve'; // 处理第三方引入的模块

import { uglify } from "rollup-plugin-uglify" // 压缩
import VuePlugin from 'rollup-plugin-vue' // 编译.vue文件
import buble from 'rollup-plugin-buble'; // 将编译的.vue文件转化为es2015
import babel from 'rollup-plugin-babel'; // .js文件编译为es2015
import commonjs from 'rollup-plugin-commonjs' // 转化为commonjs规范
export default {
  input: 'src/index.js',
  output: {
    file: 'hd-ui.js',
    name:'HDConfirm',
    format: 'umd'
  },
  plugins: [
    commonjs(),
    VuePlugin(),
    buble(),
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
};