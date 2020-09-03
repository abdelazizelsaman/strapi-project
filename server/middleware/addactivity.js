const axios = require('axios')
const auth = require('../middleware/authentication');
var mergeJSON = require("merge-json") ;
const { json } = require('express');




async function addactivity(activityname, plants){
    const jwt = await auth();
    for (let i=0 ; i<plants.length ; i++){
        try{
            let plant = await axios.get(`http://localhost:1337/plants/${plants[i]}`,  {
                headers: {  
                  Authorization:
                    'Bearer '+jwt
                }
              });

              if (plant != undefined){
                let ts = Date.now();
                let d = new Date(ts);
                let time = d.toLocaleTimeString('en-EG');
                let date = d.toDateString()

                let activities = plant.data.activities;

                let activitylog = {
                    "activityName": activityname,
                    "timestamp": `${date} ${time}`
                }

                activities["log"].push(activitylog)

                console.log(activities);

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