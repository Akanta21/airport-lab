var mongoose = require('mongoose')

var PassengerSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  dob: Date
})

const Passenger = mongoose.model('Passenger', PassengerSchema)

module.exports = Passenger
