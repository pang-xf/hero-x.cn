# centos安装node环境部署nuxt

### 购买服务器

本人买的是阿里的学生机,一年才一百多(ps:本人非学生!!!但是貌似24岁之前可以一直买，所以我还可以买两年...)

### 安装nodejs 和 系统环境映射 

![](https://ws2.sinaimg.cn/large/006tNbRwgy1fwh2c8s6yvj31kw0ucq4o.jpg)

得到下载链接(这里以v8.9.1为例)

1.登录ssh，执行
`wget -c http://nodejs.org/dist/v8.9.1/node-v8.9.1-linux-x64.tar.xz`下载源码包

2.解压`tar -xvf node-v8.9.1-linux-x64.tar.xz`
3.
### 安装cnpm 

`npm install -g cnpm --registry=https://registry.npm.taobao.org`

安装后 

`cnpm -v`

显示版本号即安装成功

### 安装nginx

https://www.linuxidc.com/Linux/2016-09/134907.htm

### 安装pm2

`cnpm i pm2 -g`

`pm2 -v`

显示版本号即安装成功

### pm2设置开机自启动
* `pm2 start npm --name "hero-x" -- run start` //启动项目
* `pm2 save` //保存当前进程状态
* `pm2 startup` //生成开机自启动服务
* `systemctl enable pm2-root` // 启用开机自启


### 项目目录下新建`home/herox`文件夹

上传`.nuxt`、`nuxt.config.js`以及`package.json`文件到`home/herox`目录下

执行 `cnpm i`

### 修改`usr/local/nginx/conf`下的`nginx.conf`

```javascript
http {
    ...省略
    upstream nodenuxt {
      server 127.0.0.1:3000; #nuxt项目 监听端口
      keepalive 64;
    }
    server {
        listen          3002;
        server_name     localhost;
        location / {
          proxy_http_version 1.1;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection "upgrade";
          proxy_set_header Host $host;
          proxy_set_header X-Nginx-Proxy true;
          proxy_cache_bypass $http_upgrade;
          proxy_pass http://nodenuxt; # 反向代理
        }
    }
}
```

### 运行项目

回到`home/herox`下，运行 `npm start`,打开服务器ip加`3002`端口即可看到运行结果。如下:

![](https://ws2.sinaimg.cn/large/006tNbRwgy1fwh1cn0nljj30nd0j974b.jpg)

### 使用pm2守护项目

还是到`home/herox`下,执行命令`pm2 start npm --name "your project-name" -- run start`

关闭ssh连接,打开服务器ip加`3002`端口,项目还是继续保持运行。

### pm2常用命令

参考资料:

[(小白指南）在 Linux 服务器上安装 Nodejs、Nginx 以及部署 Web 应用)](https://segmentfault.com/a/1190000012297511)

[CentOS 7 下安装 Nginx](https://www.linuxidc.com/Linux/2016-09/134907.htm)

[移动端和pc端nginx配置](https://github.com/Sandop/NuxtPC)