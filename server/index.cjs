const express = require('express');
const path = require('path');
const app = express();

// 1. 处理 API 接口
app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// 2. 托管 Vite 打包后的静态资源 (dist 目录)
app.use(express.static(path.join(__dirname, 'dist'), {
  maxAge: '1y', // 强缓存一年，Express 会自动转换为秒并设置 Cache-Control
  immutable: true, // 告诉浏览器这个文件永远不会变（针对带哈希的文件）
  setHeaders: (res, filePath) => {
    // 如果是 HTML 文件，强制设置为协商缓存，不使用强缓存
    if (path.extname(filePath) === '.html') {
      res.setHeader('Cache-Control', 'public, no-cache');
    }
  }
}));
// 3. 关键：解决单页应用路由问题
// 所有的非 API 请求，都返回 index.html，交给前端路由处理
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});