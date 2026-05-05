# 第一阶段：编译阶段
FROM node:22-alpine AS build-stage

WORKDIR /app

# 利用 Docker 缓存机制，先安装依赖
COPY package*.json ./
RUN npm install

# 复制源码并构建
COPY . .
RUN npm run build

# 第二阶段：生产阶段
FROM nginx:alpine AS production-stage

# 复制编译后的静态文件到 Nginx 目录
COPY --from=build-stage /app/dist /usr/share/nginx/html

# 复制自定义 Nginx 配置（可选，见下文）
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]