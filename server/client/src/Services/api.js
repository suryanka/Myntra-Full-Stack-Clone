import axios from 'axios'

const url= 'https://myntra-full-stack-clone-backend.vercel.app';

export const authenticateLogin= async (data)=> {

    try{
        return await axios.post(`${url}/login`, data);
    }
    catch(error){
        console.log(`Error while calling login api is: ${error.message}`);
    }
}

export const authenticateSignup= async(data) => {
    try{
        return await axios.post(`${url}/signup`, data);
    }
    catch(error){
        console.log(`Error while calling signup api is: ${error.message}`);
    }
}
