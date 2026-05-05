import type { Express } from 'express'
import app from './index'

export function viteExpressPlugin() {
  return {
    name: 'vite-express-plugin',
    configureServer(server: any) {
      server.middlewares.use(app as Express)
    },
  }
}