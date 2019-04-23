// pages/ucenter/index/index.js
const app = getApp()

import { IndexModel } from '../../../models/ucenter/index'
const indexModel = new IndexModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [ // 导航数据
      { name: '我的钱包', img: '/images/nav/wallet.png', url: 'wallet' },
      { name: '我要报单', img: '/images/nav/report.png', url: 'report' },
      { name: '会员升级', img: '/images/nav/update.png', url: 'userUpgrade' },
      { name: '我的推荐', img: '/images/nav/referrer.png', url: 'referrer' },
      { name: '我的积分', img: '/images/nav/point.png', url: 'point' },
      { name: '报单列表', img: '/images/nav/report-list.png', url: 'reportList' },
      { name: '我的二维码', img: '/images/nav/qr-code.png', url: 'qrCode' },
      { name: '系统设置', img: '/images/nav/setting.png', url: 'setting' },
      // { name: '修改登录密码', img: '/images/nav/lock.png', url: '' },
      // { name: '修改提现密码', img: '/images/nav/card-lock.png', url: '' },
    ],
    userInfo: { // 用户信息
      true_name: '', // 姓名
      mobile: '', // 手机号
      balance: 0, // 余额
      point: 0, // 积分
      preparation: 0, // 报单积分
      freeze_balance: 0, // 股权保证金
      is_reporter: false, // 报单中心
      is_wxshare: false, // 分享二维码
    },
    globalUserInfo: {} // 微信授权登录的信息
  },

  // 退出登录
  onLoginoutTap() {
    indexModel.clearUserToken()
  },

  // 跳转订单页面
  onOrderListTap(e) {
    const type = e.currentTarget.dataset.type || 0
    wx.navigateTo({
      url: `/pages/ucenter/order/order?type=${type}`
    })
  },

  // 导航跳转方法 
  onNavlistTap(e) {
    const url = e.currentTarget.dataset.url
    if (!url) return
    wx.navigateTo({
      url: `/pages/ucenter/${url}/${url}`
    })
  },

  // 获取data
  getData() {
    const globalUserInfo = app.globalData.userInfo || {}
    return indexModel.getMemberInfo().then(userInfo => {
      this.setData({
        userInfo,
        globalUserInfo
      })
      wx.setStorageSync('userInfo', userInfo)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
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
    this.getData().then(() => {
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