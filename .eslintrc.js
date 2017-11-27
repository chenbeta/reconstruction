// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
    "spaced-comment": 0,//注释风格要不要有空格什么的
    "indent": ["error", 4],//缩进风格
    "no-tabs":"off",
    "semi": [2, "always"],//语句强制分号结尾
    "valid-jsdoc": 0,//jsdoc规则
    "padded-blocks": 0,//块语句内行首行尾是否要空行
    "eol-last":0    // 文件末尾不强制换行  
  }
}
