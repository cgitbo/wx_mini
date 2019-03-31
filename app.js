//app.js
App({
  onLaunch: function () {
    const res = wx.getSystemInfoSync() || {}
    this.globalData.StatusBar = res.statusBarHeight
    let custom = wx.getMenuButtonBoundingClientRect()
    this.globalData.Custom = custom
    const CustomBar = custom.bottom + custom.top - res.statusBarHeight
    this.globalData.CustomBar = CustomBar
    this.globalData.IsIPX = CustomBar > 80 
  },
  globalData: {

  }
})