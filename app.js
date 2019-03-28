//app.js
App({
  onLaunch: function () {
    const res = wx.getSystemInfoSync() || {}
    this.globalData.StatusBar = res.statusBarHeight
    let custom = wx.getMenuButtonBoundingClientRect()
    this.globalData.Custom = custom
    this.globalData.CustomBar = custom.bottom + custom.top - res.statusBarHeight
  },
  globalData: {

  }
})