const mongoose = require('mongoose')
const {Schema} = mongoose

const StatusSchema = new Schema({
  name:{type:String}
})

module.exports = mongoose.model('statuses',StatusSchema)