const axios = require('axios')
const auth = require('../middleware/authentication');



async function addactivity(activityname, plants){
    const jwt = await auth();
    for (let i=0 ; i<plants.length ; i++){
        try{
            let plant = await axios.get(`http://localhost:1337/plants/${JSON.stringify(plants[i]).replace(/"/g,'')}`,  {
                headers: {  
                  Authorization:
                    'Bearer '+jwt
                }
              });

              if (plant != undefined){
                await axios.put(`http://localhost:1337/plants/${plants[i]}`,{headers:{
                    Authorization:
                    'Bearer '+jwt
                },
                activities: activityname
                 })
            }
        }catch(err){
            console.log(err.response)
        }

  

      
    }
    // let plant = await axios.get(`http://localhost:1337/plants/`,  {
    //     headers: {  
    //       Authorization:
    //         'Bearer '+jwt
    //     }
    //   });

    //   console.log(plant.data)
    //   return plant.data;
}

module.exports = addactivity