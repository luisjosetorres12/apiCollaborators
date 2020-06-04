const {Router} = require('express')
const AuthMiddleware = require('./../middlewares/auth.middleware')

module.exports = function({TypeOrderController}){
  const router = Router()

  router.get("/",AuthMiddleware,TypeOrderController.getAll)
  router.get("/:id",AuthMiddleware,TypeOrderController.get)
  router.put("/:id",AuthMiddleware,TypeOrderController.update)
  router.post("/",AuthMiddleware,TypeOrderController.create)
  router.delete("/:id",AuthMiddleware,TypeOrderController.delete)

  return router
}