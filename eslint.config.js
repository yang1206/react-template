import antfu from '@antfu/eslint-config'

export default await antfu({
  typescript: true,
  vue: false,
  react: true,
  unocss: true,
})
