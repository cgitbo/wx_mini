// pages/ucenter/point/point.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ListNav: [ // 下面的菜单栏
      { title: '积分转账', imgSrc: '/images/ucenter/point.png', url: 'transfer' },
      { title: '积分明细', imgSrc: '/images/ucenter/point-trans.png', url: 'billingDetail' }
    ],
  },

  // 页面跳转
  onListnavTap(e) {
    const url = e.currentTarget.dataset.url
    const navUrlConf = {
      transfer: () => `/pages/ucenter/transfer/transfer?type=point`,
      billingDetail: () => `/pages/ucenter/billingDetail/billingDetail?type=point`
    }
    const navUrl = navUrlConf[url] && navUrlConf[url]()
    if (!navUrl) return
    wx.navigateTo({
      url: `${navUrl}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})