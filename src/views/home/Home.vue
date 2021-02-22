<template>
  <div id="home">
    <!-- 顶部导航组件 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精品']"
      :class="{ fixed: isTabFixed }"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
    ></tab-control>
    <!-- scroll封装组件 控制屏幕滚动 -->
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <!-- home 轮播图组件 -->
      <home-swiper
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <!-- 每日推荐 -->
      <recommend-view :recommends="recommends"></recommend-view>
      <!-- 本周流行组件 -->
      <feature-view></feature-view>
      <!--  home 里的商品详情组件 -->
      <tab-control
        :titles="['流行', '新款', '精品']"
        :class="{ fixed: isTabFixed }"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
// 公共组件
import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";
// 子组件
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
// 外部路由方法
import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils";

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    RecommendView,
    FeatureView,
    GoodsList,
    Scroll,
    BackTop,
  },

  data() {
    return {
      // 轮播图数据
      banners: [],
      // 推荐数据
      recommends: [],
      // 商品对象格式
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      // 默认详情栏
      currentType: "pop",
      // 回到顶部显示
      isShowBackTop: false,
      // tabbar 位偏移
      tabOffsetTop: 0,
      // tabbar是否吸顶
      isTabFixed: false,
    };
  },
  destroyed() {
    console.log("我被销毁");
  },
  created() {
    // 请求数据
    this.getHomeMultidata();
    // 2.请求商品数据 tabcontrol 处的请求
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 使用  节流函数
    const refresh = debounce(this.$refs.scroll.refresh);
    // 监听 goodsitem组件图片 发送来的 加载完成事件
    this.$bus.$on("itemImageLoad", () => {
      // console.log('---------');
      // this.$refs.scroll && this.$refs.scroll.refresh();
      refresh();
    });
  },
  methods: {
    /**
     *事件监听方法:
     *
     **/

    //  商品详情栏切换
    tabClick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // 回到顶部
    backClick() {
      // console.log('回到顶部');
      this.$refs.scroll.scrollTo(0, 0);
      // console.log(this.$refs.scroll. message);
      // console.log( this.$refs.scroll.scroll);
    },
    //监听滚动
    contentScroll(position) {
      // console.log(position);
      // 1.判断回顶部是否显示
      this.isShowBackTop = -position.y > 1000;
      // 2.决定tabcontrol 是否吸顶
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    // 上拉 加载更多
    loadMore() {
      console.log("监听到滚动到底部");
      this.getHomeGoods(this.currentType);
    },
    // 监听 swiper 加载
    swiperImageLoad() {
      // 获取 tabControl 的 offsetTop
      // 所有的组件都有一个属性 $el 获取组件的元素
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    /**
     * 网络请求方法：
     *
     * **/
    // home 首页
    getHomeMultidata() {
      // 调用网络请求函数
      getHomeMultidata().then((res) => {
        console.log(res);
        this.banners = res.data.banner.list;
        // console.log(this.banners);
        this.recommends = res.data.recommend.list;
        // console.log(this.recommends);
      });
    },
    // 组件封装网络请求
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      // 调用引入的网络请求
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // 完成上拉  刷新次数
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style  scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  margin-bottom: 10px;
  position: relative;
}
.home-nav {
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0; */
  background-color: #dd3a24;
  color: #fff;
  z-index: 999;
}
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
  z-index: 99;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;

  /* height: calc(100% - 93px); */

  overflow: hidden;
}
</style>