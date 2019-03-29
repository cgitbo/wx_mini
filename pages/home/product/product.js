// pages/home/product/product.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    SwiperImgs: [
      'https://bfs.biyao.com/group1/M00/25/71/rBACYVo3dlaAI0j7AADGcjli3j0675.jpg',
      'https://bfs.biyao.com/group1/M00/25/71/rBACYVo3dlaAI0j7AADGcjli3j0675.jpg',
      'https://m.360buyimg.com/mobilecms/s750x366_jfs/t27871/347/1676989741/116594/4b38926b/5bea2f7bNe9efdcfa.jpg!cr_1125x549_0_72!q70.jpg.dpg',
      'https://m.360buyimg.com/mobilecms/s750x366_jfs/t27871/347/1676989741/116594/4b38926b/5bea2f7bNe9efdcfa.jpg!cr_1125x549_0_72!q70.jpg.dpg'
    ],
    SwiperConf: { // swiper 配置
      indicatorDots: false
    },
    PageLength: 0, // 页面数量 控制返回按钮回退
    ShowMask: false, // 是否显示mask
    CountChoose: 1, // 购买数量
    NavbarOpacity: 0, // 默认顶部bar透明
    IsIPX: app.globalData.CustomBar > 80, // 是否ipx
    CustomConf: {
      CustomBar: app.globalData.CustomBar,
      StatusBar: app.globalData.StatusBar
    }
  },

  // 返回按钮 如果pagelength等于1 跳首页
  onBackTap() {
    if (this.data.PageLength >= 2) return
    this.onHomeTap()
  },

  // 首页按钮
  onHomeTap() {
    wx.switchTab({
      url: '/pages/home/index/index'
    })
  },

  // 购物车按钮
  onCarTap() {
    wx.navigateTo({
      url: '/pages/home/car/car'
    })
  },

  // 加入购物车按钮
  onJoinCarTap() {
    this._toggleMaskStatus()
  },

  // 立即购买按钮
  onBuyNowTap() {
    this._toggleMaskStatus()
    // wx.navigateTo({
    //   url: ''
    // })
  },

  // maskTouchmove
  onMaskTouchmove() {
    const ShowMask = !this.data.ShowMask
    if (ShowMask) return
    this.setData({
      ShowMask
    })
  },

  // masktap
  onMaskTap() {
    this._toggleMaskStatus()
  },

  // 阻止滑动事件
  onDetailSkuTouchmove() {
    return
  },

  // 切换mask显示隐藏
  _toggleMaskStatus() {
    const ShowMask = !this.data.ShowMask
    this.setData({
      ShowMask
    })
  },

  // 监听数量变动
  onCountChangeTap(e) {
    const CountChoose = e.detail.val
    this.setData({
      CountChoose
    })
  },

  // 滚动监听
  onPageScroll(e) {
    const scrollTop = e.scrollTop
    let NavbarOpacity = this.data.NavbarOpacity
    if (scrollTop < 300 || NavbarOpacity < 1) {
      NavbarOpacity = scrollTop / 300
      this.setData({
        NavbarOpacity
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id
    console.log('请求数据 id:', id)

    const PageLength = getCurrentPages().length
    this.setData({
      PageLength
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