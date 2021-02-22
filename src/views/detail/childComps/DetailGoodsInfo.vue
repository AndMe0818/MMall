<template>
  <div v-if="Object.keys(detailInfo).length != 0" class="goods-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="detailImage" v-for="(item, index) in detailImage" :key="index">
      <div class="info-key">{{ item.key }}</div>
      <div class="info-list" v-for="(value, k) in item.list" :key="k">
        <img :src="value" alt="" @load="imgLoad" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
    detailImage: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0,
    };
  },
  watch: {},
  mounted() {},
  methods: {
    imgLoad() {
      this.counter++;
      if (this.counter % 5 === 0) {
        this.$emit("imageLoad");
      }
      if (this.counter === this.imagesLength) {
        this.$emit("imageLoad");
        console.log('图片加载完毕');
      }
    },
  },
  watch: {
    detailImage() {
      this.detailImage.forEach((item, index, array) => {
        this.imagesLength += item.list.length;
      });
    },
  },
};
</script>

<style  scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}
.info-desc {
  padding: 0 15px;
}

.info-desc .start,
.info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}
.info-desc .start {
  float: left;
}
.info-desc .end {
  float: right;
}
.info-desc .start::before,
.info-desc .end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}
.info-desc .end::after {
  right: 0;
}
.info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}
.detailImage {
  width: 100%;
}
.info-key {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}
.info-list img {
  width: 100%;
}
</style>