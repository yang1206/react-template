import { resolve } from 'node:path'
import type { PluginOption } from 'vite'
import react from '@vitejs/plugin-react-swc'
import generouted from '@generouted/react-router/plugin'
import AutoImport from 'unplugin-auto-import/vite'
import { getRootPath, getSrcPath } from './utils'

export function setupVitePlugins(_viteEnv?: ImportMetaEnv, _isBuild?: boolean): PluginOption[] {
  const plugins = [
    AutoImport({
      imports: ['react', 'react-router-dom', { 'usehooks-ts': ['useDarkMode'] }],
      dirs: [resolve(getSrcPath(), 'hooks')],
      dts: resolve(getRootPath(), 'typings/auto-import.d.ts'),
    }),
    react(),
    generouted(),
  ]
  return plugins
}
