import Toast from "./Toast.vue";
const obj = {};

obj.install = function(Vue) {
  console.log("toast 插件被安装");
  //   1.创建组件构造器
  const toastConstructor = Vue.extend(Toast);
  //   2.创建组件对象
  const toast = new toastConstructor();
  //  3.将组件对象挂载
  toast.$mount(document.createElement("div"));
  // 4.将这个组件插入到dom
  document.body.appendChild(toast.$el);
  // 将组件构造器实例化的对象挂载在vue原型上
  Vue.prototype.$toast = toast;
};

export default obj;
