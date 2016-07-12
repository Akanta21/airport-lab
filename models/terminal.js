var mongoose = require('mongoose')

var TerminalSchema = mongoose.Schema({
  name: String,
  flights: [{type: mongoose.Schema.Types.ObjectId, ref: 'Flight'}],
  capacity: Number
})

const Terminal = mongoose.model('Terminal', TerminalSchema)

module.exports = Terminal
