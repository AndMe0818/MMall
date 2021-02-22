<template>
  <div class="recommend-info">
    <div class="info-header">热门推荐</div>
    <div class="goods-list">
      <div class="goods-item" v-for="(item, index) in goods" :key="index">
        <img :src="item.image" alt="" @load="imageload"/>
        <div class="goods-info">
          <p>{{ item.title }}</p>
          <span class="price">{{ item.price }}</span>
          <span class="collect">{{ item.cfav }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailRecommendInfo",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
        counter:0,
    };
  },
  mounted() {},
  methods: {
      imageload(){
          this.counter++
        if(this.counter===this.goods.length){
            this.$emit('recomendLoad');
            console.log('推荐图片加载完毕');
        }
      }
  },
};
</script>

<style  scoped>
.info-header{
    line-height: 40px;
    margin-left: 10px;
    font-size: 15px;
    color: #333;
}
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 20px;
  padding-bottom: 50px;
}
.goods-item {
  margin-bottom: 12px;
  position: relative;
  padding-bottom: 40px;
  width: 48%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
/* .goods-info {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  font-size: 12px;
  text-align: center;
  overflow: hidden;
} */
.goods-info {
  font-size: 14px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>