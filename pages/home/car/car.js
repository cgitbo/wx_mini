// pages/home/car/car.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    GoodsList: [
      {
        name: '萤石DP1（棕色） 智能猫眼 摄像头 电子猫眼 可视门铃 防盗门监控 海康威视旗下品牌',
        sku: '猫眼，棕色',
        price: '769.00',
        num: '8',
        imgSrc: 'http://a.hiphotos.baidu.com/image/h%3D300/sign=c724ff91482309f7f86fab12420f0c39/30adcbef76094b3624c1f1e8adcc7cd98d109d60.jpg',
        goods_id: 1,
        id: 11,
        checked: false
      },
      {
        name: '萤石（EZVIZ）视频监控 摄像头 专用Micro SD存储卡TF卡 16GB Class10 海康威视 旗下品牌',
        sku: '16G专用卡',
        price: '69.00',
        num: '2',
        imgSrc: 'http://g.hiphotos.baidu.com/image/h%3D300/sign=4cf62521bdde9c82b965ff8f5c8080d2/d1160924ab18972b0aa9c1d2e8cd7b899e510a13.jpg',
        goods_id: 2,
        id: 13,
        checked: true
      },
      {
        name: '桓仁北纬41度冰酒花冠级20 0ml 果香浓郁 口感圆润...',
        sku: '冰酒250ml',
        price: '670',
        num: '5',
        imgSrc: 'http://g.hiphotos.baidu.com/image/h%3D300/sign=4cf62521bdde9c82b965ff8f5c8080d2/d1160924ab18972b0aa9c1d2e8cd7b899e510a13.jpg',
        goods_id: 8,
        id: 131,
        checked: true
      }
    ],
    IsIPX: app.globalData.IsIPX, // 是否ipx
    touchStartPosition: { X: 0, Y: 0 }, // 当前触摸位置
    touchMoveActive: false, // 是否显示滑动删除
    ActiveIndex: -1, // 当前滑动删除的是哪个元素
    checkedAll: false // 是否全选
  },

  // 单项选择器事件
  checkboxChange(e) {
    const index = e.detail.value.toString()
    console.log(e.detail.value)

  },

  // 商品跳转
  onGoodsTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/home/product/product?id=${id}`
    })
  },

  // 滑动删除开始
  onGoodsTouchstart(e) {
    this.setData({
      touchStartPosition: {
        X: e.changedTouches[0].pageX,
        Y: e.changedTouches[0].pageY
      }
    })
  },

  // 滑动删除结束
  onGoodsTouchend(e) {
    const touchEndPosition = {
      X: e.changedTouches[0].pageX,
      Y: e.changedTouches[0].pageY
    },
      offSetStartToEndX = touchEndPosition.X - this.data.touchStartPosition.X,  // 获取左右滑动的距离，正代表右滑，负代表左滑
      offSetStartToEndY = touchEndPosition.Y - this.data.touchStartPosition.Y,  // 上下滑动距离
      ActiveIndex = e.currentTarget.dataset.index

    // 取消滑动状态
    if (offSetStartToEndX > 60 || Math.abs(offSetStartToEndY) > 10) {
      this._cacelTouchActive()
    }

    // 滑动距离小于60px则不生效
    if (Math.abs(offSetStartToEndX) < 60) return

    // 设置滑动状态
    if (offSetStartToEndX < -60) {
      this._setTouchActive(ActiveIndex)
    }
  },

  // 设置滑动状态
  _setTouchActive(ActiveIndex) {
    this.setData({
      touchMoveActive: true,
      ActiveIndex
    })
  },

  // 取消滑动状态
  _cacelTouchActive() {
    // 如果本身不是滑动状态，则不需要我们再设置
    if (!this.data.touchMoveActive) return
    this.setData({
      touchMoveActive: false,
      ActiveIndex: -1
    })
  },

  // 全选按钮
  onCheckAllTap() {
    console.log(11)
    const checkedAll = !this.data.checkedAll
    this.setData({
      checkedAll
    })
  },

  // 去结算按钮
  onBuynowTap() {
    console.log('buy-now')
    wx.navigateTo({
      url: '/pages/car/shopping/shopping'
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