const retrievelog = require('../middleware/retrievelog');
const Router  = require("express").Router();

Router.get('/',  async (req, res) =>{

    let body = req.body;
    let plantId = body.plantId;
    let response = await retrievelog(plantId);
    res.status(200).send(`${JSON.stringify(response)}`)

})

module.exports = Router