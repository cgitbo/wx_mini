// pages/components/countChoose/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    CountChoose: {
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
    // 选择购买数量失焦事件
    onCountInputBlur(e) {
      const CountChoose = +e.detail.value
      this.setData({
        CountChoose
      })
      this._triggerEvent(CountChoose)
    },

    // 购买数量减少事件
    onChooseMinTap() {
      let CountChoose = this.data.CountChoose
      if (CountChoose == 1) return
      CountChoose -= 1
      this.setData({
        CountChoose
      })
      this._triggerEvent(CountChoose)
    },

    // 购买数量增加事件
    onChoosePlusTap() {
      let CountChoose = this.data.CountChoose
      CountChoose += 1
      this.setData({
        CountChoose
      })
      this._triggerEvent(CountChoose)
    },

    _triggerEvent(val) {
      this.triggerEvent('countChange', { val }, {})
    }
  }
})
