import { Request } from '../../utils/request.js'
class OrderModel extends Request {
  // 获取订单信息
  getOrderList(data) {
    return this.getData({
      url: `getOrderListApi`,
      data
    })
  }

  // 根据订单id获取订单详情
  getOrderDetailByOrderId(data) {
    return this.getData({
      url: 'getOrderDetailByOrderId',
      data
    })
  }

  // 
  getDeliveryById(id) {
    return this.getData({
      url: 'getDeliveryDocByOrderId',
      data: {
        param: [`array("#order_id#",'11')`]
      },
    })
  }
}

export { OrderModel }