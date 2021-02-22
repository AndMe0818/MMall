<template>
  <div class="tab-menu">
    <scroll class="menu-list" ref="scorll">
      <div
        class="menu-list-item"
        v-for="(item, index) in categories"
        :key="index"
        @click="itemClick(index)"
        :class="{ active: index === currentIndex }"
      >
        {{ item.title }}
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue";
export default {
  name: "TabMenu",
  props: {
    categories: Array,
  },
  components: {
    Scroll,
  },

  data() {
    return {
      currentIndex: 0,
      counter: 0,
    };
  },
  created() {
   
  },
 updated () {
    console.log('update执行');
    this.$refs.scorll.refresh()
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("selectitem", index);
    
    },
   
  },
  watch: {},
};
</script>

<style  scoped>
.tab-menu {
  width: 100px;
  height: 100%;
  background-color: #f6f6f6;
}
.menu-list {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.menu-list-item {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
}
.active {
  font-weight: 700;
  background-color: #fff;
  color: var(--color-active-text);
  border-left: 2px solid orangered;
}
</style>