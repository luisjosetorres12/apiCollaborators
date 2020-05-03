const {JWTHelper} = require('./../helpers')
let _userService = null

class AuthService {
  constructor({UserService}){
    _userService = UserService
  }

  async signUp(user){
    if(user == null){
      const error = new Error()
      error.status = 421
      error.message = "User must be send"
      throw error
    }
    const {email} = user
    const userCreated = await _userService.getUserByUserName(email)
    if(userCreated){
      const error = new Error()
      error.status = 400
      error.message = "User already exits"
      throw error
    }

    return await _userService.create(user)
  }

  async signIn(user){
    const {email,password} = user
    console.log(email)
    const userExist = await _userService.getUserByUserName(email)
    if(!userExist){
      const error = new Error()
      error.status = 404
      error.message = "User not found"
      throw error
    }

    const comparedPassword = userExist.comparePassword(password)
    if(!comparedPassword){
      const error = new Error()
      error.status = 401
      error.message = "Invalid Password"
      throw error
    }

    const UserToEncoded = {
      username: userExist.username,
      id: userExist.id
    }

    const token = JWTHelper.generateToken(UserToEncoded)
    return {
      token,user:userExist
    }
  }
}

module.exports = AuthService

