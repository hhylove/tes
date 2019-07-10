import request from '@/utils/request'

export function listOrder(query) {
  return request({
    method: 'get',
    params: {
      _gp: 'admin.order',
      _mt: 'list',
      ...query
    }
  })
}

export function detailOrder(orderId) {
  return request({
    method: 'get',
    params: {
      _gp: 'admin.order',
      _mt: 'detail',
      orderId
    }
  })
}

export function shipOrder(orderNo) {
  return request({
    method: 'post',
    params: {
      _gp: 'admin.order',
      _mt: 'ship',
      orderNo
    }
  })
}

export function refundOrder(refundForm) {
  return request({
    method: 'post',
    params: {
      _gp: 'admin.order',
      _mt: 'refund',
      ...refundForm
    }
  })
}