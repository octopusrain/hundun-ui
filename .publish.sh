#!/usr/bin/env bash
npm config get registry # 检查仓库镜像库
npm config set registry=http://registry.npmjs.org
echo '请进⾏登录相关操作：'
npm login
echo "-------publishing-------"
npm publish
npm config set registry=https://registry.npm.taobao.org # 设置taobaoyuan
echo "发布完成"
exit