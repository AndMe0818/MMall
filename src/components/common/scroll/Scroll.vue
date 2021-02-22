<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    // 默认监听参数
    probeType: {
      type: Number,
      default() {
        return 0;
      },
    },
    // 监听上拉事件参数
    pullUpLoad: {
      type: Boolean,
      default(){
        return false
      }
    },
  },
  data() {
    return {
      scroll: null,
      message: "你好我是scroll",
    };
  },
  mounted() {
    // 创建 bscroll 对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      // 监听滚动
      probeType: this.probeType,
      //  监听上拉
      pullUpLoad: this.pullUpLoad,
      // 启用dom 监控
      //  observeDOM: true,
      click: true,
      mouseWheel: true,
    });
    // 2监听滚动位置
    this.scroll.on("scroll", (position) => {
      // console.log(position);
      this.$emit("scroll", position);
    });
    // 3监听上拉事件
    if (this.pullUpLoad) {
       this.scroll.on("pullingUp", () => {
      // console.log('上拉加载更多');
      // 发送 上拉事件
      this.$emit("pullingUp");
    });
    }
   
    // console.log(this.scroll);
    // 监听scroll滚动到底部
    
  },

  methods: {
    // 滚动事件
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    // 上拉加载刷新 事件
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    // 刷新scroll 事件
    refresh() {
      this.scroll && this.scroll.refresh();
      console.log("scroll refresh");
    },
  },
};
</script>

<style  scoped>
</style>