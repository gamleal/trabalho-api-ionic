import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dog.ceo/api/breeds/image/random',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;