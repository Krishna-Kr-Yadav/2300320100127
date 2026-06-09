const axios = require('axios');

const LOG_API_URL = "http://4.224.186.213/evaluation-service/logs";

async function Log(stack,level,package,message){
    try{
        const payload = {
            stack,
            level,
            package,
            message
        };
        const response = await axios.post(LOG_API_URL,payload,{
            headers:{
                'Content-Type':'application/json',
            },
        });
        return response.data;
    } catch (err){
        console.error('Logging middleware failed:', err.message);
    }
}

module.exports = Log;