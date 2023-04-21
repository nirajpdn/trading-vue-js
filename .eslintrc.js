module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    node: true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  'globals': {
    'MOB_DEBUG': 'readonly',
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
  ],
  'rules': {
    'vue/html-indent': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-prop-types': 'off',
    'no-unused-vars': 'off',
    'vue/prop-name-casing': 'off',
    'vue/no-mutating-props': 'off',
    'vue/no-v-html': 'off',
    'no-constant-condition': 'off',
  },
};
