# --- 阶段一：构建前端 ---
FROM node:22-alpine AS build-front
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build  # 生成 dist 文件夹

# --- 阶段二：运行后端 ---
FROM node:22-alpine
WORKDIR /app

# 拷贝后端依赖配置
COPY package*.json ./
# 只安装生产环境依赖
RUN npm install --production

# 从第一阶段拷贝前端打包好的 dist 文件夹到后端工作目录
COPY --from=build-front /app/dist ./dist
# 拷贝后端代码 (假设你的后端入口是 server.js)
COPY server.js ./

EXPOSE 3000
CMD ["node", "server.js"]