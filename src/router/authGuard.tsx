import { Navigate } from 'react-router-dom'
import { useUserStore } from '@/store'

export function useAuthGuard() {
  const token = useUserStore((s) => s.token)
  const path = window.location.pathname

  // 白名单
  const whiteList = ['/login']

  // 未登录 + 不在白名单 → 跳登录
  if (!token && !whiteList.includes(path)) {
    return <Navigate to="/login" replace />
  }

  // 已登录访问登录页 → 跳首页
  if (token && path === '/login') {
    return <Navigate to="/home" replace />
  }

  // 正常放行
  return null
}