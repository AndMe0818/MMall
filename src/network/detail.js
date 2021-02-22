import {request} from './request'
// 网络请求封装
export function getDetail(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}
export function getRecommend(){
    return request({
        url:'/recommend',
    })
}
// 封装数据
// 商品info信息
export class Goods{
    constructor(itemInfo,columns,services){
        this.title=itemInfo.title
        this.desc=itemInfo.title
        this.newPrice=itemInfo.price
        this.oldPrice=itemInfo.oldPrice
        this.discount=itemInfo.discountDesc
        this.columns = columns
        this.services=services
        this.realprice=itemInfo.lowNowPrice
    }
}
// 商家信息
export class Shop{
    constructor(shopInfo){
        this.logo=shopInfo.shopLogo
        this.name=shopInfo.name
        this.fans=shopInfo.cFane
        this.sells=shopInfo.cSells
        this.score=shopInfo.score
        this.goodsCount=shopInfo.cGoods
    }
}
// 商品参数
export class GoodsParam{
    constructor(info,rule){
        // images 可能有些商品有 有些商品没有
        this.image = info.images ? info.images[0] : '';
        this.infos = info.set;
        this.sizes = rule.tables
    }
}