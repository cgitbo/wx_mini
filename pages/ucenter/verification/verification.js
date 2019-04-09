// pages/ucenter/verification/verification.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFrontImg: '', // 身份证正面的照片
    tempBackImg: '', // 身份证后面的照片
  },

  // 身份证正面照片选择
  onChooseImgTap(e) {
    const imgUrl = e.currentTarget.dataset.img
    this._chooseImg({ imgUrl })
  },

  // 表单提交
  onCardFormSubmit(e) {
    const params = e.detail
    console.log(params)
  },

  // 选择照片上传
  _chooseImg({ imgUrl }) {
    const that = this
    wx.chooseImage({
      count: 1,
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        that.setData({
          [imgUrl]: tempFilePaths
        })

        // wx.uploadFile({
        //   url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
        //   filePath: tempFilePaths[0],
        //   name: 'file',
        //   formData: {
        //     user: 'test'
        //   },
        //   success(res) {
        //     const data = res.data
        //     // do something
        //   }
        // })
      }
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