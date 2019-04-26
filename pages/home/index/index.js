// pages/home/index/index.js
import { IndexModel } from '../../../models/home/index'
const indexModel = new IndexModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    SwiperImgs: [ // 轮播
      ''
    ],
    FirstNavList: [], // 所有一级分类
    AllSecondNavList: [], // 所有二级分类
    SecondNavList: [ // 当前要显示的二级分类
      { name: '床上用品', img: 'https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png' },
      { name: '床上用品', img: 'https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png' },
      { name: '床上用品', img: 'https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png' },
      { name: '床上用品', img: 'https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png' },
      { name: '床上用品', img: 'https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png' },
      { name: '床上用品', img: 'https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png' },
      { name: '床上用品', img: 'https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png' },
      { name: '床上用品', img: 'https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png' },
      { name: '床上用品', img: 'https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png' },
      { name: '床上用品', img: 'https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png' },
      { name: '床上用品', img: 'https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png' },
      { name: '床上用品', img: 'https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png' },
      { name: '床上用品', img: 'https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png' },
    ],
    CurIndex: 0, // 当前一级分类的index
    FirstNavdIndex: 0, // 当前要显示的一级分类的id
    VerticalNavTop: 0, // 当前滚动距离
    ShowLoading: false // 显示loading
  },

  // 一级分类点击事件
  onNavTap(e) {
    const { index: CurIndex, id: FirstNavdIndex } = e.currentTarget.dataset
    this.setData({
      CurIndex,
      FirstNavdIndex,
      VerticalNavTop: (CurIndex - 1) * 100
    })
    this.getSecondList()
  },

  // 二级分类点击事件
  onNavListTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/home/products/products?id=${id}`
    })
  },

  // 根据一级分类id取二级分类数据
  getSecondList() {
    const FirstNavdIndex = this.data.FirstNavdIndex || 0
    const SecondNavList = this.data.AllSecondNavList[FirstNavdIndex]
    this.setData({
      SecondNavList
    })
    wx.setStorageSync('secondNavList', SecondNavList)
  },

  // 图片加载完成 隐藏loading
  onSwiperTap(e) {
    console.log(e, 76)
  },

  // 显示 loading
  _showLoading() {
    wx.showNavigationBarLoading()
    this.setData({
      ShowLoading: true
    })
  },

  // 隐藏 loading
  _hideLoading() {
    wx.hideNavigationBarLoading()
    this.setData({
      ShowLoading: false
    })
  },

  // 请求数据
  getData() {
    this._showLoading()

    const getBannerConf = indexModel.getBannerConf()
    const getFirstCategoryList = indexModel.getFirstCategoryList()
    const getSecondCategoryList = indexModel.getSecondCategoryList()

    return Promise.all([getBannerConf, getFirstCategoryList, getSecondCategoryList]).then(res => {
      
      const [bannerList, FirstNavList, AllSecondNavList] = res
      const SwiperImgs = bannerList.map(ele => `http://wzbj.ehanone.com/${ele.img}`)
      const FirstNavdIndex = this.data.FirstNavdIndex || FirstNavList[0].id || 0

      this.setData({
        SwiperImgs,
        FirstNavList,
        FirstNavdIndex,
        AllSecondNavList
      })

      this.getSecondList()
      this._hideLoading()
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
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
    this.getData().then(() => {
      wx.stopPullDownRefresh()
    })
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