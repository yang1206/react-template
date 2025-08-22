import antfu from '@antfu/eslint-config'

export default antfu({
  vue: false,
  stylistic: {
    overrides: {
      'style/jsx-self-closing-comp': 'error',
    },
  },
  react: {
    overrides: {
      'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
      'react/require-default-props': 'off', // Allow non-defined react props as undefined,
      'react-refresh/only-export-components': 'off',
    },
  },
}, {
  settings: {
    'better-tailwindcss': {
      entryPoint: 'src/styles/main.css',
    },
  },
})
