const axios = require('axios');

 function authenticate(){
    const user = process.env.ADMIN;
    const password = process.env.PASSWORD;

    let url = "http://localhost:1337/auth/local"

    const data = axios.post(url,
        {
            identifier: user,
            password: password
        }).then( (res)=>{
            return res.data.jwt;
        }).catch( (err) =>{
            console.log(err)
            return false
        })

        return data;

    

    //return Promise.resolve(data)

    
    
}

module.exports = authenticate