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

  async getMyOrders(userId,pageSize = 5,pageNumber = 1){
    const skips = pageSize * (pageNumber - 1)
    return await _order.find({author:userId})
    .skip(skips)
    .limit(pageSize)
  }

  async getOrdersCollaborate(userId,pageSize = 5,pageNumber = 1){
    console.log(userId)
    const skips = pageSize * (pageNumber - 1)
    return await _order.find({collaborator:userId})
    .skip(skips)
    .limit(pageSize)
  }

  async createOrders(order){
    return await _order.create(order)
  }
}

module.exports = OrderRepository