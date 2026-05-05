import type { Express } from 'express'
import app from './index'

export function viteExpressPlugin() {
  return {
    name: 'vite-express-plugin',
    
    // 👇 加这个判断：只在开发环境执行
    apply: 'serve',

    configureServer(server: any) {
      server.middlewares.use(app as Express)
    },
  }
}