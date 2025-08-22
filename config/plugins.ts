import type { PluginOption } from 'vite'
import { resolve } from 'node:path'
import tailwind from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import react from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'
import { getRootPath, getSrcPath } from './utils'

export function setupVitePlugins(_viteEnv?: ImportMetaEnv, _isBuild?: boolean): PluginOption[] {
  const plugins = [
    AutoImport({
      imports: ['react', { 'usehooks-ts': ['useDarkMode'] }],
      dirs: [resolve(getSrcPath(), 'hooks')],
      vueTemplate: true,
      dts: resolve(getRootPath(), 'typings/auto-import.d.ts'),
    }),
    react(),
    tailwind(),
    TanStackRouterVite(),
  ]
  return plugins
}
