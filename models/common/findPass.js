import { Request } from '../../utils/request'
import WxValidate from '../../utils/WxValidate'

class FindPassModel extends Request {
  // 获取验证码
  getCaptcha(data) {
    return this.getData({
      url: 'send_message_mobile',
      data
    })
  }

  // 设置token缓存
  setUserPassword(password) {
    if (!password || password == '') return
    wx.switchTab({
      url: '/pages/ucenter/index/index'
    })
  }

  // 验证表单
  initValidate() {
    // 配置规则
    const rules = {
      loginInfo: {
        required: true,
        tel: true,
      },
      password: {
        required: true,
        minlength: 6
      }
    }

    // 验证字段的提示信息，若不传则调用默认的信息
    const messages = {
      loginInfo: {
        required: '请输入11位手机号码',
        tel: '请输入正确的手机号码',
      },

      password: {
        required: '请输入密码',
        minlength: '密码不能低于6位'
      }
    }
    // 创建实例对象
    this.WxValidate = new WxValidate(rules, messages)
  }
}

export { FindPassModel }