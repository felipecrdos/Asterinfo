const fs = require('fs')
const AsteroidModel = require('../models/AsteroidModel')

const createSomeData = async function(){
    try{
        let asteroidData = await fs.readFileSync('data/data.json', 'utf-8')
        let asteroidObj = JSON.parse(asteroidData)
        for(obj of asteroidObj){
           await AsteroidModel.create(obj)
        }
    }catch(err){
        console.log(err)
    }
}

module.exports = {createSomeData}