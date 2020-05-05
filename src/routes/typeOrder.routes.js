const {Router} = require('express')

module.exports = function({TypeOrderController}){
  const router = Router()

  router.get("/:id",TypeOrderController.get)
  router.get("/",TypeOrderController.getAll)
  router.put("/:id",TypeOrderController.update)
  router.post("/",TypeOrderController.create)
  router.delete("/:id",TypeOrderController.delete)

  return router
}