//app.js
App({
  onLaunch: function () {
    const res = wx.getSystemInfoSync() || {}
    const systemInfo = {}
    systemInfo.StatusBar = res.statusBarHeight
    let custom = wx.getMenuButtonBoundingClientRect()
    systemInfo.Custom = custom
    systemInfo.CustomBar = custom.bottom + custom.top - res.statusBarHeight
    wx.setStorageSync('systemInfo', systemInfo)
  }
})