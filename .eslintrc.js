module.exports = {
  parser: 'vue-eslint-parser', //定义ESLint的解析器
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: ['plugin:prettier/recommended', 'plugin:vue/essential'], //定义文件继承的子规范
  plugins: ['prettier'], //定义了该eslint文件所依赖的插件
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': 1, //  eslint-plugin-prettier 使用prettier作为eslint规则
    semi: ['error', 'never'], // 禁止使用分号
  },
}
