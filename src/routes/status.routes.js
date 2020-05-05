const {Router} = require('express')

module.exports = function({StatusController}){
  const router = Router()

  router.get("/:id",StatusController.get)
  router.get("/",StatusController.getAll)
  router.put("/:id",StatusController.update)
  router.post("/",StatusController.create)
  router.delete("/:id",StatusController.delete)

  return router
}

