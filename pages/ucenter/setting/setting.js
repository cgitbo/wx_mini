// pages/ucenter/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    UserSettingList: [ // 用户设置列表
      { title: '实名认证', des: '未认证', type: 'author', url: 'verification' },
      { title: '手机号码', des: '18858870435' },
      { title: '修改登录密码' },
      { title: '修改提现密码' },
      { title: '收货地址管理' },
    ],
    UserAuthor: false // 是否实名
  },

  // 点击事件
  onSettingListTap(e) {
    const url = e.currentTarget.dataset.url
    console.log(url)
    if(!url) return
    wx.navigateTo({
      url: `/pages/ucenter/${url}/${url}`
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