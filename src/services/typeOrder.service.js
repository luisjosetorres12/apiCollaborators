const BaseService = require('./base.service')

class TypeOrderService extends BaseService{
  constructor({TypeOrderRepository}){
    super(TypeOrderRepository)
  }
}

module.exports = TypeOrderService