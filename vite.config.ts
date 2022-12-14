import { resolve } from 'path'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss(),
    AutoImport({
      imports: ['react', 'react-router-dom', { 'usehooks-ts': ['useDarkMode'] }],
      dts: './src/auto-imports.d.ts',
      dirs: ['src/hooks'],
      // eslintrc: {
      //   enabled: true,
      // },
      defaultExportByFilename: true,
    }),
  ],
  server: {
    host: true, // host设置为true才可以使用network的形式，以ip访问项目
    port: 1206, // 端口号
    open: false, // 自动打开浏览器
    cors: true, // 跨域设置允许
    strictPort: false, // 如果端口已占用直接退出
    // 接口代理
    // proxy: {
    //   '/api': {
    //     // 本地 8000 前端代码的接口 代理到 8888 的服务端口
    //     target: 'http://123.207.32.32:9001/',
    //     changeOrigin: true, // 允许跨域
    //     rewrite: (path) => path.replace('/api/', '/'),
    //   },
    // },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
  },
})
