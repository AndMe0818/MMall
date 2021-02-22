import Vue from "vue";
import Vuex from "vuex";

// 安装插件
Vue.use(Vuex);

// 创建store对象
const store = new Vuex.Store({
  state: {
    carList: []
  },
  mutations: {
    //    增加商品数量

    // 添加数量
    addCounter(state, payload) {
      payload.count++;
    },
    addToCart(state, payload) {
      payload.checked = true;
      state.carList.push(payload);
    }
  },
  // 对任务进行分发
  actions: {
    addCart(context, payload) {
      return new Promise((resolve, reject) => {
        // 查询是否有重复商品
        let oldProduct = context.state.carList.find(
          item => item.iid === payload.iid
        );
        // 遍历完后 判断 oldProduct
        if (oldProduct) {
          // 如果有相同的 count属性 则说明有相同商品 该商品count加1
          // oldProduct.count += 1
          context.commit("addCounter", oldProduct);
          resolve('当前商品数量加一')
        } else {
          // 没有则证明没有相同iid 直接push
          payload.count = 1;
          context.commit("addToCart", payload);
          resolve('添加新的商品')
        }
      });
    }
  }
});
export default store;
