<template>
  <div id="profile">
    <nav-bar class="nav-bar"><div slot="center">个人中心</div></nav-bar>
    <!-- 用户栏 -->
    <user-info></user-info>
    <!-- 积分栏 -->
    <section class="account">
      <div class="account-item">
        <div class="number"><span class="balance">0.00</span>元</div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number"><span class="balance">0</span>个</div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number"><span class="balance">0</span>分</div>
        <div class="account-info">我的积分</div>
      </div>
    </section>
    <!-- 工具栏 -->
    <list-view :list-data="orderList" class="order-list"/>
    <list-view :list-data="serviceList" class="order-list"/>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";
import UserInfo from "./childComps/UserInfo.vue";
import ListView from './childComps/ListView.vue';

export default {
  name: "Profile",
  components: {
    NavBar,
    UserInfo,
    ListView,
  },

  data() {
    return {
        orderList: [
          {icon: '#icon-Message', iconColor: '#ff8198', info: '我的消息'},
          {icon: '#icon-jifen', iconColor: '#fc7b53', info: '积分商城'},
          
          {icon: '#icon-vip1', iconColor: '#f6ef37', info: '会员卡'},
        ],
         serviceList: [
          {icon: '#icon-cc-cart', iconColor: '#ff5f3e', info: '我的购物车'},
          {icon: '#icon-download', iconColor: '#ff5f3e', info: '下载购物APP'},
        ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style  scoped>
#profile {
  background-color: #f2f2f2;
}
.nav-bar {
  background-color: var(--color-active-text);
  font-weight: 700;
  color: #fff;
}
.account {
  display: flex;
  margin-bottom: 10px;
}
.account-item {
  margin-right: 1px;
  background-color: #fff;
  flex: 1;
  text-align: center;
  color: #666;
  font-size: 13px;
  padding: 18px;
}
.account-item .balance {
  font-size: 24px;
  font-weight: 700;
  color: #ff5f3e;
}
.account-info {
  margin-top: 6px;
}
 .order-list, .service-list {
    margin-top: 12px;
  }
</style>