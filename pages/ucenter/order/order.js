// pages/ucenter/order/order.js
const app = getApp()
import { OrderModel } from '../../../models/ucenter/order'
import { throttle } from '../../../utils/util'
const orderModel = new OrderModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    OrderType: 0, // 订单类型 0.全部 1.待付款 2.待发货 3.待收货 4.已完成
    OrderNavList: ['全部', '待付款', '待发货', '待收货', '已完成'],
    OrderList: [ // 订单列表
      // { name: ''}
    ],
    ShowLoading: true, // 是否真正请求数据
    PageIndex: 1, // 当前请求的页数
    LoadMore: true, // 是否还可以加载更多
    IsIPX: app.globalData.IsIPX // 是否ipx
  },

  // 订单类型点击事件
  onOrderNavTap(e) {
    const OrderType = e.currentTarget.dataset.type
    const orderType = this.data.OrderType
    // 类型一样 不进行操作
    if (OrderType == orderType) return
    this._resetData()
    this._showLoading()
    this.setData({ OrderType })
    // 防抖处理
    throttle(this.getData, 500, true)({ status: OrderType })
  },

  // 订单详情事件
  onOrderListTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/ucenter/orderDetail/orderDetail?id=${id}`
    })
  },

  // 获取数据
  getData({ status, page = 1, limit = 20, isCancat = false }) {
    let lastArr = this.data.OrderList || []
    this._toggleLoadMore(true)
    return orderModel.getOrderList({ status, page, limit }).then(OrderList => {
      const resLen = OrderList.length
      this._toggleLoadMore(resLen)
      this._hideLoading()
      if (!resLen && !isCancat) {
        return this._resetData()
      }
      if (!resLen) return false
      if (isCancat) OrderList = lastArr.concat(OrderList)
      this.setData({ OrderList })
    })
  },

  _resetData() {
    this.setData({
      OrderList: [],
      PageIndex: 1
    })
  },

  // 切换loadmore是否显示
  _toggleLoadMore(val) {
    this.setData({
      LoadMore: Boolean(val)
    })
  },

  // 隐藏loading
  _hideLoading() {
    wx.hideNavigationBarLoading()
    this.setData({
      ShowLoading: false
    })
  },

  // 显示loading
  _showLoading() {
    wx.showNavigationBarLoading()
    this.setData({
      ShowLoading: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const OrderType = options.type || 0
    this.setData({
      OrderType
    })
    this.getData({ status: OrderType })
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
    this._showLoading()
    const OrderType = this.data.OrderType
    this.getData({ status: OrderType }).then(() => {
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let { OrderType, PageIndex, LoadMore, OrderList } = this.data
    if (!LoadMore) return
    // 每次请求的数据为20条 当前数据不足20条说明已经请求完毕了
    if (OrderList.length < 20) return this._toggleLoadMore(false)
    this._showLoading()
    PageIndex++
    this.getData({ status: OrderType, page: PageIndex, isCancat: true }).then(() => {
      this.setData({ PageIndex })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})