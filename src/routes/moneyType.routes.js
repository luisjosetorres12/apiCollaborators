const {Router} = require('express')

module.exports = function({MoneyTypeController}){
  const router = Router()

  router.get("/:id",MoneyTypeController.get)
  router.get("/",MoneyTypeController.getAll)
  router.put("/:id",MoneyTypeController.update)
  router.post("/",MoneyTypeController.create)
  router.delete("/:id",MoneyTypeController.delete)

  return router
}
