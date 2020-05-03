const {Router} = require('express')

module.exports = function({UserController}){
  const router = Router()

  router.get("/:id",UserController.get)
  router.get("/",UserController.getAll)
  router.put("/:id",UserController.update)
  router.delete("/:id",UserController.delete)

  return router
}