import { Form, Input, Button, Card, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '@/store'

export default function Login() {
  const navigate = useNavigate()
  const login = useUserStore((state) => state.login)

  const onFinish = (values: { username: string; password: string }) => {
    login('mock-token', {
      username: values.username,
      role: 'admin',
    })
    message.success('登录成功')
    navigate('/home')
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f5f7fa',
      }}
    >
      <Card title="登录" style={{ width: 400 }}>
        <Form onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input placeholder="用户名" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password placeholder="密码" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}