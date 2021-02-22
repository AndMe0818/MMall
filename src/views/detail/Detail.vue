<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav" :currentIndex="currentIndex"/>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info
        :detail-info="detailInfo"
        :detailImage="detailImage"
        @imageLoad="imageLoad"
      />
      <deatil-param-info ref="params" :params-info="paramsInfo" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <!-- <goods-list ref="recommend" :goods="recommends" /> -->
      <detail-recommend-info
        :goods="recommends"
        ref="recommend"
        @recomendLoad="recomendLoad"
      />
    </scroll>
    <detail-bottom-bar @addToCart="addToCart" />
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    <!-- <toast ref="toast"/> -->
  </div>
</template>

<script>
// 组件 引入
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import Scroll from "components/common/scroll/Scroll";
import DeatilParamInfo from "./childComps/DeatilParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";
import BackTop from "components/content/backTop/BackTop";
import DetailRecommendInfo from "./childComps/DetailRecommendInfo.vue";
// import Toast from "components/common/toast/Toast";
// 网络请求 以及一些数据储存对象
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam,
} from "network/detail";
// 引入封装好的包
import { debounce } from "common/utils";



export default {
  name: "Detail",

  data() {
    return {
      iid: null,
      res: null,
      // 顶部轮播图
      topImages: [],
      // 商品基本信息
      goods: {},
      // 商铺信息
      shop: {},
      // 商品详细信息
      detailInfo: {},
      // 商品图片
      detailImage: [],
      // 商品参数
      paramsInfo: {},
      // 评论信息
      commentInfo: {},
      // 推荐信息
      recommends: [],
      // 主题的topy
      themeTops: [],
      // 顶部导航的状态
      currentIndex: 0,
      // 回顶部按钮
      isShowBackTop:false,
     
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DeatilParamInfo,
    DetailCommentInfo,
    Scroll,
    DetailBottomBar,
    DetailRecommendInfo,
    BackTop,
    // Toast,
  },

 
    created() {
    console.log(this.$route.query);
    console.log(this.$refs.scroll);
    //   获取 传入的id
    // this.iid = this.$route.params.iid;
    this.iid = this.$route.query.iid;
    /**
     * 网络请求
     * */

    // 根据 iid 请求数据
    getDetail(this.iid).then((res) => {
      // console.log(res);
      // 保存相关信息
      const data = res.result;
      // 1获取顶部轮播图的图片
      this.topImages = res.result.itemInfo.topImages;
      // 2 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 3获取店家信息
      this.shop = new Shop(data.shopInfo);
      // 4获取 商品详细信息
      this.detailInfo = data.detailInfo;
      this.detailImage = data.detailInfo.detailImage;
      // 5获取相关参数信息
      this.paramsInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 6获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    // 7获取推荐信息
    getRecommend().then((res) => {
      this.recommends = res.data.list;
      console.log(this.recommends);
    });
  },
  mounted() {
    // this.iid = this.$route.params.iid;
    //  刷新scroll 根据goods
    const refresh = debounce(this.$refs.scroll.refresh);
    // 监听 goodsitem组件图片 发送来的 加载完成事件
    this.$bus.$on("goodsImageLoad", () => {
      refresh();
    });
  },
  methods: {
    // 图片加载 商品详情组件里的图片加载
    imageLoad() {
      this.$refs.scroll.refresh();
    },
    // 推荐部分图片刷新
    recomendLoad() {
      this.$refs.scroll.refresh();
      console.log("推荐图片刷新");
    },
    // 刷新 组件offset
    getOffsetTops() {
      // console.log(this.themeTops);
      this.themeTops = [];
      this.themeTops.push(0);
      this.themeTops.push(this.$refs.params.$el.offsetTop);
      this.themeTops.push(this.$refs.comment.$el.offsetTop);
      this.themeTops.push(this.$refs.recommend.$el.offsetTop);
      this.themeTops.push(Number.MAX_VALUE);
    },
    // tab栏点击切换
    titleClick(index) {
      this.currentIndex = index
      this.$refs.scroll.scrollTo(0, -this.themeTops[index] - 10, 300);
    },
    // 回顶部
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    // 监听滚动
    contentScroll(position) {
      // 获取滚动的y值
      const positionY = -position.y;
      // backtop是否显示
      this.isShowBackTop = positionY>1000
     
      let length = this.themeTops.length;

      for (let i = 0; i < length; i++) {
        let iPos = this.themeTops[i];
        if (positionY >= iPos && positionY <= this.themeTops[i + 1]) {
          if (this.currentIndex !== i) {
            this.currentIndex = i;
          }
          break;
        }
      }
    },
    // 添加购物车
    addToCart(){
      console.log('添加到购物车！！！');
      const product = {}
      product.image  =this.topImages[0];
      product.title  =this.goods.title;
      product.desc  =this.goods.desc;
      product.price  =this.goods.realprice;
      product.iid  =this.iid;
      console.log(product);
      // 将商品添加到购物车
      this.$store.dispatch('addCart',product).then(res=>{
        // 方法一：
      //   this.show=true;
      //   this.message=res;
      //   setTimeout(() => {
      //     this.show=false
      //     this.message = ''
      //   }, 1500);
      // 方法2：利用 ref 来调用其中方法
      // this.$refs.toast.show(res)
      // 方法3：利用封装的插件；来调用
        this.$toast.show(res)
      })
    }
  },
  updated() {
    console.log("update被执行");
    this.getOffsetTops();
  },
};
</script>

<style  scoped>
#detail {
  position: relative;
  background-color: #fff;
  /* z-index: 99999; */
  height: 100vh;
}
.content {
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>