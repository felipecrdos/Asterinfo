const express = require('express')
const route = express.Router()
const AsteroidModel = require('../models/AsteroidModel')


route.get('/', async (req, res, next)=>{
    try{
        const asteroids = await AsteroidModel.find()
        res.json(asteroids)
    }
    catch(err){
        res.json({message: err})
    }
})
route.get('/:id', (req, res, next)=>{
    
})
route.post('/save', async (req, res, next)=>{
    try{
        const asteroid = await AsteroidModel.create({
            _id:req.body._id,
            name:req.body.name,
            diameter:req.body.diameter,
            sum_distance:req.body.sum_distance,
            discovery_date:req.body.discovery_date,
            finder:req.body.finder
        })
        res.json(asteroid)
    }
    catch(err){
        console.log(res.json({message:err}))
    }
})
route.put('/update', (req, res, next)=>{
    
})
route.delete('/delete', (req, res, next)=>{
    
})

module.exports = route