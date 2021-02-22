<template>
    <div class="goods">
       <goods-item v-for="(item,index) in goods"  :goodsitem="item"  :imagelength="imagelength" :key='index'/>
    </div>
</template>

<script>
import GoodsItem from './GoodsItem'

export default {
    name: 'GoodsList',
    components: { GoodsItem, },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            imagelength:''
        };
    },
    mounted() {
      
    },
    methods: {
         
    },
    watch: {
        goods(){
          this.imagelength=this.goods.length 
        }
    }
};
</script>

<style  scoped>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 20px;
    padding-bottom: 50px;
}
</style>