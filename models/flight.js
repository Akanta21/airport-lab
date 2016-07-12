var mongoose = require('mongoose')

var FlightSchema = mongoose.Schema({
  from: String,
  to: String,
  airline: String
})

const Flight = mongoose.model('Flight', FlightSchema)

module.exports = Flight
