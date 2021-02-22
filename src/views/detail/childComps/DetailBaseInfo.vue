<template>
    <div v-if="Object.keys(goods).length !==0" class="base-info">
        <div class="info-title">{{goods.title}}</div>
        <div class="info-price">
            <span class="n-price">{{goods.newPrice}}</span>
            <span class="o-price">{{goods.oldPrice}}</span>
            <span class="discount">{{goods.discount}}</span>
        </div>
        <div class="info-other">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.services[goods.services.length - 1].name}}</span>
        </div>
        <div class="info-service">
            <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
              <img :src="goods.services[index-1].icon" alt=""> 
                <span>{{goods.services[index-1].name}}</span>
            </span>
        </div>
    </div>
</template>

<script>

export default {
    name: 'DetailBaseInfo',
    
    props:{
        goods:{
            type:Object,
            default(){
                return {}
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
.base-info{
    margin-top:10px ;
    padding: 0 9px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
}
.info-title{
   color: #222;
}
.info-price{
    margin:10px 0 ;
}
.n-price{
    font-size: 24px;
    color: var(--color-active-text);
}
.o-price{
    margin-left: 10px;
    text-decoration: line-through;
    font-size: 13px;
}
.info-price .discount{
    margin-left: 10px;
    padding: 3px 5px;
    position: relative;
    top: -10px;
    background-color:var(--color-active-text);
    font-size: 14px;
    border-radius: 5px;
    color: #fff;
}
.info-other{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom:5px ;
}
.info-service{
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    border-top:1px solid #999;
    line-height: 38px;
    font-size: 14px;
   
}
.info-service-item img{
    width: 14px;
    height: 14px;
    vertical-align: middle;
}

</style>