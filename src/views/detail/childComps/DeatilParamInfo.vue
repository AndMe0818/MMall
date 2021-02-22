<template>
  <div class="param-info" >
    <!-- table 是  paramsInfo.size 里的array个数-->
    <!-- tr ==>size里的array的长度 -->
    <!-- td  就是 size里的array里的array -->
    <!-- 参数表格 -->
    <table v-for="(table, index) in paramsInfo.sizes" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">
          {{ td }}
        </td>
      </tr>
    </table>
    <!--  更多信息 -->
    <table class="info-param">
      <tr v-for="(info, index) in paramsInfo.infos" :key="index">
        <td class="param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
    

  </div>
</template>

<script>
export default { 
  name: "DeatilParamInfo",
  props: {
    paramsInfo: {
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
.param-info {
  padding: 20px 10px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.param-info table {
  width: 100%;
  border-collapse: collapse;
}
  .param-info table tr {
    height: 42px;
  }
  .param-info table tr td{
    border-bottom: 1px solid rgba(100,100,100,.1);
    text-align: center
  }
   .info-param {
    border-top: 1px solid rgba(0,0,0,.1);
  }
  .param-key{
    width: 100px;
  }
   .param-value {
    color:var(--color-active-text)
  }

</style>