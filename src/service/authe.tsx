import API from './api';


export async function signIn(data:object) {
    //  Coloque Sua Rota de Login no lugar de "/login"
    const response = await API.post("/login", data)

    return response;
} 
 
