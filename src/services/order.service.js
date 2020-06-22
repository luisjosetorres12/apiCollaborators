const BaseService = require('./base.service')
let _orderRepository = null
class OrderService extends BaseService {
  constructor({OrderRepository}){
    super(OrderRepository)
    _orderRepository = OrderRepository

  }

  async getUserByUserName(typeId){
    return await _orderRepository.getUserByUserName(typeId)
  }

  async getMyOrders(id){
    if(!id){
      const error = new Error()
      error.message = "Id must be send"
      error.status = 404
      throw error
    }
    const orders = await _orderRepository.getMyOrders(id)
    return orders
  }

  async getOrdersCollaborate(id){
    if(!id){
      const error = new Error()
      error.message = "Id must be send"
      error.status = 404
      throw error
    }
    const orders = await _orderRepository.getOrdersCollaborate(id)
    return orders
  }

  async createOrders(order){
    order.status = "5eaf540c94155e6fbb944aa8"
    return await _orderRepository.createOrders(order)
  }

  async validateUpdatePermissions(userId,order){
    if(!userId){
      const error = new Error()
      error.message = "User Id must be send"
      error.status = "404"
      throw error
    }

    if(userId != order.author){
      const error = new Error()
      error.message = "User without permission to edit this order"
      error.status = 401
      throw error
    }

    return await _orderRepository.update(order)
  }

}


module.exports = OrderService