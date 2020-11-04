const mongoose = require('mongoose')

const AsteroidSchema = mongoose.Schema({
    _id:Number,
    name:String,
    diameter:Number,
    sum_distance:String,
    discovery_date:String,
    finder:String
})

module.exports = mongoose.model("Asteroid", AsteroidSchema)