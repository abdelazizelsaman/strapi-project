const retrievelog = require('../middleware/retrievelog');
const Router  = require("express").Router();

Router.get('/',  async (req, res) =>{

    let body = req.body;
    let plantId = body.plantId;
    let log = await retrievelog(plantId);
    
    let print = JSON.stringify(log)
    res.status(200).send(`${plantId} \n ${print}`)

})

module.exports = Router