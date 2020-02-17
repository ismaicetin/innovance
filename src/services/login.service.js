import { http } from './axios'

async function login (sendData)  {  
    return sendData 
    // return http.post("/login", sendData)
}

function register (sendData) {
    return http.post("/create/", sendData)
}

  
export default {
    login, 
    register, 
}; 
