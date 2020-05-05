const BaseRepository = require('./base.repository')

class TypeOrderRepository extends BaseRepository{
  constructor({TypeOrder}){
    super(TypeOrder)
  }
}

module.exports = TypeOrderRepository