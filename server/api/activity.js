const addactivity = require('../middleware/addactivity');
const Router  = require("express").Router();

Router.post('/',  async (req, res) =>{

    let body = req.body;
    let activityName = body.activity;
    let plants = body.plants;
    //TODO: handle faulty/empty inputs
    let plant = await addactivity(activityName, plants);
    
    let print = JSON.stringify(plant)
    res.status(200).send(`${activityName}\n ${plants} \n ${print}`)

})

module.exports = Router