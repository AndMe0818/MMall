<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
        <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      defult() {
        return [];
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
.recommend{
    display: flex;
    width: 100%;
    text-align: center;
    margin-top: 15px ; 
    padding-bottom: 10px;
    border-bottom: 10px solid #eee;
}
.recommend-item{
    flex: 1;
   
}
.recommend-item img{
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
}
</style>