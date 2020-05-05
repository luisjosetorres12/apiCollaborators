let _statusService = null

class StatusController{
  constructor({StatusService}){
    _statusService = StatusService
  }

  async get(req,res){
    const {id} = req.params
    const status =  await _statusService.get(id)
    return res.send(status)
  }

  async getAll(req,res){
    const statuses =  await _statusService.getAll()
    return res.send(statuses)
  }

  async create(req,res){
    const {body} = req
    const statusCreated = await _statusService.create(body)
    return res.status(201).send(statusCreated)
  }

  async update(req,res){
    const {body} = req
    const {id} = req.params
    const statusUpdated = await _statusService.update(id,body)
    return res.send(statusUpdated)
  }

  async delete(req,res){
    const {id} = req.params
    const statusDeleted = await _statusService.delete(id)
    return res.send(statusDeleted)
  }
}

module.exports = StatusController