import { Navigate } from 'react-router-dom'
import Layout from '@/layout/Layout'
import Home from '@/views/Home'
import System from '@/views/System'
import Login from '@/views/Login'

// 纯路由配置
export const routes = [
  { path: '/login', element: <Login /> },

  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Navigate to="/home" /> },
      { path: 'home', element: <Home /> },
      { path: 'system', element: <System /> },
    ],
  },

  { path: '*', element: <Navigate to="/login" /> },
]