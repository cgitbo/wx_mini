import { Request } from '../../utils/request.js'
class IndexModel extends Request {
  // 获取banner信息
  getBannerConf() {
    return this.getData({
      url: 'getBannerConf'
    })
  }

  // 获取分类信息
  getCategoryListTopType() {
    return this.getData({
      url: 'getCategoryListTopType'
    })
  }
}

export { IndexModel }