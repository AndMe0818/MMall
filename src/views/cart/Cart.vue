<template>
    <div class="cart">
      <nav-bar class="nav-bar">
          <div slot="center">购物车[{{cartLength}}]</div>
      </nav-bar>
      <cart-list :CartList="CartList"/>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import CartList from './childComponents/CartList.vue';
export default {
    name: 'Cart',
  
     components: {
          NavBar,
          CartList,
     },  
    data() {
        return {
            
        };
    },
    computed: {
      cartLength(){
          return this.$store.state.carList.length
      },
      CartList(){
          return this.$store.state.carList
      } 
    },
    mounted() {
        
    },
    methods: {
        
    },
};
</script>

<style  scoped>
.nav-bar{
    background-color: var(--color-active-text);
    color: #fff;
    font-size: 16px;
    font-weight: 700;
}
</style>