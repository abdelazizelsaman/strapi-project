const addactivity = require('../middleware/addactivity');
const Router  = require("express").Router();

Router.post('/',  async (req, res) =>{

    try{
        let body = req.body;
        let activityName = body.activity;
        let plants = body.plants;
        //TODO: handle bad/empty inputs
        let response = await addactivity(activityName, plants);
        res.status(200).send(`${response}`)
    }
    catch(err){
        console.log(err.response)
    }
})

module.exports = Router