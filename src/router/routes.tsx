import { Navigate } from 'react-router-dom'
import Layout from '@/layout/Layout'
import Home from '@/views/Home'
import Login from '@/views/Login'
import { lazy, Suspense } from 'react'
const System = lazy(() => import('@/views/System'))
const lazyLoad = (children: React.ReactNode) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
}

// 纯路由配置
export const routes = [
  { path: '/login', element: <Login /> },

  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Navigate to="/home" /> },
      { path: 'home', element: <Home /> },
      { path: 'system', element: lazyLoad(<System />) },
    ],
  },

  { path: '*', element: <Navigate to="/login" /> },
]