import { request } from "./request";

export function getCategory() {
  return request({
    url: "/category"
  });
}
// category页里 的数据
export function getSubcategory(maitKey) {
  return request({
    url: "/subcategory",
    params: {
      maitKey
    }
  });
}
// tab栏底部的详情
export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: "/subcategory/detail",
    params: {
      miniWallkey,
      type
    }
  });
}
