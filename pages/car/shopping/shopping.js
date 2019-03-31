// pages/car/shopping/shopping.js
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
        goods_id: 1
      },
      {
        name: '萤石（EZVIZ）视频监控 摄像头 专用Micro SD存储卡TF卡 16GB Class10 海康威视 旗下品牌',
        sku: '16G专用卡',
        price: '69.00',
        num: '2',
        imgSrc: 'http://g.hiphotos.baidu.com/image/h%3D300/sign=4cf62521bdde9c82b965ff8f5c8080d2/d1160924ab18972b0aa9c1d2e8cd7b899e510a13.jpg',
        goods_id: 2
      }
    ],
    IsIPX: app.globalData.IsIPX // 是否ipx
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