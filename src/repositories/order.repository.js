const BaseRepository = require('./base.repository')
let _order = null

class OrderRepository extends BaseRepository{
  constructor({Order}){
    super(Order)
    _order = Order
  }

  async getUserByUserName(type){
    return await _order.find({type:type.type})
  }

  async getMyOrders(userId){
    return await _order.find({author:userId})
  }

  async createOrders(order){
    return await _order.create(order)
  }
}

module.exports = OrderRepository