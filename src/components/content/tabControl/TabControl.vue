<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{ active : index === currentIndex }"
      @click='itemClick(index)'
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",

  data() {
    return {
        currentIndex:0
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted() {},
  methods: {
      itemClick(index){
          this.currentIndex=index
          this.$emit('tabClick', index);
      }
  },
};
</script>

<style  scoped>
.tab-control {
  display: flex;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  z-index:9;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
  height: 40px;
}
.tab-control-item span{
    padding: 8px;
}
.active {
  color: var(--color-active-text);
}
.active span{
    border-bottom: 3px solid var(--color-active-text);
}
</style>