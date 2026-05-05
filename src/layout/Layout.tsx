import { Layout, Menu, Typography } from 'antd'
import { Outlet, useNavigate } from 'react-router-dom'
import { useUserStore } from '@/store'
import { useAppStore } from '@/store'

const { Header, Sider, Content } = Layout

export default function LayoutMain() {
  const navigate = useNavigate()
  const username = useUserStore((state) => state.username)
  const logout = useUserStore((state) => state.logout)
  const siderCollapsed = useAppStore((state) => state.siderCollapsed)

  // 当前路由
  const pathname = location.pathname

  return (
    <Layout style={{ height: '100vh' }}>
      {/* 左侧菜单 */}
      <Sider trigger={null} collapsible collapsed={siderCollapsed} theme="dark">
        <div
          style={{
            height: 60,
            color: '#fff',
            textAlign: 'center',
            lineHeight: '60px',
            fontSize: 16,
          }}
        >
          管理后台
        </div>

        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[pathname]}
          items={[
            { key: '/home', label: '首页' },
            { key: '/system', label: '系统设置' },
          ]}
          onSelect={({ key }) => navigate(key)}
        />
      </Sider>

      {/* 右侧内容 + 顶部 */}
      <Layout>
        <Header
          style={{
            background: '#fff',
            padding: '0 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* 左侧折叠按钮（可选） */}
          <div onClick={() => useAppStore.getState().toggleSider()}>
            <Typography.Text strong>三</Typography.Text>
          </div>

          {/* 右侧用户信息 */}
          <div>
            欢迎你，{username || '管理员'}
            <a
              onClick={() => {
                logout()
                navigate('/login')
              }}
              style={{ marginLeft: 16 }}
            >
              退出登录
            </a>
          </div>
        </Header>

        {/* 内容区域 */}
        <Content
          style={{
            padding: 20,
            background: '#f5f7fa',
            overflow: 'auto',
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}