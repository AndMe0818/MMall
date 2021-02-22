<template>
  <div class="shop-info">
    <div class="shop-title">
      <img :src="shop.logo" alt="" class="shop-logo" />
      <span class="shop-name">{{ shop.name }}</span>
    </div>
    <!-- 商铺信息 -->
    <div class="shop-scroe">
      <!-- 销量和数目 -->
      <div class="shop-goods">
        <span>
          <p class="shop-count">{{ shop.sells }}</p>
          <p>总销量</p>
        </span>
        <span>
          <p class="shop-count">{{ shop.goodsCount }}</p>
          <p>全部宝贝</p>
        </span>
      </div>
      <!-- 服务 -->
      <div class="shop-service">
        <div
          v-for="(item, index) in shop.score"
          :key="index"
          class="service-item"
        >
          <span>{{ item.name }}</span>
          <span :class="item.score > 4.5 ?  'good': 'bad' ">{{ item.score.toFixed(2) }}</span>
          <span class="grade" :class="{ isBetter : item.isBetter }" >{{ item.isBetter ? "高" : "低" }}</span>
        </div>
      </div>
    </div>
    <div class="shop-bottom">
        <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",

  data() {
    return {};
  },
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    newScroe(value) {
      let realVal = Number(value).toFixed(2);
      return Number(realVal);
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.shop-info {
  padding: 20px 5px;
}
.shop-title {
  margin-bottom: 20px;
}
.shop-logo {
  width: 48px;
  height: 48px;
  border: 1px solid #666;
  border-radius: 24px;
  vertical-align: middle;
}
.shop-name {
  margin-left: 20px;
  font-size: 16px;
  font-weight: 600;
}
/* 商店销量和评价 */
.shop-scroe {
  display: flex;
  justify-content: space-around;
}
.shop-goods {
  display: flex;
  text-align: center;
  /* border: 1px solid #999; */
  /* font-size: 12px; */
}
.shop-goods span p {
  font-size: 14px;
}
.shop-goods span {
  padding: 15px 10px;
}
.shop-count {
  height: auto;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 30px;
}

.shop-service {
  padding-left: 10px;
  border-left: 1px solid #666;
}
.service-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  line-height: 30px;
}
.service-item span {
  margin: 2px 4px;
  font-size: 14px;
}
.grade {
  background-color: rgb(228, 11, 11);
  color: #fff;
  border-radius: 3px;
}
.bad{
    color:rgb(228, 11, 11)
}
.good{
    color: seagreen;
}
.isBetter{
    background-color: seagreen;
}
.shop-bottom{
    border-bottom: 5px solid #f2f5f8;
    
}
.enter-shop{
    margin:10px 0 ;
    text-align: center;
    padding: 10px;
    background-color: #f2f5f8;
}
</style>