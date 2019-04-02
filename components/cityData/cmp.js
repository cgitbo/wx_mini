// components/cityData/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    multiArray: [],
    multiIndex: [0, 0, 0]
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      this.getCityInfo()
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //获取数据库数据
    getCityInfo: function () {
      wx.showLoading({
        title: 'Loading...',
      })
      var that = this
      wx.request({
        url: 'http://192.168.100.40:8082/area.json',
        success(res) {
          wx.hideLoading();
          if (res.data) {
            //获取云数据库数据
            var temp = res.data.data;
            //初始化更新数据
            that.setData({
              provinces: temp,
              multiArray: [temp, temp[0].citys, temp[0].citys[0].areas],
              multiIndex: [0, 0, 0]
            })
            console.log(that.data.provinces)
          }
        }
      })

      // const db = wx.cloud.database()
      // //因为数据库只存有一个总的数据字典，所以指定它的ID直接获取数据
      // var that = this
      // db.collection('cityDataArr').doc('5bdad6225f23a246bb2a97e1').get({
      //   success: res => {
      //     wx.hideLoading();
      //     if (res.data) {
      //       //获取云数据库数据
      //       var temp = res.data.data;
      //       //初始化更新数据
      //       that.setData({
      //         provinces: temp,
      //         multiArray: [temp, temp[0].citys, temp[0].citys[0].areas],
      //         multiIndex: [0, 0, 0]
      //       })
      //       console.log(that.data.provinces)
      //     }
      //   },
      //   fail: err => {
      //     wx.hideLoading();
      //     console.error(err)
      //   }
      // })
    },
    //点击确定
    bindMultiPickerChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        multiIndex: e.detail.value
      })
    },
    //滑动
    bindMultiPickerColumnChange: function (e) {
      console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
      var data = {
        multiArray: this.data.multiArray,
        multiIndex: this.data.multiIndex
      };
      //更新滑动的第几列e.detail.column的数组下标值e.detail.value
      data.multiIndex[e.detail.column] = e.detail.value;
      //如果更新的是第一列“省”，第二列“市”和第三列“区”的数组下标置为0
      if (e.detail.column == 0) {
        data.multiIndex = [e.detail.value, 0, 0];
      } else if (e.detail.column == 1) {
        //如果更新的是第二列“市”，第一列“省”的下标不变，第三列“区”的数组下标置为0
        data.multiIndex = [data.multiIndex[0], e.detail.value, 0];
      } else if (e.detail.column == 2) {
        //如果更新的是第三列“区”，第一列“省”和第二列“市”的值均不变。
        data.multiIndex = [data.multiIndex[0], data.multiIndex[1], e.detail.value];
      }
      var temp = this.data.provinces;
      data.multiArray[0] = temp;
      if ((temp[data.multiIndex[0]].citys).length > 0) {
        //如果第二列“市”的个数大于0,通过multiIndex变更multiArray[1]的值
        data.multiArray[1] = temp[data.multiIndex[0]].citys;
        var areaArr = (temp[data.multiIndex[0]].citys[data.multiIndex[1]]).areas;
        //如果第三列“区”的个数大于0,通过multiIndex变更multiArray[2]的值；否则赋值为空数组
        data.multiArray[2] = areaArr.length > 0 ? areaArr : [];
      } else {
        //如果第二列“市”的个数不大于0，那么第二列“市”和第三列“区”都赋值为空数组
        data.multiArray[1] = [];
        data.multiArray[2] = [];
      }
      //data.multiArray = [temp, temp[data.multiIndex[0]].citys, temp[data.multiIndex[0]].citys[data.multiIndex[1]].areas];
      //setData更新数据
      this.setData(data);
    }
  }
})