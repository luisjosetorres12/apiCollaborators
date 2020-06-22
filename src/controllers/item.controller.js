let _itemService = null

class ItemController{
  constructor({ItemService}){
    _itemService = ItemService
  }

  async get(req,res){
    const {id} = req.params
    const item =  await _itemService.get(id)
    return res.send(item)
  }

  async getAll(req,res){
    const items =  await _itemService.getAll()
    return res.send(items)
  }

  async create(req,res){
    const {body} = req
    const {orderId} = req.params
    const itemCreated = await _itemService.createItem(body,orderId)
    return res.status(201).send(itemCreated)
  }

  async update(req,res){
    const {body} = req
    const {id} = req.params
    const itemUpdated = await _itemService.update(id,body)
    return res.send(itemUpdated)
  }

  async delete(req,res){
    const {id} = req.params
    const itemDeleted = await _itemService.delete(id)
    return res.send(itemDeleted)
  }

  async finishOrderAndItems(req,res){
    const {orderId} = req.params
    console.log('LLegaste al finish')
    const order = await _itemService.finishOrderAndItems(orderId)
    return res.send(order)
  }

}


module.exports = ItemController