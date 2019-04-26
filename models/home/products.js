import { Request } from '../../utils/request.js'
class ProductsModel extends Request {
  // 获取banner信息
  getBannerConf() {
    return this.getData({
      url: 'getBannerConf'
    })
  }

  // 获取一级分类信息
  getFirstCategoryList() {
    return this.getData({
      url: 'getCategoryListTopType'
    })
  }

  // 获取所有二级分类信息
  getSecondCategoryList() {
    return this.getData({
      url: 'getCategoryByParentidType'
    })
  }
}

export { ProductsModel }