//app.js
App({
  // 启动时
  onLaunch() {
    this.authToken()
    this._getSystemInfo()
    this._getUserInfo()
  },

  // 验证是否登录 没登录的强制到登录页面
  authToken() {
    const token = wx.getStorageSync('token')
    if (!token || token == '') {
      wx.redirectTo({
        url: '/pages/common/login/login'
      })
    }
  },

  // 获取系统信息
  _getSystemInfo() {
    const res = wx.getSystemInfoSync() || {}
    this.globalData.StatusBar = res.statusBarHeight
    let custom = wx.getMenuButtonBoundingClientRect()
    this.globalData.Custom = custom || {}
    const CustomBar = custom.bottom + custom.top - res.statusBarHeight
    this.globalData.CustomBar = CustomBar
    this.globalData.IsIPX = CustomBar > 80
  },

  _getUserInfo() {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  // 公共数据
  globalData: {

  }
})