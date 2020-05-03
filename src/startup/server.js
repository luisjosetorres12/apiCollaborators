const express = require('express')

let _express = null
let _config = null

class Server {
  constructor({router,config}){
    _config = config
    _express = express().use(router)
  }

  start(){
    return new Promise(resolve =>{
      _express.listen(_config.PORT,()=>{
        console.log(`${_config.APPLICATION_NAME} is running on port ${_config.PORT}`)
        resolve()
      })
    })
  }
}


module.exports = Server