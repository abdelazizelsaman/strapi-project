const axios = require('axios')
const auth = require('../middleware/authentication');

async function retrievelog(plantId){

  try{
      const jwt = await auth();
      
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