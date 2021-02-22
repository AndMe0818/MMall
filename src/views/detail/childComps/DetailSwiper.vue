<template>
  <div class="detail-swiper">
    <swiper class="swiper-content">
      <swiper-item
        v-for="(item, index) in topImages"
        :key="index"
        class="swiper-item"
      >
        <img :src="item" alt="" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {};
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style  scoped>
 .swiper-content{
    height: 300px;
} 
</style>