// pages/home/index/index.js
import { IndexModel } from '../../../models/home/index'
const indexModel = new IndexModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    SwiperImgs: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://m.360buyimg.com/mobilecms/s750x366_jfs/t27871/347/1676989741/116594/4b38926b/5bea2f7bNe9efdcfa.jpg!cr_1125x549_0_72!q70.jpg.dpg'
    ],
    FirstNavList: [],
    SecondNavList: [
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
    CurIndex: 0,
    VerticalNavTop: 0,
    ShowLoading: false
  },

  // 一级分类点击事件
  onNavTap(e) {
    const { index: CurIndex, id } = e.currentTarget.dataset
    this.setData({
      CurIndex,
      VerticalNavTop: (CurIndex - 1) * 100
    })
  },

  // 二级分类点击事件
  onNavListTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/home/products/products?id=${id}`
    })
  },

  // 图片加载完成 隐藏loading
  onSwiperTap(e) {
    console.log(e, 76)
  },

  // 隐藏 loading
  _hideLoading() {
    this.setData({
      ShowLoading: false
    })
  },

  // 请求数据
  getData() {

    const getBannerConf = indexModel.getBannerConf()
    const getCategoryListTopType = indexModel.getCategoryListTopType()

    return Promise.all([getBannerConf, getCategoryListTopType]).then(res => {
      const [bannerList, FirstNavList] = res
      const SwiperImgs = bannerList.map(ele => {
        return `http://wzbj.ehanone.com/${ele.img}`
      })

      this.setData({
        SwiperImgs,
        FirstNavList
      })
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