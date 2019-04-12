//app.js
App({
  // 启动时
  onLaunch() {
    this.authToken()
    this._getSystemInfo()
  },

  // 验证是否登录 没登录的强制到登录页面
  authToken() {
    const token = wx.getStorageSync('token')

    if (token && token == '') {
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

  // 公共数据
  globalData: {

  }
})