// pages/ucenter/billingDetail/billingDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    IconConf: [ // 图标配置 0 1 2 3 4 5 余额 6 7 8 积分
      { icon: 'bill-card.png', name: '提现' },
      { icon: 'bill-rmb.png', name: '转账' },
      { icon: 'bill-rmb.png', name: '税收' },
      { icon: 'bill-card.png', name: '分红' },
      { icon: 'bill-rmb.png', name: '重消' },
      { icon: 'bill-trans.png', name: '邀请奖励' },

      { icon: 'bill-shop.png', name: '消费' },
      { icon: 'bill-point.png', name: '增加' },
      { icon: 'bill-point-trans.png', name: '转账' },
    ],
    BillList: [ // 账单明细
      {
        time: '2019-03',
        income: '18654',
        expenditure: '9854',
        list: [
          {
            type: '0',
            log: ' 贝博氏彩泥36色超轻粘土儿童手工彩泥黏土太空泥玩具DIY套装',
            value: -15,
            time: '03-14-12:07'
          },
          {
            type: '1',
            log: ' 安普康（AMPCOM）网线直通头RJ45水晶头网络连接器方形屏蔽直通头模块延长器 超值版3个装 AMCAT6BK302黑色',
            value: 315,
            time: '03-14-12:07'
          },
          {
            type: '2',
            log: ' 方家铺子 黄小米（五谷 杂粮小黄米 月子粥 东北粗粮粥米伴侣）1kg',
            value: 675,
            time: '03-14-12:07'
          },
          {
            type: '3',
            log: ' 百草味 超值量贩定制款 每日红枣960g/盒 新疆特产甜心灰枣 零食干果礼盒大礼包免洗枣子',
            value: 15,
            time: '03-14-12:07'
          },
          {
            type: '4',
            log: ' 金锣 火腿肠 肉粒多猪肉香肠系列 40g*8支',
            value: -215,
            time: '03-14-12:07'
          },
          {
            type: '0',
            log: ' 香满园 家用 中筋面粉 美味富强小麦粉5kg 包子饺子馒头饼手擀面（新老包装随机发货）',
            value: 695,
            time: '03-14-12:07'
          },
          {
            type: '5',
            log: ' 苹果官方MFI认证 苹果数据线Xs Max/XR/X/8/7手机快充充电器线USB电源线 适iphone5/6s/7Plus/ipad Anker正品',
            value: -815,
            time: '03-14-12:07'
          }
        ]
      },
      {
        time: '2019-02',
        income: '98514',
        expenditure: '44531',
        list: [
          {
            type: '0',
            log: ' 贝博氏彩泥36色超轻粘土儿童手工彩泥黏土太空泥玩具DIY套装',
            value: -15,
            time: '02-14-12:07'
          },
          {
            type: '1',
            log: ' 安普康（AMPCOM）网线直通头RJ45水晶头网络连接器方形屏蔽直通头模块延长器 超值版3个装 AMCAT6BK302黑色',
            value: 315,
            time: '02-14-12:07'
          },
          {
            type: '2',
            log: ' 方家铺子 黄小米（五谷 杂粮小黄米 月子粥 东北粗粮粥米伴侣）1kg',
            value: 675,
            time: '02-14-12:07'
          },
          {
            type: '3',
            log: ' 百草味 超值量贩定制款 每日红枣960g/盒 新疆特产甜心灰枣 零食干果礼盒大礼包免洗枣子',
            value: 15,
            time: '02-14-12:07'
          },
          {
            type: '4',
            log: ' 金锣 火腿肠 肉粒多猪肉香肠系列 40g*8支',
            value: -215,
            time: '02-14-12:07'
          },
          {
            type: '0',
            log: ' 香满园 家用 中筋面粉 美味富强小麦粉5kg 包子饺子馒头饼手擀面（新老包装随机发货）',
            value: 695,
            time: '02-14-12:07'
          },
          {
            type: '5',
            log: ' 苹果官方MFI认证 苹果数据线Xs Max/XR/X/8/7手机快充充电器线USB电源线 适iphone5/6s/7Plus/ipad Anker正品',
            value: -815,
            time: '02-14-12:07'
          }
        ]
      },
      {
        time: '2019-01',
        income: '5654',
        expenditure: '14730',
        list: [
          {
            type: '0',
            log: ' 贝博氏彩泥36色超轻粘土儿童手工彩泥黏土太空泥玩具DIY套装',
            value: -15,
            time: '01-14-12:07'
          },
          {
            type: '1',
            log: ' 安普康（AMPCOM）网线直通头RJ45水晶头网络连接器方形屏蔽直通头模块延长器 超值版3个装 AMCAT6BK302黑色',
            value: 315,
            time: '01-14-12:07'
          },
          {
            type: '2',
            log: ' 方家铺子 黄小米（五谷 杂粮小黄米 月子粥 东北粗粮粥米伴侣）1kg',
            value: 675,
            time: '01-14-12:07'
          },
          {
            type: '3',
            log: ' 百草味 超值量贩定制款 每日红枣960g/盒 新疆特产甜心灰枣 零食干果礼盒大礼包免洗枣子',
            value: 15,
            time: '01-14-12:07'
          },
          {
            type: '4',
            log: ' 金锣 火腿肠 肉粒多猪肉香肠系列 40g*8支',
            value: -215,
            time: '01-14-12:07'
          },
          {
            type: '0',
            log: ' 香满园 家用 中筋面粉 美味富强小麦粉5kg 包子饺子馒头饼手擀面（新老包装随机发货）',
            value: 695,
            time: '01-14-12:07'
          },
          {
            type: '5',
            log: ' 苹果官方MFI认证 苹果数据线Xs Max/XR/X/8/7手机快充充电器线USB电源线 适iphone5/6s/7Plus/ipad Anker正品',
            value: -815,
            time: '01-14-12:07'
          }
        ]
      }
    ],
    BillHead: { // 固定顶部的信息
      time: '2019-03',
      income: '9547',
      expenditure: '6485'
    },
    fixedIndex: 0, // 固定头部的下标
    fixedTop: 0
  },

  // 获取滚动头部的距离
  _getAllRects() {
    new Promise((resolve, reject) => {
      wx.createSelectorQuery().selectAll('.head-fixed-wrap').boundingClientRect(rects => {
        const arr = rects.filter(item => {
          return item.top < 60 && item.top > 0
        })
        if (arr.length) resolve(arr)
      }).exec()
    }).then(res => {
      const index = res[0].dataset.index
      this._setHeadFixedItem({ index, top: res[0].top })
    })
  },

  // 设置滚动的index及滚动条数据
  _setHeadFixedItem({ index, top }) {

    let { fixedTop, fixedIndex, BillList } = this.data

    if (fixedTop < top && top > 50) index--
    this.setData({
      fixedTop: top
    })

    if (index == fixedIndex) return

    const { time, income, expenditure } = BillList[index]
    this.setData({
      fixedIndex: index,
      BillHead: { time, income, expenditure }
    })
  },

  // 滚动监听
  onPageScroll() {
    this._getAllRects()
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