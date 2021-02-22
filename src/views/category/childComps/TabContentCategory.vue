<template>
  <div class="content-cate" v-if="subcategories.list">
    <div class="item" v-for="(item, index) in subcategories.list" :key="index">
      <a :href="item.link">
        <img class="item-img" :src="item.image" alt="" />
        <div class="item-text">{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabContentCategory",
  props: {
    subcategories: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style  scoped>
.content-cate {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.content-cate::after{
  content: "";
  width: 134px;
}

.item {
  text-align: center;
  font-size: 12px;
  width: 134px;
  /* margin-left: 10px; */
}

.item-img {
  width: 80%;
}

.item-text {
  margin-top: 15px;
}
</style>