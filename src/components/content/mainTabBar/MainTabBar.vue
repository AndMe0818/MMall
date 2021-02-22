<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/tabbar_home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/tabbar_home_a.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/tabbar_about.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/tabbar_about_a.svg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/TABbar_car.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/TABbar_car_a.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/Profile.svg" alt="" />
        <img slot="item-icon-active" src="~assets/img/tabbar/Profile_a.svg" alt="" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },

  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
</style>