// pages/home/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    SwiperImgs: [
      // 'https://bfs.biyao.com/group1/M00/25/71/rBACYVo3dlaAI0j7AADGcjli3j0675.jpg',
      // 'https://bfs.biyao.com/group1/M00/25/71/rBACYVo3dlaAI0j7AADGcjli3j0675.jpg',
      'https://m.360buyimg.com/mobilecms/s750x366_jfs/t27871/347/1676989741/116594/4b38926b/5bea2f7bNe9efdcfa.jpg!cr_1125x549_0_72!q70.jpg.dpg'],
    SwiperConf: { // swiper 配置
      indicatorDots: false
    },
    CustomConf: {}, // 系统头部信息
    PageLength: 0 // 页面数量
  },

  // 购物车按钮
  onCarTap() {
    wx.navigateTo({
      url: '/pages/home/car/car'
    })
  },

  // 加入购物车按钮
  onJoinCarTap() {
    
  },

  // 立即购买按钮
  onBuyNowTap() {
    // wx.navigateTo({
    //   url: ''
    // })
  },

  // 滚动监听
  // onPageScroll(e) {
  //   console.log(e)
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    const CustomConf = wx.getStorageSync('systemInfo') || {}
    this.setData({
      CustomConf
    })

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