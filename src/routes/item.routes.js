const {Router} = require('express')
const AuthMiddleware = require('./../middlewares/auth.middleware')

module.exports = function({ItemController}){
  const router = Router()

  router.get("/:id",AuthMiddleware,ItemController.get)
  router.get("/",AuthMiddleware,ItemController.getAll)
  router.put("/:id",AuthMiddleware,ItemController.update)
  router.post("/:orderId",AuthMiddleware,ItemController.create)
  router.delete("/:id",AuthMiddleware,ItemController.delete)

  return router
}

