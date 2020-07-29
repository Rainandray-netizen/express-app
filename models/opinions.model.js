const { Schema, model } = require('mongoose')

const commentSchema = new Schema({
  content: { type: String },
  timestamp: {type: Date},
})

const opinionSchema = new Schema({
  content: { type : String },
  comments: [commentSchema],
  timestamp: {type: Date},
})

module.exports = model('Opinion', opinionSchema)