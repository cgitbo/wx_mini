// pages/home/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ImgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://m.360buyimg.com/mobilecms/s750x366_jfs/t27871/347/1676989741/116594/4b38926b/5bea2f7bNe9efdcfa.jpg!cr_1125x549_0_72!q70.jpg.dpg'
    ],
    SwiperConf: {
      indicatorDots: true,
      autoplay: true,
      circular: true,
      interval: 5000,
      duration: 500,
    },
    FirstNavList: [
      '杭州特产',
      '杭州特产',
      '杭州特产',
      '杭州特产',
      '杭州特产',
      '杭州特产',
      '杭州特产',
      '杭州特产',
      '杭州特产',
      '杭州特产',
      '杭州特产',
      '杭州特产',
      '杭州特产',
      '杭州特产',
      '杭州特产',
    ],
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
      { name: '床上用品', img: 'https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png'},
    ],
    CurIndex: 0,
    VerticalNavTop: 0
  },

  onNavTap(e) {
    const CurIndex = e.currentTarget.dataset.id
    this.setData({
      CurIndex,
      VerticalNavTop: (CurIndex - 1) * 100
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