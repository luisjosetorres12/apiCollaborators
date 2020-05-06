const {Router} = require('express')
const AuthMiddleware = require('./../middlewares/auth.middleware')

module.exports = function({MoneyTypeController}){
  const router = Router()

  router.get("/:id",AuthMiddleware,MoneyTypeController.get)
  router.get("/",AuthMiddleware,MoneyTypeController.getAll)
  router.put("/:id",AuthMiddleware,MoneyTypeController.update)
  router.post("/",AuthMiddleware,MoneyTypeController.create)
  router.delete("/:id",AuthMiddleware,MoneyTypeController.delete)

  return router
}
