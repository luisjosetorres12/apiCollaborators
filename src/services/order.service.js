const BaseService = require('./base.service')
let _orderRepository = null
class UserService extends BaseService {
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
}


module.exports = UserService