let _orderService = null
const sendEmailHelder = require('./../helpers/sendEmail')
const sendEmail = new sendEmailHelder()
class OrderController{
  constructor({OrderService}){
    _orderService = OrderService
  }

  async getById(req,res){
    const {id} = req.params
    const order = await _orderService.get(id)
    res.send(order)
  }

  async getAll(req,res){
    const {pageSize,pageNum} = req.query
    const orders = await _orderService.getAll(pageSize,pageNum)
    return res.send(orders)
  }

  async update(req,res){
    const {body} = req
    const {id} = req.user
    const orderUpdated = await _orderService.validateUpdatePermissions(id,body)
    return res.send(orderUpdated)
  }

  async delete(req,res){
    const {id} = req.user
    const {body} = req
    const orderDeleted = await _orderService.delete(id,body)
    return res.send(orderDeleted)
  }

  async create(req,res){
    const {body} = req
    console.log(body)
    const orderCreated = await _orderService.createOrders(body)
    await sendEmail.associateToOrder()
    return res.status(201).send(orderCreated)
  }

  async getUserByUserName(req,res){
    const {body} = req
    const orders = await _orderService.getUserByUserName(body)
    return res.send(orders)
  }

  async getMyOrders(req,res){
    const {id} = req.params
    console.log(id)
    const orders = await _orderService.getMyOrders(id)
    return res.send(orders)
  }

  async getOrdersCollaborate(req,res){
    const {id} = req.params
    const orders = await _orderService.getOrdersCollaborate(id)
    return res.send(orders)
  }
}

module.exports = OrderController