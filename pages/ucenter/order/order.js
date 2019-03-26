// pages/ucenter/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    OrderType: 0, // 订单类型 0.全部 1.待付款 2.待发货 3.待收货 4.已完成
    OrderNavList: ['全部' ,'待付款', '待发货', '待收货', '已完成'],
    OrderDetailList: [
      // { name: ''}
    ]
  },

  // 订单类型点击事件
  onOrderNavTap(e) {
    const OrderType = e.currentTarget.dataset.type
    this.setData({
      OrderType
    })
  },

  // 订单详情事件
  onOrderListTap(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/ucenter/orderDetail/orderDetail'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const OrderType = options.type || 0
    console.log(OrderType)
    this.setData({
      OrderType
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