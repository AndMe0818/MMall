import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store"
import toast from "components/common/toast"
// 懒加载插件
import VueLazyLoad from 'vue-lazyload'
// 阿里 图标
// import "assets/css/icon.css"
// 导入300 毫秒插件
import FastClick from 'fastclick'
FastClick.attach(document.body)
// 使用懒加载插件
Vue.use(VueLazyLoad,{
  loading: require('./assets/img/common/loading.png')
});

Vue.config.productionTip = false;
// 添加事件总线对象
Vue.prototype.$bus = new Vue();

// 安装toast 插件
Vue.use(toast)

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
