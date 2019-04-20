import { Request } from '../../utils/request.js'
class IndexModel extends Request {
  // 获取用户信息
  getMemberInfo() {
    return this.getData({
      url: `getMemberInfo`
    })
  }

  // 获取银行卡信息
  getUserBankInfo() {
    return this.getData({
      url: `getUserBankInfo`
    })
  }
}

export { IndexModel }