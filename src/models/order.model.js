const mongoose = require('mongoose')
const {Schema} = mongoose

const orderSchema = new Schema({
  name:{type: String},
  description:{type: String},
  suggestedDate:{type:Date},
  author:{type: Schema.Types.ObjectId, ref:"user",requeired: true, autopopulate: true},
  status:{type: Schema.Types.ObjectId, ref:"statuses",requeired: true, autopopulate: true},
  collaborator:{type: Schema.Types.ObjectId, ref:"user",requeired: true, autopopulate: true},
  type:{type: Schema.Types.ObjectId, ref:"type-order",requeired: true, autopopulate: true},
  items:[
    {type: Schema.Types.ObjectId, ref:"item",requeired: true, autopopulate: true}
  ]
})

orderSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('order',orderSchema)