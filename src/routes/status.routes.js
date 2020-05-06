const {Router} = require('express')
const AuthMiddleware = require('./../middlewares/auth.middleware')

module.exports = function({StatusController}){
  const router = Router()

  router.get("/:id",AuthMiddleware,StatusController.get)
  router.get("/",AuthMiddleware,StatusController.getAll)
  router.put("/:id",AuthMiddleware,StatusController.update)
  router.post("/",AuthMiddleware,StatusController.create)
  router.delete("/:id",AuthMiddleware,StatusController.delete)

  return router
}

