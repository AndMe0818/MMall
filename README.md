# 移动端电商项目
## 项目 采用 vuecli2, axios，better-scroll 等框架

# 项目难点： #
## 就是异步调用获取并渲染到的图片导致 better-scroll 已计算出滚动区域不匹配
## 解决方法 ------ 调用 scroll.refresh 方法 刷新


> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
