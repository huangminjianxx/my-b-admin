import express from 'express'
const app = express()

app.use(express.json())

// 纯接口，不托管任何前端
app.get('/api/user', (_, res) => {
  res.json({ name: '我来自 Express 接口' })
})

// 生产环境启动端口
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`✅ Express 已启动: http://localhost:${PORT}`)
})

export default app