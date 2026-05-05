const express = require('express');
const path = require('path');
const app = express();

// 1. 处理 API 接口
app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// 2. 托管 Vite 打包后的静态资源 (dist 目录)
app.use(express.static(path.join(__dirname, 'dist')));

// 3. 关键：解决单页应用路由问题
// 所有的非 API 请求，都返回 index.html，交给前端路由处理
app.get('/:any*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});