// pages/common/findPassword/findPassword.js
const app = getApp()

import { FindPassModel } from '../../../models/common/findPass'
const findPassModel = new FindPassModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    IsIPX: app.globalData.IsIPX, // 是否ipx
    CaptchaText: '获取验证码', // 验证码文字
    CaptchaDisabled: false, // 默认可以点击
    ValidateBool: false, // 是否验证通过手机号
    NameVal: '', // 姓名
    MobileVal: '' // 手机号
  },

  // 输入姓名触发
  onNameBlur(e) {
    const NameVal = e.detail.value
    this.setData({ NameVal })
  },

  // 输入手机号触发
  onMobileInput(e) {
    const MobileVal = e.detail.value
    const NameVal = this.data.NameVal
    if (!NameVal || MobileVal.length != 11) return
    this.setData({ MobileVal })
    this.getCaptcha()
  },

  // 获取验证码按钮
  onCaptchaTap(e) {
    console.log(e)
    this._getCaptchaTime()
    this.getCaptcha()
  },

  // 获取验证码
  getCaptcha() {
    const { NameVal, MobileVal } = this.data
    findPassModel.getCaptcha({ NameVal, MobileVal }).then(res => {
      console.log(res)
    })
  },

  // 验证码倒计时
  _getCaptchaTime() {
    let time = 60
    this.timer && clearInterval(this.timer)
    this.timer = setInterval(() => {
      time--
      if (time == 0) {
        this.setData({
          CaptchaText: '获取验证码',
          CaptchaDisabled: false
        })
        clearInterval(this.timer)
        return
      }
      this.setData({
        CaptchaText: `重新获取(${time})`,
        CaptchaDisabled: true
      })
    }, 100)
  },

  // 用户信息验证
  onAuthUserFormSubmit(e) {
    console.log(e.detail.value)
    // 验证通过后 设置密码
    this.setData({
      ValidateBool: true
    })
  },

  // 修改密码
  onPasswordFormSubmit(e) {
    console.log(e.detail.value)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    findPassModel.initValidate()
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