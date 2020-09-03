const axios = require('axios')
const auth = require('../middleware/authentication');
var mergeJSON = require("merge-json") ;
const { json } = require('express');


async function addactivity(activityname, plants){
    const jwt = await auth();
    for (let i=0 ; i<plants.length ; i++){
        try{
            // check if plant exists
            let plant = await axios.get(`http://localhost:1337/plants/${plants[i]}`,  {
                headers: {  
                  Authorization:
                    'Bearer '+jwt
                }
              });

              if (plant != undefined){
                // get time of request
                let ts = Date.now();
                let d = new Date(ts);
                let time = d.toLocaleTimeString('en-EG');
                let date = d.toDateString()

                // get current activities log object
                let activities = plant.data.activities;

                //create new activity log entry
                let activitylog = {
                    "activityName": activityname,
                    "timestamp": `${date} ${time}`
                }
                // add new entry to current log object
                activities["log"].push(activitylog)
                
                activities = {
                    "activities":activities
                }

                let Authorization = {Authorization: `Bearer ${jwt}`};
                await axios(
                    {
                        method: "put",
                        url: `http://localhost:1337/plants/${plants[i]}`,
                        data: activities,
                        headers: Authorization
                    }
                );
            }
        }catch(err){
            console.log(err.response)
        }
    }
    return `Activities ${activityname} is applied to ${plants}`

}

module.exports = addactivity