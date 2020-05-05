const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
require('express-async-errors')
const ErrorMiddleware = require('./../middlewares/error.middleware')
module.exports = function({UserRoutes,AuthRoutes,StatusRoutes,MoneyTypeRoutes,TypeOrderRoutes,OrderRoutes,ItemRoutes}){
  const router = express.Router()
  const apiRouter = express.Router()

//Middlewares que se ejecutaran de principio
  apiRouter
  .use(express.json())
  .use(cors())
  .use(helmet())
  .use(compression())

  apiRouter.use("/user",UserRoutes)
  apiRouter.use("/auth",AuthRoutes)
  apiRouter.use("/status",StatusRoutes)
  apiRouter.use("/moneyType",MoneyTypeRoutes)
  apiRouter.use("/typeOrder",TypeOrderRoutes)
  apiRouter.use("/order",OrderRoutes),
  apiRouter.use("/item",ItemRoutes)
  apiRouter.get("/",(req,res)=>{
    res.send({
      message:"Hola"
    })
  })
  router.use("/api/v1",apiRouter)
  router.use(ErrorMiddleware)
  return router
}
