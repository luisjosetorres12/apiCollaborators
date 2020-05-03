const {createContainer,asClass,asValue,asFunction} = require('awilix')

//Config Files
const config = require('./../config/index')
const router = require('./../routes/index')
const app = require('./server')
const container = createContainer()

//Models
const {UserModel} = require('./../models')

//Repositories
const {UserRepository} = require('./../repositories/index')

//Services
const {UserService,AuthService} = require('./../services')

//Controllers
const {UserController,AuthController} = require('./../controllers')

//Routes
const {UserRoutes,AuthRoutes} = require('./../routes/index.routes')

container
.register({
  config: asValue(config),
  router: asFunction(router).singleton(),
  app: asClass(app).singleton()
})
.register({
  UserModel:asValue(UserModel)
})
.register({
  UserRepository: asClass(UserRepository).singleton()
})
.register({
  UserService: asClass(UserService).singleton(),
  AuthService: asClass(AuthService).singleton()
})
.register({
  UserController: asClass(UserController.bind(UserController)).singleton(),
  AuthController: asClass(AuthController.bind(AuthController)).singleton()
})
.register({
  UserRoutes: asFunction(UserRoutes).singleton(),
  AuthRoutes: asFunction(AuthRoutes).singleton()
})

module.exports = container