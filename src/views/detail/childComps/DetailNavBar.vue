<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" >
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="title-item"
          :class="{ active: index === currentIndex}"
          @click="titleClick(index)"
         
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  props:{
    currentIndex:{
      type:Number,
      default:0
    }
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
    };
  },
  mounted() {},
  methods: {
      titleClick(index){
          this.$emit('titleClick',index);
      },
      backClick(){
        this.$router.go(-1)
      },
  },
};
</script>

<style  scoped>
.nav-bar{
  background-color: #fff;
  z-index: 99;
}
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-active-text);
}
.back img{
  margin-top:10px ;
}

</style>