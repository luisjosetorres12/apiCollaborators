const {Router} = require('express')

module.exports = function({OrderController}){
  const router = Router()

  router.get("/",OrderController.getAll)
  router.get('/type',OrderController.getUserByUserName)
  router.get("/:id",OrderController.getById)
  router.put("/:id",OrderController.update)
  router.post("/",OrderController.create)
  router.delete("/:id",OrderController.delete)

  return router
}
