// pages/common/login/login.js
const app = getApp()

import { LoginModel } from '../../../models/common/login'
const loginModel = new LoginModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    CustomConf: {
      CustomBar: app.globalData.CustomBar,
      StatusBar: app.globalData.StatusBar
    }
  },

  // 表单提交
  onLoginFormSubmit(e) {
    const params = e.detail.value
    if (!loginModel.WxValidate.checkForm(params)) {
      const error = loginModel.WxValidate.errorList[0]
      loginModel.WxValidate.showModal(error)
      return false
    }

    //验证通过以后
    loginModel.getUserToken(params).then(res => {
      const userToken = res.userToken
      if (userToken && userToken != '') {
        loginModel.setUserToken(userToken)
      }
    })
  },

  // 忘记密码
  onForgetPasswordTap(e) {
    wx.navigateTo({
      url: '/pages/common/findPassword/findPassword'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    loginModel.initValidate()
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