module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: false,
    node: true,
    es6: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  // add your custom rules here
  rules: {
    semi: ['error', 'never'], // 去掉末尾分号
    quotes: ['error', 'single'], // 使用单引号
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-function-paren': 0,
    'eol-last': 0,
    'spaced-comment': 0,
    'vue/no-parsing-error': 0,
    'vue/max-attributes-per-line': 0,
    'vue/singleline-html-element-content-newline': 0
    // 'no-tabs': 'off'
  },
  globals: {
    App: true,
    Page: true,
    wx: true,
    swan: true,
    tt: true,
    my: true,
    getApp: true,
    getPage: true,
    requirePlugin: true,
    uni: true,
    mpvue: true,
    mpvuePlatform: true
  }
}
