// pages/ucenter/userUpgrade/userUpgrade.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    IsIPX: app.globalData.IsIPX, // 是否ipx
    UserList: [ // 要升级的会员信息
      '15861481604 范大爷',
      '15861481604 范大爷',
      '15861481604 范大爷',
      '15861481604 范大爷',
    ],
    UserIndex: 0, // 默认选择的会员信息下标
    UserTime: '2018-05-14 12:34:24' // 报单时间
  },

  // 选择会员
  bindPickerUserSelect(e) {
    const UserIndex = e.detail.value
    this.setData({
      UserIndex
    })
  },

  // 表单提交
  onCardFormSubmit(e) {
    const params = e.detail
    console.log(params)
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