module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
  ],
  plugins: ['import'],
  rules: {
    'camelcase': 0,
    'comma-dangle': [2, 'only-multiline'],
    'indent': 0,
    'no-extend-native': 2,
    'no-debugger': 0,
    'no-multiple-empty-lines': 0,
    'no-return-assign': 0,
    'object-curly-spacing': 0,
    'space-before-function-paren': [0, 'always'],
    'vue/no-use-v-if-with-v-for': 0,
  },
  parserOptions: {
    parser: '@babel/eslint-parser'
  }
}