let _userService = null

class UserController{
  constructor({UserService}){
    _userService = UserService
  }

  async get(req,res){
    const {id} = req.params
    const user = await _userService.get(id)
    res.send(user)
  }

  async getAll(req,res){
    const {pageSize,pageNum} = req.query
    const users = await _userService.getAll(pageSize,pageNum)
    return res.send(users)
  }

  async update(req,res){
    const {body} = req
    const {userId} = req.params
    const userUpdated = await _userService.update(userId,body)
    res.send(userUpdated)
  }

  async delete(req,res){
    const {userId} = req.params
    const userDeleted = await _userService.delete(userId)
    res.send(userDeleted)
  }

}

module.exports = UserController