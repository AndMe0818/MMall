<template>
  <div class="bottom-bar">
    <div class="select-all">
      <img
        class="icon"
        src="~/assets/img/cart/tick.svg"
        :class="{ 'selector-active': isSelectAll }"
        @click="SelectAll"
      />
    </div>
    <span>全选</span>
    <span class="total-price">合计:{{totalPrice}}</span>
    <span class="buy-product" @click="calcClick">去结算({{checkedLength}})</span>
  </div>
</template>

<script>
export default {
  name: "CartBottomBar",

  data() {
    return {
      isAll: true,
    };
  },
  mounted() {},
  methods: {
    // 全选
    SelectAll() {
      if(this.isSelectAll){
        this.$store.state.carList.forEach(item=>item.checked = false)
      }else{
        this.$store.state.carList.forEach(item=>item.checked = true)
      }
    },
    // 结算
    calcClick(){
      if(this.checkedLength===0){
        // 如果不是全选状态
        this.$toast.show('请选择购买的商品')
      }
    }
  },
  computed: {
    // 计算总价格
    totalPrice(){
      return this.$store.state.carList.filter(item=>{
        return item.checked
      }).reduce((preValue,item)=>{
          preValue += item.price*item.count 
          return preValue
      },0).toFixed(2)
    },
    // 结算处的商品数量
    checkedLength(){
      return this.$store.state.carList.filter(item=>item.checked).length
    },
    // 全选
    isSelectAll(){
      if(this.$store.state.carList.length === 0 ){
        return false
      }
      return !this.$store.state.carList.find(item=> !item.checked)
    }
  },
};
</script>

<style  scoped>
.bottom-bar {
  width: 100%;
  height: 40px;
  background-color: #eee;
  position: relative;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
}
.bottom-bar .select-all {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}
.icon {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;
}
.selector-active {
  background-color: var(--color-active-text);
  border: none;
}
.total-price{
    margin-left: 15px;
    font-size: 16px;
    color: #666;
}
.buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>