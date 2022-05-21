import axios from "axios";

const baseURL = 'https://superheroapi.com/api';
const api_key = '5090560807724078';

const api = axios.create({
    baseURL: baseURL,
    params: {
        api_key: api_key
    }
});

export default api;