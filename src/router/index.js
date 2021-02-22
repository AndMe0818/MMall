import Vue from "vue";
import Router from "vue-router";

// 引入懒加载
const Home = () => import("../views/home/Home.vue");
const Category = () => import("../views/category/Category.vue");
const Profile = () => import("../views/profile/Profile.vue");
const Cart = () => import("../views/cart/Cart.vue");
const Detail = () => import("../views/detail/Detail.vue");
Vue.use(Router);
const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  // 分类
  {
    path: "/category",
    name: "category",
    component: Category
  },
  // 购物车
  {
    path: "/cart",
    name: "cart",
    component: Cart
  },
  // 我的
  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
  // 商品详情
  { path: "/detail", name: "detail", component: Detail }
];
export default new Router({
  routes,
  mode: "history"
});
