<template>
  <div class="toast" v-show="isShow">
      <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
//   props: {
//     message: {
//       type: String,
//       default: "",
//     },
//     show:{
//         type:Boolean,
//         default:false,
//     }
//   },
  data() {
    return {
        isShow:false,
        message:''
    };
  },
  mounted() {},
  methods: {
      show(message="默认文字",time=2000){
          this.message=message
          this.isShow=true
          clearTimeout(timer)
      const timer =  setTimeout(()=>{
           this.isShow=false
           this.message='' 
        },time)
      }
  },
};
</script>

<style scoped>
.toast{
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
   padding: 10px;
   background-color:rgba(0, 0, 0, .5);
   color:#fff;

}

</style>