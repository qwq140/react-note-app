import axios from "axios";

const BASE_URL = 'http://localhost:8080';

const api = axios.create({
    baseURL : BASE_URL,
    headers : {
        'Content-Type': 'application/json',
    }
});

// 토큰을 요청 헤더에 추가
api.interceptors.request.use(config => {
    const token = localStorage.getItem('accessToken');
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, error => {
    return Promise.reject(error)
});


export default api;