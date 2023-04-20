---
order: 6
title: "Docker一键部署"
---

# 一键体验 docker-compose

在 deploy/docker-compose/all_in_one 文件夹下, [Github](https://github.com/suyuan32/simple-admin-core/blob/master/deploy/docker-compose/all_in_one/docker-compose.yaml)

## 只需三步

### 启动 docker-compose

```shell
docker-compose up -d
```

### 初始化数据库

<http://localhost/init>

### 重启 core-api, core-rpc 容器

::: info
`deploy/docker-compose/all_in_one`文件夹下有 api 和 rpc 的 etc 配置文件参考
:::

::: warning
部署自己的服务到 docker 只需修改为自己的镜像即可
:::