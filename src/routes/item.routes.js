const {Router} = require('express')

module.exports = function({ItemController}){
  const router = Router()

  router.get("/:id",ItemController.get)
  router.get("/",ItemController.getAll)
  router.put("/:id",ItemController.update)
  router.post("/:orderId",ItemController.create)
  router.delete("/:id",ItemController.delete)

  return router
}

