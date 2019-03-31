// pages/home/products/products.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    NavList: [
      { name: '男装' },
      { name: '服饰' },
      { name: '咖啡' },
      { name: '服饰' },
      { name: '精品茗茶啊' },
      { name: '服饰' },
      { name: '服饰' },
      { name: '服饰' },
      { name: '这是五个字' },
      { name: '这是五个字' },
      { name: '服饰' },
      { name: '服饰' },
      { name: '三个字' },
      { name: '精品茗茶' },
      { name: '这是他妈六个' },
      { name: '精品茗茶' },
      { name: '精品茗茶' }
    ],
    CurIndex: 0, // 当前点击的下标
    NavId: 'navId0', // 要滚动的id值
    MoreBool: false, // 更多菜单状态
    ProductsList: [ // 要渲染的商品数据
      {
        name: '飞利浦（PHILIPS）E108 陨石黑 直板按键 移动联通2G 双卡双待 老人手机 老年功能机 学生机备机',
        imgSrc: 'https://img13.360buyimg.com/n2/s240x240_jfs/t1/27489/19/6478/244611/5c5023e8E0f4b8e7b/f913525cb129c881.jpg',
        price: 89,
        sale: 8,
        product_id: 5
      },
      {
        name: '  荣耀V20 胡歌同款 麒麟980芯片 魅眼全视屏 4800万深感相机 6GB+128GB 幻夜黑 移动联通电信4G全面屏手机  ',
        imgSrc: 'https://img13.360buyimg.com/mobilecms/s316x316_jfs/t1/27653/36/12572/346766/5c99ef63E81a8de14/5a38e39b2975e837.jpg',
        price: 2989,
        sale: 82,
        product_id: 6
      },
      {
        name: '  荣耀V20 胡歌同款 麒麟980芯片 魅眼全视屏 4800万深感相机 6GB+128GB 幻夜黑 移动联通电信4G全面屏手机  ',
        imgSrc: 'https://img13.360buyimg.com/mobilecms/s316x316_jfs/t1/27653/36/12572/346766/5c99ef63E81a8de14/5a38e39b2975e837.jpg',
        price: 2989,
        sale: 82,
        product_id: 6
      },
      {
        name: '  荣耀V20 胡歌同款 麒麟980芯片 魅眼全视屏 4800万深感相机 6GB+128GB 幻夜黑 移动联通电信4G全面屏手机  ',
        imgSrc: 'https://img13.360buyimg.com/mobilecms/s316x316_jfs/t1/27653/36/12572/346766/5c99ef63E81a8de14/5a38e39b2975e837.jpg',
        price: 2989,
        sale: 82,
        product_id: 6
      },
      {
        name: '  荣耀V20 胡歌同款 麒麟980芯片 魅眼全视屏 4800万深感相机 6GB+128GB 幻夜黑 移动联通电信4G全面屏手机  ',
        imgSrc: 'https://img13.360buyimg.com/mobilecms/s316x316_jfs/t1/27653/36/12572/346766/5c99ef63E81a8de14/5a38e39b2975e837.jpg',
        price: 2989,
        sale: 82,
        product_id: 6
      },
      {
        name: '  荣耀V20 胡歌同款 麒麟980芯片 魅眼全视屏 4800万深感相机 6GB+128GB 幻夜黑 移动联通电信4G全面屏手机  ',
        imgSrc: 'https://img13.360buyimg.com/mobilecms/s316x316_jfs/t1/27653/36/12572/346766/5c99ef63E81a8de14/5a38e39b2975e837.jpg',
        price: 2989,
        sale: 82,
        product_id: 6
      },
      {
        name: '  荣耀V20 胡歌同款 麒麟980芯片 魅眼全视屏 4800万深感相机 6GB+128GB 幻夜黑 移动联通电信4G全面屏手机  ',
        imgSrc: 'https://img13.360buyimg.com/mobilecms/s316x316_jfs/t1/27653/36/12572/346766/5c99ef63E81a8de14/5a38e39b2975e837.jpg',
        price: 2989,
        sale: 82,
        product_id: 6
      },
      {
        name: '  荣耀V20 胡歌同款 麒麟980芯片 魅眼全视屏 4800万深感相机 6GB+128GB 幻夜黑 移动联通电信4G全面屏手机  ',
        imgSrc: 'https://img13.360buyimg.com/mobilecms/s316x316_jfs/t1/27653/36/12572/346766/5c99ef63E81a8de14/5a38e39b2975e837.jpg',
        price: 2989,
        sale: 82,
        product_id: 6
      },
      {
        name: '  荣耀V20 胡歌同款 麒麟980芯片 魅眼全视屏 4800万深感相机 6GB+128GB 幻夜黑 移动联通电信4G全面屏手机  ',
        imgSrc: 'https://img13.360buyimg.com/mobilecms/s316x316_jfs/t1/27653/36/12572/346766/5c99ef63E81a8de14/5a38e39b2975e837.jpg',
        price: 2989,
        sale: 82,
        product_id: 6
      }
    ]
  },

  // 导航点击事件
  onNavListTap(e) {
    const CurIndex = e.currentTarget.dataset.index
    this._setCurData(CurIndex)
  },

  // 更多导航点击事件
  onMoreNavListTap(e) {
    this.onMoreTap()
    this.onNavListTap(e)
  },

  // 更多导航事件
  onMoreTap() {
    const MoreBool = !this.data.MoreBool
    this.setData({
      MoreBool
    })
  },

  // 当前商品点击事件
  onProductListTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/home/product/product?id=${id}`
    })
  },

  // 设置当前的下标和页面标题
  _setCurData(CurIndex) {
    const NavList = this.data.NavList || []
    const title = NavList[CurIndex].name
    if (!title) return
    
    this._setCurIndex(CurIndex)
    this._setNavBarTitle(title)
  },

  // 设置当前下标
  _setCurIndex(CurIndex) {
    this.setData({
      CurIndex,
      NavId: `navId${CurIndex > 2 ? CurIndex - 2 : 0}`
    })
  },

  // 设置当前页面标题
  _setNavBarTitle(title) {
    wx.setNavigationBarTitle({
      title
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const CurIndex = options.id
    this._setCurData(CurIndex)
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
    console.log('load-more')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})