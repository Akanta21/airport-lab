var mongoose = require('mongoose')

var flightSchema = new mongoose.Schema({
  from: String,
  to: String,
  airline: String
})

var terminalSchema = new mongoose.Schema({
  name: String,
  // flights: [flightSchema],
  flights: [{type: mongoose.Schema.Types.ObjectId, ref: 'Flight'}],
  capacity: Number
})

var airportSchema = new mongoose.Schema({
  name: String,
  country: String,
  terminals: [terminalSchema],
  opened: Date,
})

var passengerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  dob: Date
})


const Airport = mongoose.model('Airport', airportSchema)
const Terminal = mongoose.model('Terminal', terminalSchema)
const Flight = mongoose.model('Flight', flightSchema)

var my_schemas = {Airport : Airport, Terminal : Terminal, Flight: Flight}

module.exports = my_schemas
