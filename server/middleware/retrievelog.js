const axios = require('axios')
const auth = require('../middleware/authentication');

async function retrievelog(plantId){

    const jwt = await auth();

    try{
        let plant = await axios.get(`http://localhost:1337/plants/${plantId}`, {
            headers: {  
              Authorization:
                'Bearer '+jwt
            }
          });
        return plant.data.activities.log
    }
    catch(err){
        console.log(err.response)
    }
    
}

module.exports = retrievelog