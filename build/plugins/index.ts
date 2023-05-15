import type { PluginOption } from 'vite'
import react from '@vitejs/plugin-react-swc'
import unocss from 'unocss/vite'
import unplugins from './unplugin'

export function setupVitePlugins(viteEnv?: ViteEnv, isBuild?: boolean): PluginOption[] {
  const plugins = [
    ...unplugins,
    react(),
    unocss(),

  ]
  return plugins
}
