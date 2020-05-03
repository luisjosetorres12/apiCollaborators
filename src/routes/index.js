const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
require('express-async-errors')
const ErrorMiddleware = require('./../middlewares/error.middleware')
module.exports = function({UserRoutes,AuthRoutes}){
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
  apiRouter.get("/",(req,res)=>{
    res.send({
      message:"Hola"
    })
  })
  router.use("/api/v1",apiRouter)
  router.use(ErrorMiddleware)
  return router
}
