const mongoose = require('mongoose')
const {Schema} = mongoose

const MoneyTypeSchema = new Schema({
  name:{type:String},
  code:{type:String}
})

module.exports = mongoose.model('money-type',MoneyTypeSchema)