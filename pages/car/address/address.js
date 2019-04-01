// pages/car/address/address.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    AddressList: [ // 地址数组
      {
        name: '周星星',
        mobile: '18699995555',
        address: '浙江省杭州市西湖区古墩路与丰谭路245号政新花园小区8 幢2单元502'
      },
      {
        name: '周星星',
        mobile: '18699995555',
        address: '浙江省杭州市西湖区古墩路与丰谭路245号政新花园小区8 幢2单元502'
      },
      {
        name: '周星星',
        mobile: '18699995555',
        address: '浙江省杭州市西湖区古墩路与丰谭路245号政新花园小区8 幢2单元502'
      },
      {
        name: '周星星',
        mobile: '18699995555',
        address: '浙江省杭州市西湖区古墩路与丰谭路245号政新花园小区8 幢2单元502'
      },
      {
        name: '周星星',
        mobile: '18699995555',
        address: '浙江省杭州市西湖区古墩路与丰谭路245号政新花园小区8 幢2单元502'
      },
      {
        name: '周星星',
        mobile: '18699995555',
        address: '浙江省杭州市西湖区古墩路与丰谭路245号政新花园小区8 幢2单元502'
      },
      {
        name: '周星星',
        mobile: '18699995555',
        address: '浙江省杭州市西湖区古墩路与丰谭路245号政新花园小区8 幢2单元502'
      },
      {
        name: '周星星',
        mobile: '18699995555',
        address: '浙江省杭州市西湖区古墩路与丰谭路245号政新花园小区8 幢2单元502'
      },
      {
        name: '周星星',
        mobile: '18699995555',
        address: '浙江省杭州市西湖区古墩路与丰谭路245号政新花园小区8 幢2单元502'
      },
      {
        name: '周星星',
        mobile: '18699995555',
        address: '浙江省杭州市西湖区古墩路与丰谭路245号政新花园小区8 幢2单元502'
      },
      {
        name: '周星星',
        mobile: '18699995555',
        address: '浙江省杭州市西湖区古墩路与丰谭路245号政新花园小区8 幢2单元502'
      }
    ],
    DefaultAddressIndex: 1, // 默认地址的下标
    AddressEditBool: false, // 是否编辑地址状态
    EditAddressIndex: -1, // 当前编辑的地址下标
    IsIPX: app.globalData.IsIPX, // 是否ipx
  },

  // 选择地址
  onSelectAddressTap(e) {
    console.log(11,e)
  },

  // 默认地址
  onDefaultAddressTap(e) {
    let index = e.currentTarget.dataset.index
    const DefaultAddressIndex = this.data.DefaultAddressIndex
    if (index == DefaultAddressIndex) index = -1
    this.setData({
      DefaultAddressIndex: index
    })
  },

  // 编辑地址按钮
  onEditAddressTap(e) {
    const EditAddressIndex = e.currentTarget.dataset.index
    this.setData({
      AddressEditBool: true,
      EditAddressIndex
    })
  },

  // 删除地址
  onDelAddressTap(e) {
    const index = e.currentTarget.dataset.index
    wx.showModal({
      title: '删除地址',
      content: '确认要删除该地址吗？',
      confirmColor: '#45ae8c',
      success(res) {
        if (res.confirm) {
          console.log('del addr index:', index)
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 800,
            mask: true
          })
        }
      }
    })
  },

  // 保存地址按钮
  onEditAddressSubmitTap(e) {
    console.log(e)
    this.setData({
      AddressEditBool: false
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