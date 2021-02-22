<template>
  <div>
    <div id="tab-bar">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style  scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  box-shadow: 2px -2px 7px rgba(100, 100, 100, 0.2);
  /* 固定定位 */
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  
  z-index: 99999;
}

</style>