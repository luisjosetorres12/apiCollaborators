let _typeOrderService = null

class TypeOrderController{

  constructor({TypeOrderService}){
    _typeOrderService = TypeOrderService
  }

  async get(req,res){
    const {id} = req.params
    const typeOrder =  await _typeOrderService.get(id)
    return res.send(typeOrder)
  }

  async getAll(req,res){
    const typeOrders =  await _typeOrderService.getAll()
    return res.send(typeOrders)
  }

  async create(req,res){
    const {body} = req
    const typeOrderCreated = await _typeOrderService.create(body)
    return res.status(201).send(typeOrderCreated)
  }

  async update(req,res){
    const {body} = req
    const {id} = req.params
    const typeOrderUpdated = await _typeOrderService.update(id,body)
    return res.send(typeOrderUpdated)
  }

  async delete(req,res){
    const {id} = req.params
    const typeOrderDeleted = await _typeOrderService.delete(id)
    return res.send(typeOrderDeleted)
  }

}

module.exports = TypeOrderController