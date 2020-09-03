const addactivity = require('../middleware/addactivity');
const Router  = require("express").Router();

Router.post('/',  async (req, res) =>{

    let body = req.body;
    let activityName = body.activity;
    let plants = body.plants;
    //TODO: handle faulty/empty inputs
    let response = await addactivity(activityName, plants);
    res.status(200).send(`${response}`)

})

module.exports = Router