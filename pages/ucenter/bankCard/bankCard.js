// pages/ucenter/bankCard/bankCard.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    IsIPX: app.globalData.IsIPX, // 是否ipx
    BankInfo: { // 当前银行卡信息
      card_num: ''
    },
    BankList: ['请选择', '农业银行', '中国银行', '建设银行', '中信银行', '招商银行', '工商银行', '农商银行', '其他'],
    BankIndex: 0, // 当前银行卡对应的list下标
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

  // 选择银行
  bindPickerBankChange(e) {
    const BankIndex = e.detail.value
    this.setData({
      BankIndex 
    })
  },

  // 表单提交
  onCardFormSubmit(e) {
    const params = e.detail
    console.log(params)
  },

  // 获取数据
  getData() {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const BankInfo = wx.getStorageSync('bankInfo')
    if (!BankInfo || BankInfo == '') {
      this.getData()
      return
    }
    const bankList = this.data.BankList || []
    const BankIndex = bankList.findIndex((ele, index) => ele == BankInfo.bank && index) || 0
    this.setData({
      BankInfo,
      BankIndex
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