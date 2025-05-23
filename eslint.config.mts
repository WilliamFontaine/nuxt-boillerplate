import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // your custom flat configs go here, for example:
  {
    ignores: ['node_modules', '.nuxt', '.output', 'dist', 'generated'],
    files: ['**/*.ts', '**/*.vue'],
    rules: {
      'no-console': 'off',
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'never'],
      'comma-spacing': ['error', { before: false, after: true }],
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-before-function-paren': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
      'space-before-blocks': ['error', 'always'],
      'space-infix-ops': ['error'],
      'no-multi-spaces': ['error', { ignoreEOLComments: true }],

      // Vue-specific rules
      'vue/multi-word-component-names': 'off',
      'vue/html-indent': ['error', 2],
      'vue/comma-spacing': ['error', { before: false, after: true }],
      'vue/script-indent': ['error', 2, { baseIndent: 0 }],
      'vue/keyword-spacing': ['error', { before: true, after: true }],
      'vue/object-curly-spacing': ['error', 'always'],
      'vue/key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
      'vue/arrow-spacing': ['error', { before: true, after: true }],
      'vue/array-bracket-spacing': ['error', 'never'],
      'vue/block-spacing': ['error', 'always'],
      'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
      'vue/space-infix-ops': ['error'],
      'vue/max-attributes-per-line': ['error', { singleline: { max: 5 } }],
      'vue/padding-line-between-blocks': ['error', 'always'],
      'vue/html-self-closing': 'off',
      'vue/valid-v-for': 'off',

      // TypeScript-specific rules
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    }
  },
  {
    files: ['cypress/support/e2e.ts'],
    rules: {
      '@typescript-eslint/no-namespace': 'off'
    }
  }
)
