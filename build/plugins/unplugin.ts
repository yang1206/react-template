import { resolve } from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import { getRootPath, getSrcPath } from '../utils'

export default [
  AutoImport({
    imports: ['react', { 'usehooks-ts': ['useDarkMode'] }],
    dirs: [resolve(getSrcPath(), 'hooks')],
    vueTemplate: true,
    dts: resolve(getRootPath(), 'typings/auto-import.d.ts'),
  }),
]
