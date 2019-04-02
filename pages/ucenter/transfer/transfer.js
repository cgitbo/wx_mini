// pages/ucenter/transfer/transfer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Formstep: 1, // 当前转账步骤 1.输入号码 2.转账
    ReMobile: '', // 要转账的手机号
    showReMobileListBool: false, // 是否显示历史手机号列表
    historyReMobileList: [ // 历史转账手机号数组
      13566778899,
      '13688990099',
      '15988009977'
    ]
  },

  // 下一步
  onNextBtnTap(e) {
    // 通过后手机号存缓存里 并且进行下一步
    this.setData({
      Formstep: 2
    })
  },

  // 收款人手机号 input 事件
  onReMobileInput(e) {
    // 匹配显示历史转账手机号
    const value = e.detail.value
    if (!this.historyList) this.historyList = [...this.data.historyReMobileList]
    const filterHistoryList = this.historyList.filter(item => item.toString().indexOf(value) != -1)
    this.setData({
      historyReMobileList: filterHistoryList
    })
  },

  // 收款人手机号 focus 事件
  onReMobileFocus(e) {
    this._setShowReMobileListBool(true)
  },

  // 收款人手机号 blur 事件
  onReMobileBlur(e) {
    console.log('验证手机号')
    
    this._setShowReMobileListBool(false)
  },

  // 选择历史转账手机号
  onHistoryReMobileTap(e) {
    const reMobileList = this.data.historyReMobileList
    const ReMobile = reMobileList[e.currentTarget.dataset.index]
    this._setShowReMobileListBool(false)
    this.setData({
      ReMobile
    })
  },

  // 设置是否显示历史转账手机号列表
  _setShowReMobileListBool(bool) {
    const listBool = this.data.showReMobileListBool
    if (listBool == bool) return
    this.setData({
      showReMobileListBool: bool
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