# Koa-Vue-EMR

An EMR(Electronic Medical Record) base on web. Technology stack: Koa/Vue2/
## 项目地址
```
前端地址：https://github.com/JPs-git/Koa-Vue-EMR_frontend.git
后端地址：https://github.com/JPs-git/Koa-Vue-EMR_backend.git
```
## 安装与部署

---

### 准备工作

```
nodejs >= 18.3.0(推荐最新)
MongoDB >= 5.0.9
nginx >= 1.14.1
```

### 环境搭建

代码下载

```
git clone https://github.com/JPs-git/Koa-Vue-EMR_frontend.git
git clone https://github.com/JPs-git/Koa-Vue-EMR_backend.git
```

### 项目部署

进入前端目录下并安装依赖

```
cd ./Koa-Vue-EMR_frontend
npm install
```

代码构建

```
npm run build
```

将 dist 文件夹拷贝到服务器目录下

```
\cp -rf ./dist /mnt/koa-vue-emr
```

进入后端目录下运行 app.js 并使用 pm2 守护进程

```
cd ..
cd Koa-Vue-EMR_backend
pm2 start app.js
```

如未安装 pm2 请先执行

```
npm install --global pm2
```

### Nginx 配置

```
server {
    listen       80 default_server;
    listen       [::]:80 default_server;
    server_name  _;
    # root         /usr/share/nginx/html;
    root         /mnt/koa-vue-emr/dist;
    # Load configuration files for the default server block.
    include /etc/nginx/default.d/*.conf;

    location /api/ {
            # 此处填写你的服务器ip
            proxy_pass http://yourip:5000;
    }

    error_page 404 /404.html;
        location = /40x.html {
    }

    error_page 500 502 503 504 /50x.html;
        location = /50x.html {
    }
}

```

### 启动服务器

```
service nginx start
```

### 访问项目

- 访问地址： http://服务器的公网ip (服务器需在防火墙中开启 80 端口)
- 需在数据库中添加超级管理员工号为 admin
