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
}


module.exports = UserService