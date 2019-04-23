const md5 = require('./md5')

class Request {
  constructor() {
    this._init()
  }

  _init() {
    this._initData()
  }

  _initData() {
    this.baseUrl = 'http://192.168.100.40:8082/service/'
    this.requestArr = []
    this.rand = this.getRand()
    this.time = this.getTime()
  }

  authUserToken() {
    const userToken = wx.getStorageSync('token')
    if (!userToken || userToken == '') {
      this.clearUserToken()
    }
  }

  clearUserToken() {
    wx.clearStorage()
    wx.redirectTo({
      url: '/pages/common/login/login'
    })
  }

  // getRand
  getRand() {
    return Math.floor(100000 + Math.random() * 1000000)
  }

  getTime() {
    return new Date().getTime()
  }

  // 签名 和后端一致
  sign(data) {
    const encryptKey = '39d38be4be18cd9ff5363baa96027647'
    const time = this.time
    const rand = this.rand

    const path = `rand=${rand}&time=${time}`

    let md5Path = ''

    for (let k in data) {
      md5Path += `${k}=${data[k]}&`
    }

    return md5(md5Path + path + encryptKey)
  }

  // getHeader
  getHeader(data) {
    const header = {
      time: this.time,
      rand: this.rand,
      sign: this.sign(data),
      'content-type': 'application/json'
    }

    const userToken = wx.getStorageSync('token')
    if (userToken && userToken != '') {
      header.userToken = userToken
    }
    return header
  }

  // getData
  getData({ url, method = 'GET', data = {} }) {
    return new Promise((resolve, reject) => {
      const req = wx.request({
        url: this.baseUrl + url,
        header: this.getHeader(data),
        data: data,
        method: method,
        success: (res) => {
          let { status, data, error } = res.data
          if (status == 'success') {
            resolve(data)
          } else if (status == 'fail') {
            this._showError(error)
            if (error.indexOf('userToken') != -1) {
              this.clearUserToken()
            }
          } else {
            this._showError()
          }
        },
        fail: (res) => {
          // reject()
          this._showError()
        },
      })

      this.requestArr.push(req)
    }).catch(e => {
      this._showError()
    })
  }

  // abort 不完全abort
  abort() {
    if (this.requestArr) {
      this.requestArr.forEach(ele => {
        ele.abort()
      })
    }
  }

  // showerr
  _showError(e = '请求错误') {
    wx.showToast({
      title: e,
      icon: 'none'
    })
  }
}

export { Request }