<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImage" alt="" @load="imageLoad" />
    <div class="goods-info">
      <p>{{ goodsitem.title }}</p>
      <span class="price">{{ goodsitem.price }}</span>
      <span class="collect">{{ goodsitem.cfav }}</span>
    </div>
  </div>
</template> 

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      },
    },
    imagelength: {
      type: Number,
    },
  },
  data() {
    return {
      path: "",
      counter: 0,
    };
  },
  computed: {
    showImage() {
      return this.goodsitem.image || this.goodsitem.show.img;
    },
  },
  mounted() {
    this.path = this.$route.path;
    // console.log(this.imagelength);
  },
  methods: {
    // 图片 加载完成函数
    imageLoad() {
        // home 页发送加载 事件
        // if (this.$route.path.indexOf("/home") != -1) {
        //   // 发送事件出去
        //   this.$bus.$emit("itemImageLoad");
        // } else if (this.$route.path.indexOf("/detail") != -1) {
         
        //   this.$bus.$emit("goodsImageLoad");
         
        // }
      this.$bus.$emit("itemImageLoad");

      // detail页发送
    },
    // 点击图片
    itemClick() {
      console.log("跳转详情");
      //  1.获取iid
      let iid = this.goodsitem.iid;
      this.$router.push({ path: "/detail", query: { iid } });
    },
  },
};
</script>

<style  scoped>
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