<template>
  <div id="app">
    <main-tab-bar v-show="isTabShow"></main-tab-bar>
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar.vue";

export default {
  name: "App",
  data() {
    return {
      path: "",
      iid: null,
      isTabShow: true,
    };
  },
  components: {
    MainTabBar,
  },
  mounted() {
    
  },
  watch: {
    $route(to, from) {
      this.path = to.path;
      
    if (this.path.indexOf("detail") != -1) {
      this.isTabShow=false
    }else{
      this.isTabShow=true
    }
    },
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
