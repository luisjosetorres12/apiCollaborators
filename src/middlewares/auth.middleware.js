const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('./../config/index')

module.exports = function(req,res,next){
  const token = req.headers['authorization']

  if(!token){
    const error = new Error()
    error.message = "Token must be send"
    error.status = 401
    throw error
  }

  jwt.verify(token,JWT_SECRET,function(err,decodeToken){
    if(err){
      const error = new Error()
      error.message = "Invalid Token"
      error.status = 401
      throw error
    }
    
    req.user = decodeToken.user
    next()
  })
}