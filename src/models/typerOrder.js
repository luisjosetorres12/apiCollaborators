const mongoose = require('mongoose')
const {Schema} = mongoose

const TypeOrderSchema = new Schema({
  name:{type:String}
})

module.exports = mongoose.model('type-order',TypeOrderSchema)