<template>
    <div class="back-top" @click="backClick">
        <img src="~assets/img/common/top.png" alt="">
    </div>
</template>

<script>
export default {
    name: 'BackTop',
   
    data() {
        return {
            
        };
    },
    mounted() {
        
    },
    methods: {
        backClick(){
          
        }
    },
};
</script>

<style  scoped>
.back-top{
    position: fixed;
    bottom: 60px;
    right: 12px;
}
.back-top img{
    width: 44px;
    height: 44px;
}
</style>