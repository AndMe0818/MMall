<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad"/>
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
// 引入轮播图
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  components: {
      Swiper, 
      SwiperItem
  },
  props:{
      banners:{
          type:Array,
      }
  },
  data() {
    return {
      isLoad :false
    };
  },
  mounted() {},
  methods: {
    imageLoad(){
      if(!this.isLoad){
        console.log('swiper被监听');
        this.$emit('swiperImageLoad');
        this.isLoad = true
      }
    }
  },
};
</script>

<style  scoped>
</style>