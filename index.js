var express = require('express')
var path = require('path')
var logger = require('morgan')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 3000

var mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const Airport = require('./models/airport').Airport
const Terminal = require('./models/airport').Terminal
const Flight = require('./models/airport').Flight
const Passenger = require('./models/passenger')
// creation of flights

let flight1 = new Flight({
  from: 'CDG France',
  to: 'JFK NY',
  airline: 'AA'
})

flight1.save((err) => {
  if(err) console.log(err)
  else console.log(' Created', flight1)
})
let flight2 = new Flight({
  from: 'Heathrow UK',
  to: 'JFK NY',
  airline: 'British Airways'
})

flight2.save((err) => {
  if(err) console.log(err)
  else console.log(' Created', flight2)
})
// creation of the terminal
let terminal1 = new Terminal({
  name: 'Terminal ',
  flights: [flight1._id,flight2._id],
  capacity: 234324
})
// var terminal2 = ''
terminal1.save((err, data) => {
  if(err) console.log(err)
  else{
    // terminal2 = data
    console.log('Terminal 1 Created', terminal1)
  }
})

//
let airport = new Airport({
  name: 'JFK',
  country: 'USA',
  terminals: [terminal1],
  opened: '1990'
})

airport.save((err) => {
  if(err) console.log(err)
  else{
    console.log('Airport Created', airport)
  }
})
app.listen(port)
