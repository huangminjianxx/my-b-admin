# --- 阶段一：构建前端 ---
FROM node:22-alpine AS build-front
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- 阶段二：运行全栈服务 (Express) ---
FROM node:22-alpine
WORKDIR /app

# 1. 拷贝依赖配置文件
COPY package*.json ./

# 2. 安装生产环境所需的依赖 (express 等)
RUN npm install --production

# 3. 从第一阶段拷贝前端打包好的产物
COPY --from=build-front /app/dist ./dist

# 4. 拷贝后端入口文件 index.js 到容器
# 如果你的 index.js 引用了其他后端文件夹(如 routes/), 建议使用 COPY . .
COPY index.js ./

# 5. 暴露端口 (Express 监听的端口)
EXPOSE 3000

# 6. 启动命令
CMD ["node", "index.js"]