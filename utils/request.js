const md5 = require('./md5')

class Request {
  // baseurl
  baseUrl = 'http://192.168.100.40:8082/service/'

  // 签名 和后端一致
  _sign(url, data) {
    const encryptKey = '39d38be4be18cd9ff5363baa96027647'
    const time = this.getTime()
    const rand = this.getRand()

    const path = `rand=${rand}&time=${time}`

    let md5Path = ''
    for (let k in data) {
      md5Path += `&${k}=${data[k]}`
    }
    md5Path = path + md5Path

    const sign = `${url}?${path}&sign=${md5(md5Path + encryptKey)}`
    return sign
  }

  // getRand
  getRand() {
    return Math.floor(100000 + Math.random() * 1000000)
  }

  getTime() {
    return new Date().getTime()
  }

  // requestArr
  requestArr = []

  // getHeader
  getHeader() {
    if (wx.getStorageSync('token')) {
      return {
        'content-type': 'application/json',
        'userToken': wx.getStorageSync('token')
      }
    }
    return {
      'content-type': 'application/json'
    }
  }

  // getData
  getData({ url, method = 'GET', data = {} }) {
    url = this._sign(url, data)
    return this._getData({ url, method, data })
  }

  _getData({ url, method = 'GET', data = {} }) {
    return new Promise((resolve, reject) => {
      const req = wx.request({
        url: this.baseUrl + url,
        header: this.getHeader(),
        data: data,
        method: method,
        success: (res) => {
          let { status } = res.data
          if (status == 'success') {
            resolve(res.data.data)
          } else {
            reject()
            this._showError()
          }
        },
        fail: (res) => {
          reject()
          // this._showError()
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
  _showError() {
    wx.showToast({
      title: '请求错误',
      icon: 'none'
    })
  }
}

export { Request }