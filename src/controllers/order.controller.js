let _orderService = null

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
    const {userId} = req.params
    const orderUpdated = await _orderService.update(userId,body)
    return res.send(orderUpdated)
  }

  async delete(req,res){
    const {userId} = req.params
    const orderDeleted = await _orderService.delete(userId)
    return res.send(orderDeleted)
  }

  async create(req,res){
    const {body} = req
    const orderCreated = await _orderService.create(body)
    return res.status(201).send(orderCreated)
  }

  async getUserByUserName(req,res){
    const {body} = req
    const orders = await _orderService.getUserByUserName(body)
    return res.send(orders)
  }

  async getMyOrders(req,res){
    const {userId} =req.body
    const orders = await _orderService.getMyOrders(userId)
    return res.send(orders)
  }

}

module.exports = OrderController