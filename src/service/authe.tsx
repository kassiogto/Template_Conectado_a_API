import API from './api';


export async function signIn(data:object) {
    const response = await API.post("/login", data)

    return response;
} 
 