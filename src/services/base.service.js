class BaseService {
    constructor(repository){
      this.repository = repository
    }
  
    async get(id){
      if(!id){
        const error = new Error()
        error.status = 400
        error.message = "Id must be sent"
        throw error
      }
  
      const currentEntity = await this.repository.get(id)
  
      if(!currentEntity){
        const error = new Error()
        error.status = 404
        error.message = "Entity does not found"
        throw error 
      }
  
      return currentEntity
    }
  
    async getAll(pageSize,pageNumber){
      return await this.repository.getAll(pageSize,pageNumber)
    }
  
    async create(entity){
      if(Object.keys(entity).length == 0){
        const error = new Error()
        error.status = 421
        error.message = "Entity is empty"
        throw error
      }
      return await this.repository.create(entity)
    }
    
  
    async update(id,entity){
      if(!id){
        const error = new Error()
        error.status = 400
        error.message = "Id must be sent"
        throw error
      }
  
      return await this.repository.update(id,entity)
    }
  
    async delete(id){
      if(!id){
        const error = new Error()
        error.status = 400
        error.message = "Id must be sent"
        throw error
      }
  
      return await this.repository.delete(id)
   
    }
  }
  
  module.exports = BaseService