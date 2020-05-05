let _moneyTypeService = null

class MoneyTypeController{
  constructor({MoneyTypeService}){
    _moneyTypeService = MoneyTypeService
  }

  async get(req,res){
    const {id} = req.params
    const moneyType =  await _moneyTypeService.get(id)
    return res.send(moneyType)
  }

  async getAll(req,res){
    const moneyTypes =  await _moneyTypeService.getAll()
    return res.send(moneyTypes)
  }

  async create(req,res){
    const {body} = req
    const moneyTypeCreated = await _moneyTypeService.create(body)
    return res.status(201).send(moneyTypeCreated)
  }

  async update(req,res){
    const {body} = req
    const {id} = req.params
    const moneyTypeUpdated = await _moneyTypeService.update(id,body)
    return res.send(moneyTypeUpdated)
  }

  async delete(req,res){
    const {id} = req.params
    const moneyTypeDeleted = await _moneyTypeService.delete(id)
    return res.send(moneyTypeDeleted)
  }
}

module.exports = MoneyTypeController