const {Router} = require('express')
const AuthMiddleware = require('./../middlewares/auth.middleware')

module.exports = function({UserController}){
  const router = Router()

  router.get("/:id",AuthMiddleware,UserController.get)
  router.get("/",AuthMiddleware,UserController.getAll)
  router.put("/:id",AuthMiddleware,UserController.update)
  router.delete("/:id",AuthMiddleware,UserController.delete)

  return router
}