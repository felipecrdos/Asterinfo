const express = require('express')
const cors = require('cors')
const mongo = require('mongoose')
const dotenv = require('dotenv/config')
const route = require('./routes/AsteroidRoute')
const util = require('./util/util')
//const data = require('./data/data.json')
const fs = require('fs')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/createsomedata', async (req, res, next)=>{
    //util.createSomeData()
    res.json({message:"Create Some Data..."})
    next()
})
app.use('/asteroid', route)

mongo.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log("Mongodb connected...")
})
const port = process.env.PORT || 3000
const host = 'localhost'
app.listen(port, host, ()=>{
    console.log(`Server running on ${host}:${port}`)
})