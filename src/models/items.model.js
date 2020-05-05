const mongoose = require('mongoose')
const {Schema} = mongoose

const itemSchema = new Schema({
	name:{type:String,required:true},
	description:{type:String},
	value:{type:String},
	moneyType:{type: Schema.Types.ObjectId, ref:"money-type",requeired: true, autopopulate: true},
	status:{type: Schema.Types.ObjectId, ref:"statuses",requeired: true, autopopulate: true}
})

itemSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('item',itemSchema)