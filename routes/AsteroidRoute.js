const express = require('express')
const mongoose = require('mongoose')
const route = express.Router()
const AsteroidModel = require('../models/AsteroidModel')

// GET RANDOM
route.get('/random', async (req, res)=>{
    try{
        const len = await AsteroidModel.estimatedDocumentCount()
        const asteroid = await AsteroidModel.findById(Math.floor(Math.random() * len + 1))
        res.json(asteroid)
    }
    catch(err){
        res.json(err)
    }
})

// GET BY ID
route.get('/:id', async (req, res)=>{
    try{
        const asteroid = await AsteroidModel.findById(req.params.id)
        res.json(asteroid)
    }
    catch(err){
        res.json({message:err})
    }
})

// GET ALL
route.get('/', async (req, res)=>{
    try{
        const asteroids = await AsteroidModel.find()
        res.json(asteroids.sort((a, b)=> a._id - b._id))
    }
    catch(err){
        res.json({message: err})
    }
})

// POST
route.post('/save', async (req, res)=>{
    try{
        // const asteroid = await AsteroidModel.create({
        //     _id:req.body._id,
        //     name:req.body.name,
        //     diameter:req.body.diameter,
        //     sum_distance:req.body.sum_distance,
        //     discovery_date:req.body.discovery_date,
        //     finder:req.body.finder
        // })
        // res.json(asteroid)
        res.json({message:"SAVED" ,asteroid: req.body})
    }
    catch(err){
        res.json({message:err})
    }
})

// UPDATE BY ID
route.put('/update/:id', async (req, res)=>{
    try{
        const asteroid = await AsteroidModel.updateOne({_id:req.params.id},{$set:{
            name:req.body.name,
            diameter:req.body.diameter,
            sum_distance:req.body.sum_distance,
            discovery_date:req.body.discovery_date,
            finder:req.body.finder
        }})
        res.json(asteroid)
    }
    catch(err){
        res.json({message:err})
    }
})

// DELETE BY ID
route.delete('/delete/:id', async (req, res)=>{
    try{
        // const asteroid = await AsteroidModel.deleteOne({_id:req.params.id})
        // res.json(asteroid)
        const asteroid = await AsteroidModel.findById(req.params.id)
        res.json({message:"DELETED!",asteroid:asteroid})
    }
    catch(err){
        res.json({message:err})
    }
})

module.exports = route