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
    },
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
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

  // 初始化用户信息
  initUserInfo() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  // 获取用户信息
  getUserInfo (e) {
    if (!e.detail.rawData) {
      wx.showToast({
        title: '请先允许授权',
        icon: 'none'
      })
      return
    }
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    loginModel.initValidate()
    this.initUserInfo()
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