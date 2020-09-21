import axios from 'axios';

const API = axios.create({ 
    //Coloque a Url de sua API
    baseURL: 'http://localhost:3333/'
 })

export default API;
