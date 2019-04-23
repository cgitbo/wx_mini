// pages/ucenter/withdraw/withdraw.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    BankInfo: {
      icon: 'no'
    },
    IsIPX: app.globalData.IsIPX // 是否ipx
  },

  // 输入金额触发
  onAmountInput(e) {
    const value = e.detail.value
    if (value != '') return +value
  },

  // 表单提交
  onAmountFormSubmit(e) {
    console.log(e.detail)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const BankInfo = JSON.parse(options.bankInfo)
    BankInfo.lastNum = BankInfo.card_num.slice(-1)[0]
    this.setData({
      BankInfo
    })
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