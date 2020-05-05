const BaseRepository = require('./base.repository')

class StatusRepository extends BaseRepository{
  constructor({Status}) {
    super(Status)
  }
}

module.exports = StatusRepository