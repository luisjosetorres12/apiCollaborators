const BaseRepository = require('./base.repository')
let _order = null

class OrderRepository extends BaseRepository{
  constructor({Order}){
    super(Order)
    _order = Order
  }

  async getUserByUserName(type){
    console.log(type.type)
    return await _order.findOne({type:type.type})
  }
}

module.exports = OrderRepository