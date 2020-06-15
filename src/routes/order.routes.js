const {Router} = require('express')
const AuthMiddleware = require('./../middlewares/auth.middleware')
module.exports = function({OrderController}){
  const router = Router()

  router.get("/",AuthMiddleware,OrderController.getAll)
  router.get('/type',AuthMiddleware,OrderController.getUserByUserName)
  router.get('/myOrders/:id',AuthMiddleware,OrderController.getMyOrders)
  router.get('/iCollaborate/:id',AuthMiddleware,OrderController.getOrdersCollaborate)
  router.get("/:id",AuthMiddleware,OrderController.getById)
  router.put("/:id",AuthMiddleware,OrderController.update)
  router.post("/",AuthMiddleware,OrderController.create)
  router.delete("/:id",AuthMiddleware,OrderController.delete)

  return router
}
