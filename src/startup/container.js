const {createContainer,asClass,asValue,asFunction} = require('awilix')

//Config Files
const config = require('./../config/index')
const router = require('./../routes/index')
const app = require('./server')
const container = createContainer()

//Models
const {UserModel,MoneyType,Status,TypeOrder,Order,Item} = require('./../models')

//Repositories
const {UserRepository,StatusRepository,MoneyTypeRepository,TypeOrderRepository,OrderRepository,ItemRepository} = require('./../repositories/index')

//Services
const {UserService,AuthService,TypeOrderService,StatusService,MoneyTypeService,OrderService,ItemService} = require('./../services')

//Controllers
const {UserController,AuthController,StatusController,MoneyTypeController,TypeOrderController,OrderController,ItemController} = require('./../controllers')

//Routes
const {UserRoutes,AuthRoutes,StatusRoutes,MoneyTypeRoutes,TypeOrderRoutes,OrderRoutes,ItemRoutes} = require('./../routes/index.routes')

container
.register({
  config: asValue(config),
  router: asFunction(router).singleton(),
  app: asClass(app).singleton()
})
.register({
  UserModel:asValue(UserModel),
  MoneyType:asValue(MoneyType),
  Status: asValue(Status),
  TypeOrder: asValue(TypeOrder),
  Order: asValue(Order),
  Item: asValue(Item)
})
.register({
  UserRepository: asClass(UserRepository).singleton(),
  StatusRepository: asClass(StatusRepository).singleton(),
  MoneyTypeRepository: asClass(MoneyTypeRepository).singleton(),
  TypeOrderRepository: asClass(TypeOrderRepository).singleton(),
  OrderRepository: asClass(OrderRepository).singleton(),
  ItemRepository: asClass(ItemRepository).singleton()
})
.register({
  UserService: asClass(UserService).singleton(),
  AuthService: asClass(AuthService).singleton(),
  TypeOrderService: asClass(TypeOrderService).singleton(),
  MoneyTypeService: asClass(MoneyTypeService).singleton(),
  StatusService: asClass(StatusService).singleton(),
  OrderService: asClass(OrderService).singleton(),
  ItemService: asClass(ItemService).singleton()
})
.register({
  UserController: asClass(UserController.bind(UserController)).singleton(),
  AuthController: asClass(AuthController.bind(AuthController)).singleton(),
  StatusController: asClass(StatusController.bind(StatusController)).singleton(),
  MoneyTypeController: asClass(MoneyTypeController.bind(MoneyTypeController)).singleton(),
  TypeOrderController: asClass(TypeOrderController.bind(TypeOrderController)).singleton(),
  OrderController: asClass(OrderController.bind(OrderController)).singleton(),
  ItemController: asClass(ItemController.bind(ItemController)).singleton()
})
.register({
  UserRoutes: asFunction(UserRoutes).singleton(),
  AuthRoutes: asFunction(AuthRoutes).singleton(),
  StatusRoutes: asFunction(StatusRoutes).singleton(),
  MoneyTypeRoutes: asFunction(MoneyTypeRoutes).singleton(),
  TypeOrderRoutes: asFunction(TypeOrderRoutes).singleton(),
  OrderRoutes: asFunction(OrderRoutes).singleton(),
  ItemRoutes: asFunction(ItemRoutes).singleton()
})

module.exports = container