import { useRoutes } from 'react-router-dom'
import { routes } from './routes'
import { useAuthGuard } from './authGuard'

export default function Router() {
  // 守卫
  const guard = useAuthGuard()
  if (guard) return guard

  // 路由
  return useRoutes(routes)
}