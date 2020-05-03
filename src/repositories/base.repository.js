class BaseRepository {
  constructor(model){
    this.model = model
  }

  //Get by Id
  async get(id){
    try {
      const user = await this.model.findById(id)
      return user
    } catch (error) {
      return {
        error: error,
        message:'Usuario no encontrado'
      }
    }
    
  }

  async getAll(pageSize = 5,pageNumber = 1) {
    console.log(this.model)
    const skips = pageSize * (pageNumber - 1)
    return await this.model.find()
    .skip(skips)
    .limit(pageSize)
  }

  async create(entity){
    return this.model.create(entity)
  }
  async update(id, entity){
    return await this.model.findByIdAndUpdate(id,entity,{new:true})
  }

  async delete(id){
    await this.model.findByIdAndDelete(id)
    return true
  }
}

module.exports = BaseRepository