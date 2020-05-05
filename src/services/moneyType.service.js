const BaseService = require('./base.service')

class MoneyTypeService extends BaseService{
  constructor({MoneyTypeRepository}){
    super(MoneyTypeRepository)
  }
}

module.exports = MoneyTypeService