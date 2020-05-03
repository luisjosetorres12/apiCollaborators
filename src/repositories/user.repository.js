const BaseRepository = require('./base.repository')
let _user = null
class UserRepository extends BaseRepository {
  constructor({UserModel}){
    super(UserModel)
    _user = UserModel
  }

  async getUserByUserName(email){
    return await _user.findOne({email})
  }
}

module.exports = UserRepository