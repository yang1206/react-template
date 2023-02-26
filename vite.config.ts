import type { ConfigEnv } from 'vitest/config'
import { defineConfig } from 'vitest/config'
import { loadEnv } from 'vite'
import { createViteProxy } from './build/config'
import { setupVitePlugins } from './build/plugins'
import { convertEnv, getRootPath, getSrcPath } from './build/utils'
// https://vitejs.dev/config/
export default defineConfig((configEnv: ConfigEnv) => {
  const srcPath = getSrcPath()
  const rootPath = getRootPath()
  const isBuild = configEnv.command === 'build'
  const viteEnv = convertEnv(loadEnv(configEnv.mode, process.cwd()))
  const { VITE_PORT, VITE_USE_PROXY, VITE_PROXY_TYPE } = viteEnv
  return {
    plugins: setupVitePlugins(viteEnv, isBuild),
    server: {
      host: '0.0.0.0',
      port: VITE_PORT,
      open: false,
      proxy: createViteProxy(VITE_USE_PROXY, VITE_PROXY_TYPE as ProxyType),
    },
    build: {
      reportCompressedSize: false,
      sourcemap: false,
      chunkSizeWarningLimit: 1024, // chunk 大小警告的限制（单位kb）
      commonjsOptions: {
        ignoreTryCatch: false,
      },
      terserOptions: {
        // detail to look https://terser.org/docs/api-reference#compress-options
        compress: {
          drop_console: false,
          pure_funcs: ['console.log', 'console.info'],
          drop_debugger: true,
        },
      },

    },
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath,
      },
    },
    test: {
      environment: 'jsdom',
    },
  }
})
