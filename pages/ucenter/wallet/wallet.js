// pages/ucenter/wallet/wallet.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ListNav: [ // 下面的菜单栏
      { title: '我要提现', imgSrc: '/images/ucenter/card.png', url: 'withdraw' },
      { title: '我要转账', imgSrc: '/images/ucenter/money.png', url: '' },
      { title: '账单明细', imgSrc: '/images/ucenter/bill.png', url: '' }
    ],
    hasBankInfo: false, // 是否有银行卡
    BankInfo: { // 银行卡信息
      name: '中信银行',
      number: 8905,
      icon: 'no-bank'
    },
    BankIcon: 'no-bank', // 银行卡图标
    BankIcons: { // 银行图标
      abc: '农业银行',
      boc: '中国银行',
      ccb: '建设银行',
      citic: '中信银行',
      cmb: '招商银行',
      icbc: '工商银行',
      zjrc: '农商银行'
    },
    IsIPX: app.globalData.IsIPX // 是否ipx
  },

  // 银行卡图标 return ['boc'] || undefined
  _getBankIcon(name) {
    const icons = this.data.BankIcons
    return Object.entries(icons).filter(ele => ele.pop() == name).shift()
  },

  // 银行图片找不到默认图片
  onIconError() {
    this.setData({
      'BankInfo.icon': 'no-bank'
    })
  },

  // 绑定银行卡
  onChangeCardTap() {
    wx.navigateTo({
      url: '/pages/ucenter/bankCard/bankCard'
    })
  },

  // 页面跳转
  onListnavTap(e) {
    const url = e.currentTarget.dataset.url
    const bankInfo = JSON.stringify(this.data.BankInfo)
    wx.navigateTo({
      url: `/pages/ucenter/${url}/${url}?bankInfo=${bankInfo}`
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
    console.log(this._getBankIcon('中国银行'))
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