// components/search/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    confirmType: String,
    size: String,
    placeholder: String
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
    onConfirmTap(e) {
      console.log(e)
    }
  }
})
