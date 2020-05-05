const BaseRepository = require('./base.repository')

class ItemRepository extends BaseRepository{
  constructor({Item}){
    super(Item)
  }
}

module.exports = ItemRepository