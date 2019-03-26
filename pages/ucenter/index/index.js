// pages/ucenter/index/index.js
import { IndexModel } from '../../../models/ucenter/index.js'
const indexModel = new IndexModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [
      { name: '钱包', img: '/images/nav/wallet.png' },
      { name: '我要报单', img: '/images/nav/report.png' },
      { name: '会员升级', img: '/images/nav/update.png' },
      { name: '我的推荐', img: '/images/nav/referrer.png' },
      { name: '我的积分', img: '/images/nav/point.png' },
      { name: '报单列表', img: '/images/nav/report-list.png' },
      { name: '我的二维码', img: '/images/nav/qr-code.png' },
      { name: '修改登录密码', img: '/images/nav/lock.png' },
      { name: '修改提现密码', img: '/images/nav/card-lock.png' },
    ]
  },

  // 退出登录
  onLoginoutTap() {
    console.log('退出')
  },

  // 跳转订单页面
  onOrderListTap(e) {
    const type = e.currentTarget.dataset.type || 0
    wx.navigateTo({
      url: `/pages/ucenter/order/order?type=${type}`
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