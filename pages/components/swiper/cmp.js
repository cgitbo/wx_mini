// pages/components/swiper/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    indicatorDots: {
      type: Boolean,
      value: true
    },
    autoplay: {
      type: Boolean,
      value: true
    },
    circular: {
      type: Boolean,
      value: true
    },
    indicatorColor: {
      type: String,
      value: '#fff'
    },
    activeColor: {
      type: String,
      value: '#45AE8C'
    },
    swiperSize: String,
    swiperImgs: Array,
    curIndex: {
      type: Number,
      value: 1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // swiper图片点击事件
    onImgTap(e) {
      const index = e.currentTarget.dataset.index
      this.triggerEvent('onSwiperTap', {index}, {})
    },

    // 图片改变 Index
    onSwiperChange(e) {
      const curIndex = e.detail.current + 1
      this.setData({
        curIndex
      })
    }
  }
})
