const BaseService = require('./base.service')
let _itemRepository = null
let _orderRepository = null
class ItemService extends BaseService{
  constructor({ItemRepository,OrderRepository}){
    super(ItemRepository)
    _orderRepository = OrderRepository
    _itemRepository = ItemRepository
  }

  async createItem(items,orderId){
    if(!orderId){
      const error = new Error()
      error.message = "Order Id must be send"
      error.status = 500
      throw error
    }

    const order = await _orderRepository.get(orderId)

    if(!order){
      const error = new Error()
      error.message = "Order does not exist"
      error.status = 404
      throw error
    }
    for(let i=0; i<items.length;i++){
      let item = items[i]
      item.moneyType = item.moneyType._id
      item.status = "5eaf540c94155e6fbb944aa8"
      let itemCreated = await _itemRepository.create(item)
      order.items.push(itemCreated)
    }
    return await _orderRepository.update(orderId,{items:order.items})
  }

}

module.exports = ItemService