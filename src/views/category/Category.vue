<template>
  <div class="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <!-- 左边菜单栏 -->
      <tab-menu :categories="categories" @selectitem="selectitem" />
      <scroll class="tab-content" ref="scorll">
        <tab-content-category :subcategories="categContent" />
        <tab-control :titles="['综合', '新品', '销量']" @tabClick="tabClick" class="tab-control"/>
        <tab-content-detail  :categorydetail='Detail' class="detail"/>
      </scroll>
    </div>
  </div>
</template>

<script>
/*better-scroll 框架是一款优化滑动的框架，
使用方法就是在父盒子里 给个类名 wrapper
通过 new BScroll(document.querySelector('.wrapper')){} 来使用
*/

import NavBar from "components/common/navbar/NavBar.vue";
import TabMenu from "./childComps/TabMenu.vue";
import Scroll from "components/common/scroll/Scroll.vue";

import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "network/category";
import TabContentCategory from "./childComps/TabContentCategory.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import TabContentDetail from "./childComps/TabContentDetail.vue";

export default {
  components: {
    NavBar,
    TabMenu,
    Scroll,
    TabContentCategory,
    TabControl,
    TabContentDetail,
  },

  name: "Category",
  data() {
    return {
      // 标签栏title
      categories: [],
      // 总数据，item为每个标签下的数组对象
      categoryData: {},
      categContent: {},
      currentIndex: -1,
      currentType: "pop",
      Detail: [],
    };
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {};
      // return this.categoryData[this.currentIndex].subcategories;
      return this.categoryData[this.currentIndex].subcategories;
    },
    showDetail: function () {
      if (this.currentIndex !== -1) {
        return this.categoryData[this.currentIndex].categoryDetail[this.currentType];
      }
    },
  },
  // 组件创建完后使用
  created() {
    this.GetCategory();
  },
  //组件挂载后使用
  mounted() {},
  updated () {
    console.log('update执行');
    this.$refs.scorll.refresh()
  },
  methods: {
    // 获取网络请求
    GetCategory() {
      getCategory().then((res) => {
        this.categories = res.data.category.list;
        // 根据 左侧标题 长度遍历并且初始化 categoryData 数据
        for (let i = 0; i < this.categories.length; i++) {
          // 初始化数据
          // this.categoryDetail[i] = {
          //   pop: [],
          //   new: [],
          //   sell: [],
          // };
            this.categoryData[i] = {
              // content里的详情
              subcategories: {},
              // tab栏下的详情
              categoryDetail: {
                pop: [],
                new: [],
                sell: [],
              },
            };
        }
        this.getSubcategories(0);
      });
    },

    // 获取  content 里的数据
    getSubcategories(index) {
      this.currentIndex = index;
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then((res) => {
        this.categoryData[index].subcategories = res.data;
        this.categContent = res.data;
        // console.log('------------');
        // console.log(this.categoryData[index].subcategories);
        console.log(res.data);
        this.getCategoryDetail("pop");
        this.getCategoryDetail("new");
        this.getCategoryDetail("sell");
      });
    },
    //  获取tab下的 详情数据
    getCategoryDetail(type) {
      // 获取请求参数
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then((res) => {
        // 3.将获取的数据保存下来
        this.categoryData[this.currentIndex].categoryDetail[type] = res;
        // this.categoryData = { ...this.categoryData };
        this.Detail = this.categoryData[this.currentIndex].categoryDetail[type];
      });
    },
    selectitem(index) {
      this.getSubcategories(index);
    },
    // 切换
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          console.log(this.currentType);
          break;
        case 1:
          this.currentType = "new";
          console.log(this.currentType);
          break;
        case 2:
          this.currentType = "sell";
          console.log(this.currentType);
          break;
      }
      this.getCategoryDetail(this.currentType)
    },
  },
};
</script>

<style  scoped>
.category {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-active-text);
  color: #fff;
  font-size: 16px;
  font-weight: 700;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;

  /* width: 100%; */
  display: flex;
}
.tab-content {
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
  flex: 1;
}
.tab-control{
   border-top: 5px solid #f6f6f6;
}
.detail{
  border-top: 5px solid #f6f6f6;
}
</style>