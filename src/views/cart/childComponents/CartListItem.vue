<template>
  <div id="car-item">
    <div class="item-selector">
      <img
        src="~/assets/img/cart/tick.svg"
        class="icon"
        :class="{ 'selector-active': itemInfo.checked }"
        @click="isactive"
      />
    </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ itemInfo.title }}</div>
      <div class="item-desc">商品描述:{{ itemInfo.desc }}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{ itemInfo.price }}</div>
        <div class="item-count right">X{{ itemInfo.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartListItem",
  props: {
    // 购物车里商品对象
    itemInfo: Object,
  },
  data() {
    return {
      ischecked: true,
    };
  },
  mounted() {},
  methods: {
    isactive() {
      this.itemInfo.checked = !this.itemInfo.checked;
    },
  },
};
</script>

<style  scoped>
#car-item {
  width: 100%;
  display: flex;
  /* font-size: 0; */
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-selector {
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.icon  {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;
  border-radius: 50%;
}
.selector-active {
  background-color: var(--color-active-text);
  border: none;
}
.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-img {
  padding: 5px;
}
.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.info-bottom .item-price {
  color: orangered;
}
</style>