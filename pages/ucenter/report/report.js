// pages/ucenter/report/report.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    IsIPX: app.globalData.IsIPX, // 是否ipx
    ReportAmountList: ['1500', '6000', '18000', '36000'], // 报单金额数组
    AmountIndex: 1, // 选择报单金额数组的下标
    region: ['请选择'], // 默认选择的省市区
    postcode: '311200' // 邮编
  },

  // 选择开户地区
  bindRegionChange(e) {
    // 值 编码 邮编
    const { value, code, postcode } = e.detail
    this.setData({
      region: value,
      postcode
    })
  },

  // 选择报单金额
  bindPickerAmountChange(e) {
    const AmountIndex = e.detail.value
    this.setData({
      AmountIndex
    })
  },

  // 表单提交
  onCardFormSubmit(e) {
    const params = e.detail
    console.log(params)
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