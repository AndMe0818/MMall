// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    
      // ...
  
      autoprefixer: {}, 
      "postcss-px-to-viewport": {
        // options
        viewportWidth: 375, //视口宽度--对应设计稿的宽度 后续如果视口发生改变会等比例缩放
        unitPrecision: 5, //指定 px单位 转换为 vw单位的小数位数  因为有些情况是无法整除的
        viewportUnit: "vw", //指定 转换成的 单位  为 vw 视口单位  1vw= 1vw等于1/100视口宽度。
        mediaQuery: false, //是否允许在媒体查询中转换   建议false
        selectorBlackList: ["ignore", "tab-bar"], //指定不需要转换的类
        minPixelValue: 1 // 小于等于 1px 的不转换为视口单位
      }
    
  }
}
