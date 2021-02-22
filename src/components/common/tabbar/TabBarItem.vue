<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>

    <!-- <img src="../../assets/img/tabbar_home.svg" alt="">
       <div>首页</div> -->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  // 接受父组件传来的path
  props: {
    // 路径
    path:String,
    activeColor:{
      type:String,
      default:'#d81e06'
    }
  },
  data() {
    return {
      //isActive: true,
    };
  },
  mounted() {},
  methods: {
    itemClick() {
      console.log("我被点击");
      return this.$router.replace(this.path)
    },
  },
  computed:{
    isActive(){
      // string.indexOf(字符串) 查看 srting中是否含有括号里的字符串没有就返回-1
     return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} :{}
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}
/* .active {
  color: #d81e06;
} */
</style>