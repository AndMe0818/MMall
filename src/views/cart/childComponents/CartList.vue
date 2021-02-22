<template>
    <div class="cart-list">
        <scroll class="content">
            <cart-list-item v-for="(item,index) in CartList" :key="index" :itemInfo="item"/>
        </scroll>
        <cart-bottom-bar/>
    </div>
    
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue';
import CartListItem from './CartListItem.vue';
import CartBottomBar from './CartBottomBar.vue';
export default {
    name: 'CartList',
    components: {
        Scroll, 
        CartListItem,
        CartBottomBar,
    },
    props:{
        CartList:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            
        };
    },
    mounted() {
        
    },
    methods: {
        
    },
};
</script>

<style  scoped>
.cart-list{
    height: calc(100vh - 44px - 49px - 40px);
}
.content{
    height: 100%;
    overflow: hidden;
}
</style>