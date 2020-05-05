const BaseService = require('./base.service')

class StatusService extends BaseService{
  constructor({StatusRepository}){
    super(StatusRepository)
  }
}

module.exports = StatusService