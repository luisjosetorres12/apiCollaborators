const BaseRepository = require('./base.repository')

class MoneyTypeRepository extends BaseRepository{
	constructor({MoneyType}){
		super(MoneyType)
	}
}


module.exports = MoneyTypeRepository