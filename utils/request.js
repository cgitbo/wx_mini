class Request {
  baseUrl = 'https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine/'

  requestArr = []

  getData({ url, method = 'GET', data = {} }) {
    return new Promise((resolve, reject) => {
      const req = wx.request({
        url: this.baseUrl + url,
        data: data,
        method: method,
        success: (res) => {
          let { code } = res.data
          if (code == 0) {
            resolve(res.data.data)
          } else {
            this._showError()
          }
        },
        fail: (res) => {
          reject()
          // this._showError()
        },
      })

      this.requestArr.push(req)
    })
  }

  abort() {
    if (this.requestArr) {
      this.requestArr.forEach(ele => {
        ele.abort()
      })
    }
  }

  _showError() {
    wx.showToast({
      title: '请求错误',
      icon: 'none'
    })
  }
}

export { Request }