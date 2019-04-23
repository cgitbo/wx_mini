// pages/ucenter/wallet/wallet.js
const app = getApp()
import { IndexModel } from '../../../models/ucenter/index'
const indexModel = new IndexModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ListNav: [ // 下面的菜单栏
      { title: '我要提现', imgSrc: '/images/ucenter/card.png', url: 'withdraw' },
      { title: '我要转账', imgSrc: '/images/ucenter/money.png', url: 'transfer' },
      { title: '账单明细', imgSrc: '/images/ucenter/bill.png', url: 'billingDetail' }
    ],
    hasBankInfo: false, // 是否有银行卡
    BankInfo: { // 银行卡信息
      bank: '— — — —',
      card_num: ['----', '----', '----', '----', '----'],
      icon: 'no'
    },
    BankIcons: { // 银行图标
      abc: '农业银行',
      boc: '中国银行',
      ccb: '建设银行',
      citic: '中信银行',
      cmb: '招商银行',
      icbc: '工商银行',
      zjrc: '农商银行'
    },
    userInfo: { // 用户信息
      balance: 0,
      freeze_balance: 0
    },
    IsIPX: app.globalData.IsIPX // 是否ipx
  },

  // 银行卡图标 return ['boc'] || undefined
  _getBankIcon(name) {
    const icons = this.data.BankIcons
    return Object.entries(icons).filter(ele => ele.pop() == name).shift()
  },

  // 加工银行卡数据
  _getBankInfo(bankInfo) {
    return {
      bank: bankInfo.bank,
      card_num: bankInfo.card_num.replace(/\s+/g, '').match(/\d{1,4}/g),
      icon: this._getBankIcon(bankInfo.bank) ? this._getBankIcon(bankInfo.bank)[0] : 'no',
    }
  },

  // 银行图片找不到默认图片
  onIconError() {
    this.setData({
      'BankInfo.icon': 'no'
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
    const navUrlConf = {
      withdraw: () => `/pages/ucenter/withdraw/withdraw?bankInfo=${JSON.stringify(this.data.BankInfo)}`,
      transfer: () => `/pages/ucenter/transfer/transfer?type=balance`,
      billingDetail: () => `/pages/ucenter/billingDetail/billingDetail?type=balance`
    }
    const navUrl = navUrlConf[url] && navUrlConf[url]()
    if (!navUrl) return
    wx.navigateTo({
      url: `${navUrl}`
    })
  },

  // 获取data
  getUserInfo() {
    const getMemberInfo = indexModel.getMemberInfo()
    const getUserBankInfo = indexModel.getUserBankInfo()
    return Promise.all([getMemberInfo, getUserBankInfo]).then(res => {
      const [userInfo, bankInfo] = res

      const BankInfo = this._getBankInfo(bankInfo)
      this.setData({
        userInfo,
        BankInfo,
        hasBankInfo: true
      })
      wx.setStorageSync('userInfo', userInfo)
      wx.setStorageSync('bankInfo', bankInfo)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const userInfo = wx.getStorageSync('userInfo')
    const bankInfo = wx.getStorageSync('bankInfo')
    if (!bankInfo || bankInfo == '' || !userInfo || userInfo == '') {
      this.getUserInfo()
      return
    }
    const BankInfo = this._getBankInfo(bankInfo)
    this.setData({
      userInfo,
      BankInfo,
      hasBankInfo: true
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
    wx.showNavigationBarLoading()
    this.getUserInfo().then(() => {
      wx.stopPullDownRefresh()
      wx.hideNavigationBarLoading()
    })
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